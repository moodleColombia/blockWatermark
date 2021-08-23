# Block Watermark
Es una herramienta que opera sobre actividades tipo cuestionario de Moodle, permite contribuir a la integridad académica y el control de la evaluación del aprendizaje mediante una serie de funcionalidades como: fijar marca de agua con los datos del alumno o profesor que presenta la evaluación, restringir diversos métodos de intercambio de datos y algunos métodos asociados a capturas de pantalla.

#### Bloqueos automáticos:
* No se permite copiar
* No se permite pegar
* No se permite cortar
* No se permite exportar a PDF, ni imprimir
* No se permite realizar recortes, ni capturas de pantalla
* No se permite hacer clic con el botón derecho del ratón
* Si el estudiante ingresa a opciones de desarrollador, se le proporciona una advertencia relacionada con "hackear" la integridad del curso.

#### Tecnologías implicadas
La herramienta ha sido desarrollada en Javascript, implementa la librería Sweetalert2 para el manejo de alertas, algunas API’s de navegadores web para cancelación de eventos y se fundamenta en la detección de comandos por detección de teclas; mediante el manejo de estilos CSS permite la personalización de la marca de agua.

##### Documentación para desarrolladores
* Javascript Event KeyCodes: https://keycode.info/
* Librería sweetAlert2: https://sweetalert2.github.io/
* Objeto console: https://developer.mozilla.org/es/docs/Web/API/Console
* Clipboard API: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
* Método para cancelación de eventos: https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
* Evento oncontextmenu: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu
* Fullscreen API: https://developer.mozilla.org/es/docs/Web/API/Fullscreen_API


#### Implementación sobre Moodle
1. Activar edición de Moodle sobre la página principal para crear un bloque HTML de sistema.
2. Colocar el título de bloque: Block WaterMark
Dentro del contenido pegar el siguiente código teniendo en cuenta la ruta de los archivos JS y CSS:
```html
<div id="id_blockWatermark"></div>
<!-- Sweetalert2-->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<!-- Block Watermark -->
<link rel="stylesheet" href="TU-RUTA-AL-ARCHIVO/css/watermark.css">
<script src="TU-RUTA-AL-ARCHIVO/js/disablePrintScreen.js"></script>
```
3. Configurar Dónde aparece este bloque: Mostrar en todo el sitio. Vincular de preferencia un peso por defecto -10 (Primero).
4. Ingresar a cualquier actividad tipo cuestionario de cualquier curso y volver a Configurar Dónde aparece este bloque: Cualquier página del módulo cuestionario.

***Nota:*** Recuerda modificar el archivo CSS para personalizar con el logo institucional o marca que se desea usar sobre el selector **.formulation::before**

#### Información de contacto
👋 Desarrollador: Diego Javier Mena Amado  
E-mail: ingelectronicadj@gmail.com  
Personal Website: https://diegiot.tk/  