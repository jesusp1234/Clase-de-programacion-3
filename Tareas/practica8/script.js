const KNOWLEDGE_BASE = [
    {
        id: 1,
        question: "¿Qué es el Estatuto Orgánico de la UASD?",
        answer: "El <strong>Estatuto Orgánico</strong> es la norma jurídica fundamental y la carta magna de la Universidad Autónoma de Santo Domingo (UASD). En él se establecen los principios constitutivos, fines, estructura de gobierno, derechos y deberes de sus miembros (docentes, estudiantes y administrativos), así como los lineamientos generales que rigen todo su funcionamiento académico e institucional."
    },
    {
        id: 2,
        question: "¿En qué fecha fue fundada la UASD y bajo cuál nombre original?",
        answer: "La UASD fue fundada el <strong>28 de octubre de 1538</strong>. Su nombre original era <strong>Universidad Real y Pontificia Universidad de Santo Tomás de Aquino</strong>, creada en la época colonial en la isla de Santo Domingo."
    },
    {
        id: 3,
        question: "¿Quién fue el Papa que fundó la universidad y mediante qué Bula papal?",
        answer: "Fue fundada por el <strong>Papa Paulo III</strong> mediante la célebre Bula Papal <strong>'In Apostolatus Culmine'</strong> el 28 de octubre de 1538, lo que le otorgó la categoría de universidad pontificia."
    },
    {
        id: 4,
        question: "¿Cuál es el lema de la UASD y qué significa?",
        answer: "El lema oficial de la UASD es <strong>'Academia Octo en el Nuevo Mundo'</strong>. Significa 'La Academia (o Universidad) del 28 en el Nuevo Mundo', en alusión a la fecha de su fundación (28 de octubre de 1538) y a su condición de ser la Primada de América."
    },
    {
        id: 5,
        question: "¿Qué significan las siglas UASD?",
        answer: "Las siglas <strong>UASD</strong> significan <strong>Universidad Autónoma de Santo Domingo</strong>."
    },
    {
        id: 6,
        question: "¿Cuál es la misión fundamental de la UASD?",
        answer: "Su misión es: <em>'Formar críticamente profesionales, investigadores y técnicos en las ciencias, las humanidades y las artes, dotados de valores éticos y cívicos; promover la investigación científica y tecnológica; y proyectar la cultura para coadyuvar a las transformaciones sociales que demanda el desarrollo sostenible del país.'</em>"
    },
    {
        id: 7,
        question: "¿Cuál es la visión de la UASD?",
        answer: "Su visión es: <em>'Consolidarse como una institución pública de educación superior de vanguardia, democrática, líder en el desarrollo nacional, caracterizada por la excelencia académica, la transparencia en su gestión y el compromiso con el desarrollo sostenible.'</em>"
    },
    {
        id: 8,
        question: "¿Cuáles son los valores institucionales que promueve la UASD?",
        answer: "La UASD sustenta su misión y visión en los siguientes valores fundamentales: <strong>Solidaridad, Verdad, Libertad, Tolerancia, Equidad, Transparencia, Paz, Responsabilidad y Convivencia Armónica</strong>."
    },
    {
        id: 9,
        question: "¿Cómo se define la autonomía de la UASD?",
        answer: "La autonomía de la UASD implica su capacidad legal e institucional para gobernarse a sí misma, definir sus planes de estudio, administrar su patrimonio, elegir sus propias autoridades académicas y de co-gobierno, y emitir reglamentos internos, operando de manera independiente de cualquier injerencia política del Estado u otros grupos de interés."
    },
    {
        id: 10,
        question: "¿Cuál es el organismo de máxima autoridad colegiada en la UASD?",
        answer: "El organismo de máxima autoridad colegiada en la UASD es el <strong>Claustro Universitario</strong>, el cual ejerce las decisiones legislativas y normativas fundamentales de la universidad. Para su operatividad práctica se divide en Claustro Mayor y Claustro Menor."
    },
    {
        id: 11,
        question: "¿Cuáles son las tres funciones sustantivas (o fines) de la UASD?",
        answer: "Las tres funciones sustantivas que definen el quehacer de la UASD son: <ol><li><strong>Docencia:</strong> La formación de profesionales y transmisión del conocimiento.</li><li><strong>Investigación:</strong> La creación de nuevos saberes científicos y tecnológicos.</li><li><strong>Extensión:</strong> La vinculación con la sociedad civil para transferir cultura, soluciones y desarrollo social.</li></ol>"
    },
    {
        id: 12,
        question: "¿Cómo se divide el Claustro Universitario?",
        answer: "El Claustro Universitario se divide en dos estamentos:<br>1. <strong>Claustro Mayor:</strong> Encargado de la elección de autoridades (Rector, Vicerrectores, Decanos) y de reformas estructurales del Estatuto.<br>2. <strong>Claustro Menor:</strong> Organismo legislativo de menor tamaño para tareas de aprobación presupuestaria y reglamentaria de carácter general."
    },
    {
        id: 13,
        question: "¿Quiénes integran el Claustro Mayor de la UASD?",
        answer: "El Claustro Mayor está integrado por: <ul><li>El personal docente en servicio activo (profesores titulares, adscritos, adjuntos).</li><li>Los investigadores activos.</li><li>Los Profesores Meritísimos (en retiro o activos).</li><li>Los delegados estudiantiles, que representan un <strong>33.33%</strong> de la matrícula del organismo.</li><li>La representación del personal administrativo, según la proporción reglamentaria.</li></ul>"
    },
    {
        id: 14,
        question: "¿Cuáles son las atribuciones del Claustro Mayor?",
        answer: "Las principales atribuciones del Claustro Mayor son: <ul><li>Elegir al Rector/a y a los Vicerrectores/as.</li><li>Modificar total o parcialmente el Estatuto Orgánico de la UASD.</li><li>Decidir sobre asuntos trascendentes sometidos por el Consejo Universitario.</li></ul>"
    },
    {
        id: 15,
        question: "¿Quiénes integran el Claustro Menor?",
        answer: "El Claustro Menor está integrado por: <ul><li>Los miembros del Consejo Universitario.</li><li>El 66.66% de los miembros electos de las Asambleas de las distintas Facultades (personal docente).</li><li>Los delegados estudiantiles correspondientes al 33.33% de la matrícula total del Claustro Menor.</li><li>Representantes del personal administrativo en la proporción que fije el reglamento electoral.</li></ul>"
    },
    {
        id: 16,
        question: "¿Qué es el Consejo Universitario y cómo está compuesto?",
        answer: "El <strong>Consejo Universitario</strong> es el organismo de dirección académica y administrativa ordinaria de la UASD. Está presidido por el Rector/a y se compone de los Vicerrectores, los Decanos de las Facultades, el Secretario General de la universidad, los representantes estudiantiles (33.33%), y un representante de la asociación de empleados (ASODEMU)."
    },
    {
        id: 17,
        question: "¿Quién es la máxima autoridad unipersonal de la UASD?",
        answer: "La máxima autoridad unipersonal de la UASD es el <strong>Rector o Rectora</strong>, quien ejerce la representación legal de la universidad y dirige la ejecución de las políticas acordadas por los organismos colegiados de gobierno."
    },
    {
        id: 18,
        question: "¿Cuáles son los requisitos exigidos para ser Rector/a de la UASD?",
        answer: "Para ser elegido/a Rector/a se requiere: <ul><li>Ser dominicano/a y mayor de edad.</li><li>Estar en pleno goce de los derechos civiles y políticos.</li><li>Ser profesor/a en servicio activo con un mínimo de diez (10) años de docencia en la UASD.</li><li>Poseer un título académico de postgrado (maestría o doctorado).</li><li>Haber desempeñado funciones de dirección académica (como Director de Escuela, Decano, etc.).</li></ul>"
    },
    {
        id: 19,
        question: "¿Cuánto tiempo dura el período de gestión del Rector/a y demás autoridades electas?",
        answer: "Tras las reformas vigentes, el período de gestión del Rector/a y demás autoridades electas de la UASD dura <strong>cuatro (4) años</strong>."
    },
    {
        id: 20,
        question: "¿Se permite la reelección consecutiva para el cargo de Rector/a?",
        answer: "<strong>No</strong>, el Estatuto Orgánico prohíbe explícitamente la reelección consecutiva para el cargo de Rector/a, garantizando así la alternabilidad democrática en el gobierno universitario."
    },
    {
        id: 21,
        question: "¿Cuántas Vicerrectorías tiene la UASD y cuáles son?",
        answer: "La UASD cuenta con <strong>cuatro (4) Vicerrectorías</strong>: <ol><li><strong>Vicerrectoría Docente:</strong> Coordina los planes académicos y currículos.</li><li><strong>Vicerrectoría de Investigación y Postgrado:</strong> Gestiona investigaciones científicas, maestrías y doctorados.</li><li><strong>Vicerrectoría de Extensión:</strong> Encargada de los programas de servicio comunitario y difusión cultural.</li><li><strong>Vicerrectoría Administrativa:</strong> Administra el presupuesto, finanzas e infraestructura física de la universidad.</li></ol>"
    },
    {
        id: 22,
        question: "¿Qué es el fuero universitario?",
        answer: "El <strong>fuero universitario</strong> es el derecho a la inviolabilidad del recinto universitario por parte de agentes o fuerzas de seguridad del Estado. Su propósito es garantizar la libre expresión del pensamiento, la libertad de cátedra y proteger a los estudiantes y académicos en actividades legítimas de debate, impidiendo arrestos o incursiones de armas dentro de la ciudad universitaria sin autorización previa de la Rectoría."
    },
    {
        id: 23,
        question: "¿Qué porcentaje de representación estudiantil se establece en los organismos de cogobierno?",
        answer: "La representación estudiantil (co-gobierno) se establece constitucionalmente en un <strong>33.33%</strong> de la membresía total de todos los organismos de cogobierno colegiados de la UASD (Claustro Mayor, Claustro Menor, Consejo Universitario, Asambleas de Facultad y Consejos Directivos)."
    },
    {
        id: 24,
        question: "¿Qué requisitos académicos debe cumplir un estudiante para ser delegado ante los organismos de cogobierno?",
        answer: "Para ser representante estudiantil se requiere: <ul><li>Haber cursado y aprobado al menos el <strong>30% de los créditos</strong> de su carrera.</li><li>Mantener un índice académico acumulado mínimo de <strong>80 puntos</strong>.</li><li>No tener antecedentes de sanciones disciplinarias.</li><li>Ser un estudiante inscrito y regular.</li></ul>"
    },
    {
        id: 25,
        question: "¿Cuál es el organismo de máxima dirección en cada Facultad?",
        answer: "El organismo colegiado superior de dirección en cada Facultad es la <strong>Asamblea de Facultad</strong>, secundada operativamente en la toma de decisiones cotidianas por el <strong>Consejo Directivo de la Facultad</strong>."
    },
    {
        id: 26,
        question: "¿Quién ejerce la dirección ejecutiva y representación de una Facultad?",
        answer: "La dirección ejecutiva, administrativa y académica en una Facultad la ejerce el <strong>Decano o Decana</strong>, asistido por un Vicedecano/a."
    },
    {
        id: 27,
        question: "¿Qué es una Cátedra y qué es una Escuela en la UASD?",
        answer: "<ul><li><strong>La Cátedra:</strong> Es la unidad académica básica de una asignatura o grupo de asignaturas afines, donde se discuten metodologías y evaluaciones de los contenidos docentes.</li><li><strong>La Escuela:</strong> Es un conjunto de cátedras que agrupan áreas temáticas más amplias para estructurar e impartir una carrera universitaria (ej: Escuela de Informática, Escuela de Medicina). Está dirigida por un Director/a.</li></ul>"
    },
    {
        id: 28,
        question: "¿Cuáles son los derechos principales de los estudiantes de la UASD?",
        answer: "Los principales derechos de los estudiantes según el Estatuto son: <ul><li>Recibir docencia de calidad y actualizada.</li><li>Asociarse libremente en gremios estudiantiles (como la FED y asociaciones de carrera).</li><li>Elegir y ser elegidos para cargos de representación estudiantil en el cogobierno.</li><li>Hacer uso de los servicios de bienestar estudiantil (biblioteca, comedor, dispensario médico, deportes).</li><li>El debido proceso y el respeto a su integridad física y moral.</li></ul>"
    },
    {
        id: 29,
        question: "¿Cuáles son los deberes principales de los estudiantes de la UASD?",
        answer: "Los deberes fundamentales de los estudiantes incluyen: <ul><li>Asistir a clases puntualmente y cumplir responsablemente con los requisitos académicos.</li><li>Respetar la integridad moral y física de todos los miembros de la comunidad universitaria.</li><li>Preservar, cuidar y defender las instalaciones y bienes patrimoniales de la universidad.</li><li>Cumplir con el Estatuto y los reglamentos internos de la institución.</li><li>Ejercer el derecho al voto en los comicios estudiantiles de manera cívica.</li></ul>"
    },
    {
        id: 30,
        question: "¿Qué sanciones disciplinarias pueden aplicarse a un estudiante por violar las normas universitarias?",
        answer: "Las sanciones disciplinarias se gradúan según la gravedad de la falta e incluyen: <ol><li>Amonestación verbal o escrita.</li><li>Pérdida temporal del derecho a examen o inscripción en determinadas materias.</li><li>Suspensión temporal por uno o más semestres.</li><li>Expulsión definitiva e irrevocable de la universidad (en casos graves de alteración del orden, agresión o fraude académico).</li></ol>"
    },
    {
        id: 31,
        question: "¿Qué es la Federación de Estudiantes Dominicanos (FED)?",
        answer: "La <strong>Federación de Estudiantes Dominicanos (FED)</strong> es el organismo estudiantil oficial y de mayor jerarquía que representa a todos los estudiantes inscritos en la UASD. Se encarga de canalizar las demandas estudiantiles, organizar las luchas reivindicativas y coordinar la participación de los delegados en el cogobierno."
    },
    {
        id: 32,
        question: "¿Qué representan el escudo, la bandera y el himno de la UASD?",
        answer: "Son los símbolos patrios institucionales que reflejan su herencia histórica y sus valores: <ul><li><strong>El Escudo:</strong> Incorpora la cruz dominica, el águila bicéfala (del Emperador Carlos V) y las llaves del Pontífice (por el Papa Paulo III), además del lema Primada de América.</li><li><strong>La Bandera:</strong> Está compuesta por un paño azul con el escudo central.</li><li><strong>El Himno:</strong> Canto solemne que exalta el saber humano, la libertad, y la lucha por la educación del pueblo dominicano.</li></ul>"
    },
    {
        id: 33,
        question: "¿Qué es la Comisión Electoral de la UASD y cuál es su rol?",
        answer: "La <strong>Comisión Electoral de la UASD</strong> es un organismo autónomo interno temporal o permanente responsable de organizar, supervisar, contar y proclamar los resultados de los procesos electorales para elegir autoridades rectorales, decanales y la representación estudiantil, asegurando la transparencia y la democracia interna."
    },
    {
        id: 34,
        question: "¿Qué es el índice académico y cómo influye en la permanencia estudiantil?",
        answer: "El <strong>índice académico</strong> es el promedio ponderado de las calificaciones obtenidas por el estudiante. Es vital para la permanencia puesto que si un estudiante cae por debajo del índice mínimo reglamentario (60 puntos) durante semestres consecutivos, entra en estado de <em>baja académica</em> o prueba, lo cual puede limitar sus asignaturas a inscribir o provocar su suspensión."
    },
    {
        id: 35,
        question: "¿Cuál es el rol de la Secretaría General de la UASD?",
        answer: "La <strong>Secretaría General</strong> de la UASD es el órgano técnico administrativo responsable de dar fe pública de los actos universitarios, coordinar las actas del Consejo Universitario y del Claustro, resguardar el archivo de calificaciones e historial académico de todos los estudiantes, y firmar junto con la Rectoría los títulos de los graduados."
    }
];

