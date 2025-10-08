# Generador de Prompts para Comunicación Efectiva con LLMs

![Logo CyberOliver](recursos/imagenes/LogoCyberOliver.jpeg)

## Descripción

Esta aplicación web interactiva implementa un **algoritmo estructurado para la comunicación efectiva y asertiva entre humanos y Modelos de Lenguaje Grande (LLMs)**. Su objetivo es guiar a los usuarios en la creación de prompts de alta calidad mediante un enfoque metodológico dividido en cuatro fases clave, y permite generar automáticamente esos prompts en múltiples formatos estándar (XML, YAML, JSON y Markdown).

Ideal para profesionales, investigadores, creadores de contenido o cualquier persona que interactúe regularmente con inteligencia artificial, esta herramienta mejora la precisión, claridad y relevancia de las respuestas generadas por los LLMs.

---

## Características principales

- ✅ **Guía educativa integrada**: Explica paso a paso el algoritmo de comunicación efectiva con LLMs.
- 🧠 **Formulario estructurado**: Permite ingresar todos los componentes esenciales de un prompt avanzado:
  - Rol del LLM
  - Contexto (rol del usuario, situación, impacto buscado)
  - Audiencia objetivo
  - Tareas específicas (una por línea)
  - Instrucciones detalladas (formato, idioma, canal, riesgo aceptable)
  - Empatía y tono (opcional)
  - Clarificación y refinamiento
  - Límites y consecuencias
  - Ejemplos de salida (opcional)
- 🔄 **Generación automática**: Convierte los datos del formulario en prompts listos para usar.
- 📤 **Exportación en múltiples formatos**:
  - XML
  - YAML
  - JSON
  - Markdown
- 📋 **Funcionalidades prácticas**:
  - Copiar al portapapeles
  - Exportar como archivo
  - Imprimir resultados
- 🧹 **Botones de limpieza**: Por campo, para facilitar la edición.
- 🌐 **Interfaz en español** con diseño responsive.

---

## Estructura del algoritmo

La aplicación se basa en un algoritmo de 4 fases:

1. **Preparación**: Define objetivo, contexto, audiencia, expectativas y criterios de éxito.
2. **Delegación de tareas**: Divide, prioriza y valida la viabilidad de las tareas para el LLM.
3. **Creación del prompt**: Estructura un prompt completo con todos los elementos necesarios.
4. **Revisión e iteración**: Evalúa, mejora y documenta el proceso para futuras interacciones.

---

## Tecnologías utilizadas

- **HTML5** y **CSS3** para la estructura y estilos.
- **JavaScript** para la lógica de interacción, generación de prompts y manejo de eventos.
- **Highlight.js** con tema *Monokai Sublime* para resaltar sintaxis en los resultados.
- Soporte para exportación e impresión mediante APIs del navegador.

---

## Cómo usar la aplicación

1. Abre la aplicación en tu navegador.
2. Navega por las pestañas:
   - **Información**: Aprende sobre el algoritmo.
   - **Generador**: Completa el formulario con los componentes de tu prompt.
   - **Resultados**: Visualiza y exporta tu prompt en los formatos disponibles.
3. Haz clic en **"Generar Prompt"** para procesar tus entradas.
4. Usa los botones de **Copiar**, **Exportar** o **Imprimir** según tus necesidades.

---

## Ejemplo de uso

> **Objetivo**: Redactar un correo profesional para un cliente potencial en ciberseguridad.
> **Audiencia**: Gerente general con conocimientos básicos en ciberseguridad.
> **Tareas**:
> - Redactar un párrafo introductorio que capte la atención.
> - Explicar beneficios de los servicios de consultoría.
> - Incluir una llamada a la acción clara.
> **Formato**: Texto en español neutro, 200–250 palabras, tono profesional-empático.

La herramienta generará un prompt estructurado que puedes copiar directamente y pegar en tu LLM favorito (ChatGPT, Claude, Gemini, etc.).

---

## Archivos del proyecto

/
  index.html
  styles.css
  script.js
  highlight/
    highlight.min.js
    styles/
      monokai-sublime.min.css
  recursos/
    imagenes/
      LogoCyberOliver.jpeg
      algoritmo_comunicacion_llm.png

---
## Licencia

© 2025 Alan Mac-Arthur García Díaz. GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007.

*Esta herramienta está diseñada para fines educativos y profesionales. No se permite su redistribución comercial sin autorización.*

---

> 💡 **Consejo**: Guarda tus prompts generados como plantillas para casos similares futuros. ¡La consistencia mejora la calidad de la interacción con la IA!
