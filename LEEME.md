# Il Nonno · Landing page

Landing completa construida con la dirección de arte y el orden de secciones aprobados. Revisión final y publicación aprobadas por el usuario. El despliegue se gestiona en Sites.

Abrir index.html manteniendo site.css, site.js y las carpetas img y vendor a su lado. La muestra original aprobada se entrega por separado. La carpeta de entrega para hosting es outputs/il-nonno-web y el ZIP il-nonno-web.zip contiene únicamente el sitio completo, sin la muestra ni capturas de revisión.

## Qué incluye
- Portada con foto real, titular aprobado y apertura de paños bordó.
- La barbería: fotografías del interior, detalle del sillón e identidad italiana.
- Servicios: corte de pelo clásico o moderno, afeitado a navaja y toalla caliente. Valores y disponibilidad se consultan por WhatsApp; no se inventaron precios.
- Galería de cuatro trabajos reales, cada uno enlazado a su publicación original.
- Ubicación y horario del negocio, con búsqueda en Google Maps.
- Reserva por WhatsApp y enlace de llamada.
- Menú móvil accesible mediante el elemento nativo details y navegación de escritorio.
- Botón fijo móvil que aparece al pasar la portada y se oculta en reservas.
- Metadatos, favicon, icono de inicio, imagen para compartir de 1200 × 630 y datos estructurados de HairSalon.

## Editar el sitio
1. Textos, teléfono, horarios y enlaces: index.html. Los mensajes de WhatsApp están codificados en los enlaces para funcionar también sin JavaScript.
2. Colores y tamaños: variables de :root en site.css. Mantener el contraste de los textos al cambiar colores.
3. Fotos: img/. Reemplazar por originales del negocio manteniendo los nombres o actualizar las rutas en index.html.
4. Movimiento: objeto M de site.js. La curva de entrada coincide con --ease del CSS, y la de apertura coincide con --ease-io.
5. Ante cambios de CSS o JS publicados, actualizar ?v=20261028a en index.html.
6. Sin pasos de instalación ni compilación: es una web estática con dependencias locales.

## Configuración de publicación
La versión de Sites incluye canonical, og:url y URL absoluta de la imagen para compartir. El acceso inicial es privado. No se creó un QR: todavía no hay dominio propio del negocio.

## Datos y recursos comprobados el 28 de octubre de 2026
- Instagram: https://www.instagram.com/ilnonnobarber/
- Logo original: https://taplink.st/a/1/a/4/c/d33bce.png?1
- Información y enlace de WhatsApp: https://ilnonno.taplink.ws/
- Dirección: Constitución 264, Haedo.
- Horarios: lunes a sábados, de 10 a 20 h.
- WhatsApp de reservas publicado por el negocio: +54 9 11 6027-4506.
- Servicios del perfil: cortes clásicos y modernos, afeitado a navaja y toalla caliente.
- Fotografía: miniatura pública del reel de Il Nonno del 28 de octubre de 2026, https://www.instagram.com/ilnonnobarber/reel/DfDUAqqKlno/ . No es fotografía de stock. La resolución disponible es limitada; conviene sustituirla por el original para el sitio definitivo.
- Referencias locales: 320653e3fd646afc98ef15105cc2edbe.jpg y 49be88e190e8a9e03f34a60fa958afb1.jpg. Se toma jerarquía, fotografía y ritmo; no sus textos ni recursos.

## Dirección propuesta y por validar
- Concepto: “El ritual de Il Nonno”. Titular redactado para la propuesta: “Tu corte. Tu ritual.”
- Verde #263C32, crema #F2EDDF, bordó #781D30 y verde sombra #15271F: aproximaciones a sus recursos públicos; falta el manual de marca para confirmar valores oficiales.
- Georgia para títulos y Arial para cuerpo. Propuesta provisional de tipografía, no identificada como fuente oficial del negocio.
- Elementos: inscripción arqueada del logo, paños bordó de sus destacadas y recortes verticales para fotografía.
- Firma: los paños abren la foto; el texto entra con un recorrido corto. Sin pantalla de carga bloqueante. Se completa al tocar la portada y tiene respaldo temporal.
- Duración base .8 s, distancia 24 px, escalonado .06 s, GSAP power3.out. Botones: 160 ms, cubic-bezier(.23,1,.32,1).
- Librerías locales: GSAP y ScrollTrigger 3.13.0; Lenis 1.3.11 descargado para continuidad con el futuro sitio, sin activar scroll artificial en la muestra.
- Menos movimiento: sin reproducción automática, botón de repetición con fundido. Sin JavaScript: todo el contenido visible.
- Recorrido aprobado e implementado: portada, la barbería, servicios, trabajos reales, horarios y ubicación, reserva.