const SYSTEM_PROMPT = `
Eres un asistente de Inteligencia Artificial especializado en el Estatuto Orgánico de la Universidad Autónoma de Santo Domingo (UASD). Tu nombre es "Chatbot UASD".
Tu única tarea es responder preguntas acerca del Estatuto Orgánico, su historia, funcionamiento institucional, símbolos, valores, estructura de gobierno (cogobierno y autoridades unipersonales), y los derechos/deberes de los estudiantes y docentes.

A continuación tienes un resumen fidedigno de los hechos clave del Estatuto Orgánico de la UASD para fundamentar tus respuestas:
- Fundación: 28 de octubre de 1538 por el Papa Paulo III mediante la Bula Papal "In Apostolatus Culmine". Nombre original: Real y Pontificia Universidad de Santo Tomás de Aquino. Lema: "Academia Octo en el Nuevo Mundo" (Academia del 28 en el Nuevo Mundo).
- Filosofía: Universidad pública, autónoma y descentralizada del Estado dominicano. Primada de América.
- Misión: Formar críticamente profesionales, investigadores y técnicos en ciencias, humanidades y artes; promover investigación y extensión para el desarrollo sostenible nacional.
- Visión: Institución de vanguardia, democrática, líder en educación superior, transparente.
- Valores: Solidaridad, Verdad, Libertad, Tolerancia, Equidad, Transparencia, Paz, Responsabilidad, Convivencia Armónica.
- Gobierno Universitario Colegiado:
  * Claustro Mayor: Máxima autoridad de la universidad. Integrado por personal docente activo, investigadores, Profesores Meritísimos, delegados estudiantiles (33.33% del total) y personal administrativo. Se encarga de elegir Rector/a, Vicerrectores/as y Decanos/as, y de modificar el Estatuto Orgánico.
  * Claustro Menor: Compuesto por Consejo Universitario, 66.66% de docentes de Asambleas de Facultad y el 33.33% de estudiantes. Aprobación presupuestaria y reglamentaria.
  * Consejo Universitario: Organismo de dirección cotidiana. Presidido por el Rector, incluye Vicerrectores, Decanos, Secretario General, delegados estudiantiles (33.33%) y representante administrativo (ASODEMU).
- Gobierno Universitario Unipersonal: Rector/a (máxima autoridad unipersonal), Vicerrectores/as, Secretario/a General, Decanos/as y Vicedecanos/as (Facultades), Directores/as de Escuelas, Coordinadores/as de Cátedras.
- Rectoría: Requisitos para Rector: Dominicano, mayor de edad, plenos derechos, 10 años docencia activa en UASD, maestría/doctorado, haber sido Director de Departamento/Escuela o superior. Periodo de gestión: 4 años, no reelección consecutiva.
- Vicerrectorías (4): Docente, Investigación y Postgrado, Extensión, Administrativa.
- Cogobierno y Estudiantes: Representación estudiantil del 33.33% en organismos colegiados. Requisitos para ser delegado estudiantil: aprobado al menos 30% de créditos de la carrera, índice acumulado de 80 puntos o más, no sanciones disciplinarias.
- Derechos Estudiantiles: Docencia de calidad, asociación libre (FED), elegir y ser elegidos para cogobierno, acceso a bienestar estudiantil (comedor, biblioteca, deportes).
- Deberes Estudiantiles: Asistir a clases, cumplir requisitos académicos, cuidar instalaciones y bienes patrimoniales, cumplir estatutos y votar cívicamente en comicios estudiantiles.
- Sanciones disciplinarias a estudiantes: Amonestación (verbal/escrita), pérdida de derecho a examen, suspensión temporal, expulsión definitiva.
- Federación de Estudiantes Dominicanos (FED): Órgano estudiantil de máxima representación.
- Fuero Universitario: Inviolabilidad del recinto por fuerzas de orden público sin autorización de la Rectoría.
- Símbolos: Escudo (Cruz dominica, águila bicéfala de Carlos V, llaves pontificias, lema), Bandera (azul con escudo central) e Himno.
- Estructura Académica: Facultades (dirigidas por Decano/a y Consejo Directivo/Asamblea), Escuelas (agrupación de cátedras, dirigidas por Director/a) y Cátedras (unidad básica de materias, coordinada por Coordinador/a).
- Secretaría General: Da fe pública de actos, coordina actas del Consejo, custodia calificaciones de alumnos y firma títulos universitarios junto a Rectoría.

INSTRUCCIONES IMPORTANTES DE COMPORTAMIENTO:
1. Responde de manera profesional, amable, clara y utilizando un formato HTML estructurado que sea fácil de leer (usa negritas con <strong>, listas con <ul>/<li> o <ol>/<li>, y saltos de línea con <br> o <p>).
2. Si el usuario te pregunta por temas ajenos al Estatuto Orgánico, la UASD, sus símbolos, su historia, sus autoridades, o su reglamento académico (por ejemplo: recetas de comida, problemas de matemáticas generales, programación, geografía mundial, u otras universidades), debes responder educadamente diciendo que solo puedes hablar sobre el Estatuto Orgánico de la UASD.
   - Ejemplo: "Lo siento, como asistente del Estatuto Orgánico de la UASD, mi conocimiento está limitado a responder dudas relacionadas con las normativas, historia, valores y estructura de nuestra universidad. ¿Hay algo de este tema en lo que te pueda ayudar?"
3. Intenta ser preciso y fundamentar tus respuestas en los hechos del Estatuto descritos en este prompt.
`;

