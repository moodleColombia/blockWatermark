var urlExam = window.location.href;
// Activa bloqueos si la URL esta asociada a cualquier apartado de cuestionarios en moodle
if (urlExam.match('mod/quiz')) {

    // Vincula el nombre del usuario como marca de agua
    var questions = document.getElementsByClassName('formulation');
    var my_happy_user = document.getElementsByClassName("usertext")[0].textContent;
    for (let i = 0; i < questions.length; i++) {
        questions[i].setAttribute('data-value', my_happy_user);
    }

    /** Para el manejo de alertas **/
    function lockoutAlert(icon_alert, title_alert, text_alert) {
        Swal.fire({
            icon: icon_alert,
            title: title_alert,
            text: text_alert,
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false
        });
    }

    /** Personzaliza consola ante acceso de herramientas del desarrollador (F12) **/
    console.error('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');  
    console.warn('%cEsta es una función del navegador destinada a desarrolladores. Si alguien le dijo que copie y pegue algo aquí para habilitar una función o "piratear" la integridad del curso, será reportado y se le bloquerá el acceso a su cuenta', 'font-size:1.25rem;line-height:1.1;'); 

    document.oncontextmenu = function() { // Deshabilita acceso a herramientas del desarrollador por clic derecho
        lockoutAlert('warning', 'Clic derecho deshabilitado!', 'Estamos trabajando en mejorar el nivel de seguridad de nuestros cuestionarios.');
        return false;
    };

    /** Evento a escucha de tecla suelta **/
    document.addEventListener('keyup', (e) => {
        if (e.key == 'PrintScreen') { // Deshabilita captura de pantalla --> Tecla (imp pnt)
            navigator.clipboard.writeText('');
            lockoutAlert('error', 'Capturas de pantalla deshabilitadas!', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
        }
    });

    /** Opciones para deshabilitar intercambio de datos **/
    function optionsToDisable(e) {
        if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') { // Bloqueo de impresiones --> Comando Ctrl+P
            lockoutAlert('error', 'Esta sección no se permite imprimir o exportar en PDF', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
            e.preventDefault();
        } else if (e.metaKey && e.shiftKey) { // Se sobrepone pantalla ante recorte del Sistema Operativo Windows --> Comando Windows+Shift+S
            Swal.fire({
                icon: 'warning',
                title: 'Recortes de pantalla detectados!',
                text: 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado',
                backdrop: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                grow: 'fullscreen'
            });
        } else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') { // Bloqueo de copiado --> Comando Ctrl+C
            lockoutAlert('error', 'Esta sección no se permite copiar', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
            e.preventDefault();
        } else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') { // Bloqueo de cortado --> Comando Ctrl+X
            lockoutAlert('error', 'Esta sección no se permite cortar', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
            e.preventDefault();
        } else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') { // Bloqueo de pegado --> Comando Ctrl+V
            lockoutAlert('error', 'En esta sección no se permite pegar información', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
            e.preventDefault();
        }
    }

    /** Evento a escucha de tecla undida **/
    document.addEventListener('keydown', (e) => { optionsToDisable(e) });


    /** Ajuste para bloqueos sobre el editor tinyMCE **/
    window.addEventListener('load', function() {
        setTimeout(function() {
            var iframeContent = document.getElementsByClassName('mceIframeContainer');
            for (let index = 0; index < iframeContent.length; index++) {
                iframeContent[index].children[0].contentWindow.document.addEventListener('keydown', (e) => { optionsToDisable(e) });
            }
        }, 3000);
    });


}