## Pendientes
- Dirección visual, movimiento y estructura aprobados en este chat.
- Colores y tipografías propuestos aprobados; opcionalmente contrastarlos con archivos oficiales si existen.
- Obtener logo vectorial y fotografías originales de mayor tamaño si están disponibles.
- No hay precios, testimonios ni cifras inventadas en la muestra.

## Verificación
Landing revisada en 360 × 812, 375 × 812 y 1440 × 900, además de celular sin JavaScript y con movimiento reducido. Sin desbordes, imágenes rotas ni errores de consola. Botón de reserva completo en la primera pantalla. Contrastes crema/verde 10.12:1, crema/bordó 8.90:1 y sombra/crema 13.38:1. Validación de JavaScript correcta. Mensajes de WhatsApp revisados: siete enlaces al número publicado por el negocio, con mensajes propios por ubicación y servicio. Navegación a servicios comprobada en la vista previa. Falta prueba en dispositivos físicos y medición de velocidad en el hosting final. Ningún mensaje fue enviado.

La web conserva scroll nativo, sin Lenis activo. Animación base .8 s, recorrido 24 px, escalonado .06 s; CustomEase con cubic-bezier(.23,1,.32,1) y apertura cubic-bezier(.77,0,.175,1). GSAP/ScrollTrigger/SplitText/CustomEase 3.13.0, Lenis 1.3.11 descargado. Los elementos son visibles antes de inicializar el movimiento; los revelados no bloquean la lectura. La intro se completa al tocar y tiene respaldo temporal. Menos movimiento desactiva entradas y paños.

## Fuentes de las fotografías adicionales
Fotografías descargadas del perfil público el 28 de octubre de 2026:
- Interior con café: https://www.instagram.com/ilnonnobarber/reel/DeuYq15K1dU/
- Sillón: https://www.instagram.com/ilnonnobarber/reel/Dd-C8_-K1r1/
- Fachada: https://www.instagram.com/ilnonnobarber/reel/Dd40BcNqn6L/
- Trabajo de barba: https://www.instagram.com/ilnonnobarber/reel/De0HzkFKXqe/
- Contornos: https://www.instagram.com/ilnonnobarber/reel/DedKLqbKhxs/
- Resultado: https://www.instagram.com/ilnonnobarber/reel/DeKkVKsqyvE/

Se usan fotografías reales disponibles públicamente en el perfil del negocio indicado por el cliente. No se fabricaron personas, reseñas ni historial del negocio.

## Revisión de diseño adicional
Se comprobaron también tablet de 768 y celular de 390 de ancho. Se mantuvieron las etiquetas, el crema y los separadores del horario por formar parte de la dirección aprobada y por presentar datos. Se retiraron numeración decorativa, líneas de servicios y sombra del botón fijo. Las descripciones de servicios usan 16 px. El menú cerrado se oculta explícitamente para evitar medidas incorrectas de su contenido. La firma vertical al borde es una decisión visual aprobada. No se incorporó video: Instagram requiere iniciar sesión para acceder al clip; las fotos reales mantienen la experiencia completa. Los tamaños de letra responden a cinco funciones con ajustes por pantalla: portada, título, servicio, cuerpo y texto auxiliar.


## Alojamiento en Sites
URL asignada: https://il-nonno-barber-haedo.spunkyfairy19.chatgpt.site/
Publicación solicitada y aprobada el 28 de octubre de 2026. Acceso inicial privado del propietario. Proyecto: appgprj_6ae28a0b65608191b5120ed4fc16f72a. Código de publicación en work/il-nonno-site; carpeta pública dist. Metadatos de URL e imagen social actualizados. No se modificó ningún dominio ni DNS externo.


Publicación confirmada: correcta. URL activa: https://il-nonno-barber-haedo.spunkyfairy19.chatgpt.site . Versión: appgprj_6ae28a0b65608191b5120ed4fc16f72a~appgver_307c9f3ffc608191a9ab27200ac0a0ae . Acceso privado del propietario.

