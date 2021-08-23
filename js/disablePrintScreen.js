var translate = {
    select: function(word, language = null) {
        languageSelected = 0;
        var wordToSelect = null;

        if (!language) {
            language = document.documentElement.lang;
        }

        switch (language) {
            case 'es':
            case 'es-co':
                languageSelected = 0;
                break;
            case 'en':
            case 'en-us':
                languageSelected = 1;
                break;
            case 'fr':
                languageSelected = 2;
                break;

            default:
                languageSelected = 0;
                break;
        }

        //español, inglés, frances

        words = {
            'in-this-section-it-is-not-allowed-to-paste-information': ['En esta sección no se permite pegar información.', 'In this section it is not allowed to paste information.', 'Dans cette section, il n\'est pas permis de coller des informations.'],
            'please-do-not-try-again': ['Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado.', 'Please do not try again or your access will be interrupted and reported.', 'Veuillez ne pas réessayer ou votre accès sera interrompu et signalé.'],
            'right-click-disabled': ['Clic derecho deshabilitado!', 'Right click disabled!', 'Clic droit désactivé !'],
            'screen-clippings-detected': ['Recortes de pantalla detectados!', 'Screen clippings detected!', 'Coupures d\'écran détectées !'],
            'screenshots-disabled': ['Capturas de pantalla deshabilitadas!', 'Screenshots disabled!', 'Captures d\'écran désactivées!'],
            'this-is-a-browser-feature': ['Esta es una función del navegador destinada a desarrolladores. Si alguien le dijo que copie y pegue algo aquí para habilitar una función o "piratear" la integridad del curso, será reportado y se le bloquerá el acceso a su cuenta', 'This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or "hack" the integrity of the course, you will be reported and access to your account will be blocked.', 'Il s\'agit d\'une fonctionnalité du navigateur destinée aux développeurs. Si quelqu\'un vous a dit de copier et coller quelque chose ici pour activer une fonction ou "pirater" l\'intégrité du cours, vous serez signalé et l\'accès à votre compte sera bloqué.'],
            'this-section-is-not-allowed-to-print-or-export-in-PDF': ['Esta sección no se permite imprimir o exportar en PDF', 'This section is not allowed to print or export in PDF.', 'Cette section n\'est pas autorisée à être imprimée ou exportée en PDF.'],
            'this-section-is-not-allowed-to-copy': ['Esta sección no se permite copiar', 'This section is not allowed to copy', 'Cette section ne peut pas être copiée'],
            'this-section-is-not-allowed-to-cut': ['Esta sección no se permite cortar', 'This section is not allowed to cut', 'Cette section n\'est pas autorisée à couper'],
            'to-learn-more': ['Para saber más', 'To learn more', 'Pour en savoir plus'],
            'tool-description': ['<p>Es una herramienta que permite contribuir a la integridad de las evaluaciones con una serie de funcionalidades, tales como: fijar marca de agua con datos del alumno o profesor que presenta la evaluación, restringir diferentes métodos de capturas de pantalla y restringir métodos de intercambio de datos. </p><br> <h2>Bloqueos automáticos:</h2> <ul style="text-align: justify"> <li>No está permitido copiar</li> <li>No se permite pegar</li> <li>No se permite cortar</li> <li>No está permitido exportar a PDF, ni imprimir</li> <li>No está permitido realizar capturas de pantalla</li> <li>Está limitado a recortar la pantalla</li> <li>No está permitido hacer clic con el botón derecho del mouse</li></ul>', '<p>It is a tool that allows to contribute to the integrity of the evaluations with a series of functionalities, such as: to fix watermark with data of the student or teacher who presents the evaluation, to restrict different methods for screen captures and to restrict methods for data exchange. </p><br> <h2>Automatic locks:</h2> <ul style="text-align:justify"> <li>You are not allowed to copy</li> <li>You are not allowed to paste</li> <li>Not allowed to cut </li> <li>You are not allowed to export to PDF, nor to print</li> <li>You are not allowed to take screenshots</li> <li>You are limited to screen clipping</li> <li>You are not allowed to right-click</li></ul>', '<p>C\'est un outil qui permet de contribuer à l\'intégrité des évaluations avec une série de fonctionnalités, telles que : fixer un filigrane avec les données de l\'étudiant ou de l\'enseignant qui présente l\'évaluation, restreindre les différentes méthodes de capture d\'écran et restreindre les méthodes d\'échange de données. </p><br> <h2>Verrous automatiques:</h2> <ul style="text-align: justify"> <li>Vous n\'êtes pas autorisé à copier</li> <li>Vous n\'êtes pas autorisé à coller</li> <li>Interdiction de couper</li> <li>Vous n\'êtes pas autorisé à exporter en PDF, ni à imprimer</li> <li>Vous n\'êtes pas autorisé à faire des captures d\'écran</li> <li>Vous êtes limité à la coupure d\'écran</li> <li>Vous n\'êtes pas autorisé à faire un clic droit</li></ul>'],
            'tool-to-contribute-to-the-integrity-of-evaluations': ['Herramienta para contribuir a la integridad de las evaluaciones.', 'Tool to contribute to the integrity of evaluations.', 'Outil pour contribuer à l\'intégrité des évaluations.'],
            'we-are-working-on-improving-the-security-level-of-our-questionnaires': ['Estamos trabajando en mejorar el nivel de seguridad de nuestros cuestionarios.', 'We are working on improving the security level of our questionnaires.', 'Nous travaillons à l\'amélioration du niveau de sécurité de nos questionnaires.']
        }

        try {
            wordToSelect = words[word][languageSelected];
        } catch (error) {
            //console.log('No se ha encontrado la palabra ( ' + word + ' ) para el idioma: ( ' + language + " ). Se carga palabra ( X-X-X-X-X-X-X ) ");
            wordToSelect = 'X-X-X-X-X-X-X';
        }

        return wordToSelect;
    }

}

