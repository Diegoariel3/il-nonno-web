(() => {
  'use strict';
  const d=document, html=d.documentElement;
  const $=(s,c=d)=>c.querySelector(s), $$=(s,c=d)=>Array.from(c.querySelectorAll(s));
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const M={dur:.8,stagger:.06,dist:24,ease:'ilnonno-out',easeIO:'ilnonno-inout',lerp:0};
  const hasGSAP=!!(window.gsap&&window.ScrollTrigger);
  let intro=null;
  const safe=fn=>{try{fn()}catch(error){console.warn('Il Nonno:',error);html.classList.remove('js')}};

  // Navegación y contacto funcionan sin librerías de animación.
  safe(()=>{
    const menu=$('.mobile-menu');
    d.addEventListener('click',e=>{if(e.target.closest('.mobile-menu a'))menu.open=false;else if(!menu.contains(e.target))menu.open=false});
    d.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;$('summary',menu).focus()}});
    d.addEventListener('click',e=>{
      const link=e.target.closest('a[href^="#"]');if(!link)return;
      const target=d.getElementById(link.getAttribute('href').slice(1));if(!target)return;
      e.preventDefault();target.scrollIntoView({behavior:motion.matches?'instant':'smooth'});
      history.replaceState(null,'',link.getAttribute('href'));
      if(link.classList.contains('skip')){target.tabIndex=-1;target.focus({preventScroll:true})}
    });
  });
  safe(()=>{
    if(!('IntersectionObserver' in window))return;
    const bar=$('.mobile-cta'), first=$('[data-cta-start]'), last=$('#contacto');let past=false,atEnd=false;
    const update=()=>{const show=past&&!atEnd;bar.classList.toggle('is-visible',show);bar.setAttribute('aria-hidden',String(!show));$('a',bar).tabIndex=show?0:-1};
    new IntersectionObserver(([entry])=>{past=!entry.isIntersecting&&entry.boundingClientRect.top<0;update()}).observe(first);
    new IntersectionObserver(([entry])=>{atEnd=entry.isIntersecting;update()},{threshold:0}).observe(last);
  });
  if(!hasGSAP){html.classList.remove('js');return}
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ignoreMobileResize:true});
  if(window.CustomEase){gsap.registerPlugin(CustomEase);CustomEase.create(M.ease,'.23,1,.32,1');CustomEase.create(M.easeIO,'.77,0,.175,1')}
  else{M.ease='power3.out';M.easeIO='power3.inOut'}

  // La firma termina en la portada real y se puede saltar con un toque.
  safe(()=>{
    if(motion.matches)return;
    intro=gsap.timeline({defaults:{ease:M.ease},onComplete:()=>gsap.set('.curtain',{display:'none'})});
    intro.set('.curtain',{display:'block'})
      .fromTo('.curtain-left',{xPercent:0},{xPercent:-101,duration:M.dur*1.4},0)
      .fromTo('.curtain-right',{xPercent:0},{xPercent:101,duration:M.dur*1.4},0)
      .fromTo('.hero-photo>img',{scale:1.055},{scale:1,duration:M.dur*1.7},0)
      .fromTo('.hero-copy>*',{opacity:0,y:M.dist},{opacity:1,y:0,duration:M.dur,stagger:M.stagger},.14);
    $('.hero').addEventListener('pointerdown',()=>intro?.progress(1),{once:true});
    setTimeout(()=>{if(intro&&intro.progress()<1)intro.progress(1)},2600);
  });
  // Cada gesto se ejecuta una sola vez. El contenido arranca visible en el HTML.
  const context=gsap.matchMedia();
  context.add('(prefers-reduced-motion: no-preference)',()=>{
    safe(()=>{
      ScrollTrigger.batch('[data-reveal]',{start:'top 92%',once:true,onEnter:batch=>gsap.fromTo(batch,{opacity:.35,y:M.dist},{opacity:1,y:0,duration:M.dur,ease:M.ease,stagger:Math.min(M.stagger,.3/batch.length),overwrite:'auto'})});
    });
    safe(()=>{
      $$('[data-image]').forEach(el=>ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.fromTo(el,{clipPath:'inset(0 50% 0 50%)'},{clipPath:'inset(0 0% 0 0%)',duration:M.dur*1.25,ease:M.easeIO})}));
    });
    safe(()=>{
      const rows=$$('[data-service]');
      ScrollTrigger.batch(rows,{start:'top 90%',once:true,onEnter:batch=>gsap.fromTo(batch,{opacity:.35,x:-M.dist},{opacity:1,x:0,duration:M.dur,ease:M.ease,stagger:M.stagger})});
    });
    safe(()=>{
      if(!window.SplitText)return;
      gsap.registerPlugin(SplitText);
      const splitTitles=()=>{
        $$('[data-split]').forEach(el=>SplitText.create(el,{type:'lines',mask:'lines',linesClass:'linea',autoSplit:true,onSplit:self=>gsap.from(self.lines,{yPercent:125,duration:M.dur,ease:M.ease,stagger:M.stagger,scrollTrigger:{trigger:el,start:'top 90%',once:true}})}));
        ScrollTrigger.refresh();
      };
      if(d.fonts)d.fonts.ready.then(()=>safe(splitTitles));else splitTitles();
    });

  });
  window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
  motion.addEventListener('change',()=>{
    if(intro)intro.progress(1);
    gsap.set('.curtain,.contact-curtain',{display:'none'});
    ScrollTrigger.refresh();
  });
})();
