# Documentación Técnica: Chatbot del Estatuto Orgánico de la UASD (Práctica 8)

Este documento detalla los aspectos técnicos de la implementación del Chatbot inteligente desarrollado para interactuar y responder preguntas acerca del Estatuto Orgánico de la Universidad Autónoma de Santo Domingo (UASD).

---

## 1. Tecnologías Utilizadas

La solución ha sido construida bajo un enfoque ligero y de alto rendimiento utilizando estándares web puros y modernos:

*   **HTML5**: Define la estructura semántica de la aplicación, el panel lateral colapsable, el área de mensajes y el modal de ajustes.
*   **CSS3**: Estiliza la interfaz utilizando un sistema de variables personalizadas para temas (claro/oscuro), diseño fluido con Flexbox y CSS Grid, tipografía adaptativa mediante `clamp()` y micro-animaciones (pulsación de escritura, desvanecimiento y efectos 3D en el logo).
*   **Vanilla JavaScript (ES6+)**: Controla la manipulación del DOM, la gestión de eventos, la búsqueda dinámica de preguntas, el almacenamiento en `localStorage`, la lógica del modo simulado y las llamadas HTTP asíncronas.
*   **Google Gemini API (`gemini-2.5-flash`)**: Motor de procesamiento de lenguaje natural que procesa consultas abiertas.
*   **Git / GitHub**: Sistema de control de versiones y hosting de repositorio remoto.

---

## 2. Arquitectura del Sistema

La aplicación sigue una **arquitectura Serverless del lado del cliente (Frontend-Only Single Page Application)**. 


*   **Persistencia Local**: La API Key y la elección del modelo de IA se almacenan localmente en el navegador usando `localStorage` de manera privada y segura.

---

## 3. Integración de la Inteligencia Artificial

La inteligencia artificial se integra mediante peticiones HTTP asíncronas (`fetch`) al endpoint oficial de la API de lenguajes generativos de Google:

*   **Endpoint utilizado**:
    `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${geminiApiKey}`
*   **Estructura del Payload**: Se envía una solicitud JSON que contiene la consulta del usuario junto con un bloque de instrucciones de sistema (`systemInstruction`).
*   **System Instruction**: En este bloque se inyecta el rol del bot (*"Asistente especializado de la UASD"*), las reglas de comportamiento (amabilidad, estructura de respuestas en HTML), las limitaciones de contexto, y el resumen consolidado del Estatuto Orgánico.
*   **Procesamiento de Respuesta**: Las respuestas devueltas por Gemini en formato Markdown se parsean dinámicamente mediante expresiones regulares (`Regex`) en JavaScript para convertirlas a HTML estructurado (negritas, cursivas, listas ordenadas y desordenadas) antes de renderizarlas en el chat.

---

## 4. Funcionamiento del Chatbot

El chatbot opera en dos modalidades de forma transparente para el usuario:

### A. Modo Local / Simulado (Offline)
Si no se ha ingresado una API Key:
1.  El usuario envía una pregunta.
2.  Un algoritmo de coincidencia léxica en JavaScript limpia el texto (remueve tildes, signos de interrogación y palabras vacías) y calcula un puntaje de similitud (`Matching Score`) con las 35 preguntas sugeridas en la base de datos local.
3.  Si la puntuación supera un umbral del 40%, responde de inmediato con la respuesta oficial correspondiente.
4.  Si no coincide y la pregunta es evidentemente ajena, rechaza la consulta. De lo contrario, invita al usuario a configurar su API Key para preguntas abiertas.

### B. Modo Online (IA Activa)
Si el usuario ingresa una API Key y selecciona un modelo (por ejemplo, `gemini-2.5-flash`):
1.  El indicador de estado inferior cambia a verde.
2.  Cada pregunta del chat realiza una llamada asíncrona a la API.
3.  Se ejecuta el modelo en los servidores de Google bajo las directrices del System Prompt.
4.  Se muestra una animación de carga ("escribiendo...") mientras se espera la respuesta, garantizando una excelente experiencia de usuario (UX).

---

## 5. Uso del Estatuto Orgánico como Fuente de Información

El Estatuto Orgánico de la UASD actúa como la única **base de conocimientos del sistema**, protegiendo la veracidad de la información mediante dos capas de control:

1.  **En el Prompt de Sistema**: El contexto inyectado a Gemini contiene un compendio oficial y resumido de la historia, fines, símbolos, cogobierno, deberes/derechos estudiantiles y estructura de facultades de la universidad.
2.  **Control de Alucinación y Restricción de Contexto**: Se instruye estrictamente al modelo a responder de manera educada que no posee la información requerida si el usuario realiza consultas que caen fuera de los límites de este contexto, evitando que la IA actúe como un asistente de propósito general.