var urlExam = window.location.href;
// Activa bloqueos si la URL esta asociada a cualquier apartado de cuestionarios en moodle
if (urlExam.match('mod/quiz')) {

    let blockWatermark = document.getElementById('id_blockWatermark');
    blockWatermark.innerHTML = `<p>${translate.select('tool-to-contribute-to-the-integrity-of-evaluations')}</p>
<button class="btn btn-info" onclick="showToolinfo()">${translate.select('to-learn-more')}</button>`;

    function showToolinfo() {
        Swal.fire({
            title: 'Block Watermark',
            html: translate.select('tool-description'),
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            width: 650
        });
    }

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
    console.warn(`%c${translate.select('this-is-a-browser-feature')}`, 'font-size:1.25rem;line-height:1.1;'); 

    document.oncontextmenu = function() { // Deshabilita acceso a herramientas del desarrollador por clic derecho
        lockoutAlert('warning', translate.select('right-click-disabled'), translate.select('we-are-working-on-improving-the-security-level-of-our-questionnaires'));
        return false;
    };

    /** Evento a escucha de tecla suelta **/
    document.addEventListener('keyup', (e) => {
        if (e.key == 'PrintScreen') { // Deshabilita captura de pantalla --> Tecla (imp pnt)
            navigator.clipboard.writeText('');
            lockoutAlert('error', translate.select('screenshots-disabled'), translate.select('please-do-not-try-again'));
        }
    });

    /** Opciones para deshabilitar intercambio de datos **/
    function optionsToDisable(e) {
        if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') { // Bloqueo de impresiones --> Comando Ctrl+P
            lockoutAlert('error', translate.select('this-section-is-not-allowed-to-print-or-export-in-PDF'), translate.select('please-do-not-try-again'));
            e.preventDefault();
        } else if (e.metaKey && e.shiftKey) { // Se sobrepone pantalla ante recorte del Sistema Operativo Windows --> Comando Windows+Shift+S
            Swal.fire({
                icon: 'warning',
                title: translate.select('screen-clippings-detected'),
                text: translate.select('please-do-not-try-again'),
                backdrop: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                grow: 'fullscreen'
            });
        } else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') { // Bloqueo de copiado --> Comando Ctrl+C
            lockoutAlert('error', translate.select('this-section-is-not-allowed-to-copy'), translate.select('please-do-not-try-again'));
            e.preventDefault();
        } else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') { // Bloqueo de cortado --> Comando Ctrl+X
            lockoutAlert('error', translate.select('this-section-is-not-allowed-to-cut'), translate.select('please-do-not-try-again'));
            e.preventDefault();
        } else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') { // Bloqueo de pegado --> Comando Ctrl+V
            lockoutAlert('error', translate.select('in-this-section-it-is-not-allowed-to-paste-information'), translate.select('please-do-not-try-again'));
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