let geminiApiKey = localStorage.getItem('gemini_api_key') || '';
let geminiModel = localStorage.getItem('gemini_model') || 'gemini-2.5-flash';
let chatHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('suggested-questions-list');
    const searchInput = document.getElementById('search-questions');
    const chatMessages = document.getElementById('chat-messages');
    const userInputField = document.getElementById('user-input');
    const btnSend = document.getElementById('btn-send');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const btnCancelSettings = document.getElementById('btn-cancel-settings');
    const settingsForm = document.getElementById('settings-form');
    const apiKeyInput = document.getElementById('api-key-input');
    const modelSelect = document.getElementById('model-select');
    const btnTogglePassword = document.getElementById('toggle-password');
    const btnApiHelp = document.getElementById('btn-api-help');
    const apiHelpPanel = document.getElementById('api-help-panel');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    updateStatusIndicator();
    renderSuggestedQuestions(KNOWLEDGE_BASE);

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = KNOWLEDGE_BASE.filter(q => 
            q.question.toLowerCase().includes(query) || 
            q.answer.toLowerCase().includes(query)
        );
        renderSuggestedQuestions(filtered);
    });

    btnSend.addEventListener('click', handleUserSendMessage);

    userInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleUserSendMessage();
        }
    });

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    settingsBtn.addEventListener('click', () => {
        apiKeyInput.value = geminiApiKey;
        modelSelect.value = geminiModel;
        apiHelpPanel.style.display = 'none';
        settingsModal.classList.add('active');
    });

    modalCloseBtn.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });

    btnCancelSettings.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });

    btnTogglePassword.addEventListener('click', () => {
        const currentType = apiKeyInput.getAttribute('type');
        const newType = currentType === 'password' ? 'text' : 'password';
        apiKeyInput.setAttribute('type', newType);
        
        if (newType === 'text') {
            btnTogglePassword.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            `;
        } else {
            btnTogglePassword.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.01-.17c0-1.66-1.34-3-3-3l-.16.02z"/></svg>
            `;
        }
    });

    btnApiHelp.addEventListener('click', () => {
        const isHidden = apiHelpPanel.style.display === 'none';
        apiHelpPanel.style.display = isHidden ? 'block' : 'none';
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = apiKeyInput.value.trim();
        const modelVal = modelSelect.value;
        geminiApiKey = inputVal;
        geminiModel = modelVal;
        
        if (inputVal) {
            localStorage.setItem('gemini_api_key', inputVal);
        } else {
            localStorage.removeItem('gemini_api_key');
        }
        localStorage.setItem('gemini_model', modelVal);
        
        updateStatusIndicator();
        settingsModal.classList.remove('active');
        
        appendMessage('bot', inputVal 
            ? `<strong>¡Ajustes guardados!</strong> Se ha configurado la API Key de Google Gemini utilizando el modelo <strong>${geminiModel}</strong>. Ahora puedes realizar preguntas abiertas en tiempo real sobre el Estatuto Orgánico.` 
            : "<strong>¡Ajustes actualizados!</strong> Has eliminado la API Key. El chatbot operará en modo simulado/local.", 
            getCurrentTime());
    });

    mobileSidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    function renderSuggestedQuestions(questions) {
        questionsContainer.innerHTML = '';
        if (questions.length === 0) {
            questionsContainer.innerHTML = `
                <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1rem;">
                    No se encontraron preguntas similares
                </div>
            `;
            return;
        }

        questions.forEach(q => {
            const btn = document.createElement('button');
            btn.className = 'question-item';
            btn.textContent = q.question;
            btn.addEventListener('click', () => {
                sendMessage(q.question);
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
            questionsContainer.appendChild(btn);
        });
    }

    function updateStatusIndicator() {
        if (geminiApiKey) {
            statusDot.parentElement.className = "status-badge online";
            statusText.textContent = "Gemini API Activa";
        } else {
            statusDot.parentElement.className = "status-badge offline";
            statusText.textContent = "Modo Local / Simulado";
        }
    }

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zM7.05 18.01c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06z"/></svg>
            `;
        } else {
            themeToggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            `;
        }
    }

    function handleUserSendMessage() {
        const text = userInputField.value.trim();
        if (!text) return;
        sendMessage(text);
        userInputField.value = '';
    }

    function sendMessage(text) {
        appendMessage('user', text, getCurrentTime());
        showTypingIndicator();
        chatHistory.push({ role: 'user', text: text });

        setTimeout(async () => {
            let responseText = '';
            
            if (geminiApiKey) {
                try {
                    responseText = await askGemini(text);
                } catch (error) {
                    console.error(error);
                    responseText = `<strong>Error de conexión con la IA:</strong> ${error.message}.<br><br>Verifica que tu API Key sea correcta y tengas conexión a internet. También puedes borrar la clave para volver al <strong>Modo Local</strong>.`;
                }
            } else {
                responseText = getLocalAnswer(text);
            }

            hideTypingIndicator();
            appendMessage('bot', responseText, getCurrentTime());
            chatHistory.push({ role: 'model', text: responseText });
            
        }, 800 + Math.random() * 600);
    }

    function getLocalAnswer(userInput) {
        const inputClean = cleanText(userInput);
        let bestMatch = null;
        let highestScore = 0;
        
        for (const q of KNOWLEDGE_BASE) {
            const questionClean = cleanText(q.question);
            const score = getMatchingScore(inputClean, questionClean);
            
            if (score > highestScore) {
                highestScore = score;
                bestMatch = q;
            }
        }
        
        if (bestMatch && highestScore > 0.4) {
            return bestMatch.answer;
        }

        if (isOutOfContext(inputClean)) {
            return "Lo siento, como asistente del Estatuto Orgánico de la UASD, mi conocimiento está limitado a responder dudas relacionadas con las normativas, historia, símbolos, cogobierno y la estructura académica de nuestra universidad. ¿Hay algo de este tema en lo que te pueda ayudar?";
        }

        return `
            <strong>Modo Local / Simulado Activo:</strong> No he encontrado una pregunta en la base de datos que coincida exactamente con "<em>${userInput}</em>".<br><br>
            Puedes hacer clic en cualquiera de las <strong>35 preguntas sugeridas</strong> del panel lateral para obtener respuestas instantáneas en este modo.<br><br>
            <em>Para realizar preguntas abiertas avanzadas con Inteligencia Artificial, por favor ingresa tu API Key en el menú de Ajustes (icono de engranaje en la esquina superior derecha).</em>
        `;
    }

    function getMatchingScore(str1, str2) {
        const words1 = str1.split(/\s+/).filter(w => w.length > 3);
        const words2 = str2.split(/\s+/).filter(w => w.length > 3);
        if (words1.length === 0) return 0;
        
        let matches = 0;
        words1.forEach(w => {
            if (words2.includes(w)) matches++;
        });
        
        return matches / Math.max(words1.length, 3);
    }

    function cleanText(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!.,;:()""']/g, " ")
            .trim();
    }

    // Identifica si es una pregunta común fuera de contexto
    function isOutOfContext(cleanInput) {
        const outKeywords = [
            'pizza', 'receta', 'cocinar', 'pastel', 'chocolate', 'programacion', 'javascript', 
            'codigo', 'css', 'html', 'python', 'java', 'matematicas', 'algebra', 'calculo',
            'clima', 'tiempo', 'dolar', 'francia', 'paris', 'capital', 'historia de mexico',
            'musica', 'cancion', 'chiste', 'juego', 'futbol', 'deporte', 'pelicula'
        ];
        return outKeywords.some(kw => cleanInput.includes(kw));
    }

    async function askGemini(promptText) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${geminiApiKey}`;
        
        const payload = {
            contents: [
                {
                    parts: [
                        {
                            text: promptText
                        }
                    ]
                }
            ],
            systemInstruction: {
                parts: [
                    {
                        text: SYSTEM_PROMPT
                    }
                ]
            },
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 800
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        let answerText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!answerText) {
            throw new Error("No se recibió respuesta del modelo.");
        }

        return parseMarkdownToHtml(answerText);
    }

    function parseMarkdownToHtml(mdText) {
        let html = mdText;
        
        html = html.replace(/\n\n/g, '</p><p>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        html = html.replace(/^\s*[-*]\s+(.*?)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>');
        html = html.replace(/<\/ul>\s*<ul>/g, '');

        html = html.replace(/^\s*\d+\.\s+(.*?)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.*?<\/li>)/g, '<ol>$1</ol>');
        
        if (!html.startsWith('<p>') && !html.startsWith('<ul>') && !html.startsWith('<ol>')) {
            html = '<p>' + html + '</p>';
        }
        
        html = html.replace(/<p><\/p>/g, '');
        
        return html;
    }

    function appendMessage(sender, text, time) {
        const wrapper = document.createElement('div');
        wrapper.className = `message-wrapper ${sender}`;

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = `
            ${text}
            <span class="message-info">${time}</span>
        `;

        wrapper.appendChild(bubble);
        chatMessages.appendChild(wrapper);
        scrollToBottom();
    }

    function showTypingIndicator() {
        if (document.getElementById('typing-indicator')) return;

        const indicator = document.createElement('div');
        indicator.id = 'typing-indicator';
        indicator.className = 'typing-indicator-wrapper';
        indicator.innerHTML = `
            <div class="typing-bubble">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatMessages.appendChild(indicator);
        scrollToBottom();
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    }
});
