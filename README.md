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
- 💾 **Sistema de prompts guardados**: Gestión completa de prompts personalizados:
  - Guardar prompts con nombre, descripción y categoría
  - Búsqueda y filtrado por categorías
  - Edición y eliminación de prompts existentes
  - Exportación e importación masiva en formato JSON
  - Almacenamiento local persistente con IndexedDB
  - Información detallada de uso de almacenamiento
- 🔍 **Buscador de IAs integrado**: Base de datos de 200+ modelos de IA:
  - Búsqueda por nombre y descripción
  - Filtrado por categorías (Conversacional, Código, Imágenes, Audio, etc.)
  - Enlaces directos a cada plataforma
  - Resultados organizados y actualizados
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

- **HTML5** y **CSS3** para la estructura y estilos responsive.
- **JavaScript ES6+** para la lógica de interacción, generación de prompts y manejo de eventos.
- **IndexedDB** para almacenamiento local persistente de prompts guardados.
- **Highlight.js** con tema *Monokai Sublime* para resaltar sintaxis en los resultados.
- **APIs del navegador** para exportación, importación e impresión de documentos.
- **Base de datos de IAs** integrada con información actualizada de 200+ modelos.

---

## Cómo usar la aplicación

1. Abre la aplicación en tu navegador.
2. Navega por las pestañas:
   - **Información**: Aprende sobre el algoritmo de 4 fases.
   - **Generador**: Completa el formulario con los componentes de tu prompt.
   - **Resultados**: Visualiza y exporta tu prompt en los formatos disponibles.
   - **Mis Prompts**: Gestiona tus prompts guardados (guardar, editar, eliminar, exportar).
   - **Buscar IA**: Encuentra la IA más adecuada para tu caso de uso.
3. En el **Generador**, completa los campos y haz clic en **"Generar Prompt"**.
4. En **Resultados**, usa los botones de **Copiar**, **Exportar** o **Imprimir**.
5. **Guarda prompts útiles** desde la pestaña de Resultados para reutilizarlos después.
6. **Busca IAs específicas** según tu necesidad (texto, código, imágenes, etc.).

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
  index.html              # Estructura principal de la aplicación
  styles.css              # Estilos principales
  ia-search.css          # Estilos para el buscador de IAs
  script.js              # Lógica principal y generación de prompts
  ia-search.js           # Funcionalidad del buscador de IAs
  ia-data.js             # Base de datos de 200+ modelos de IA
  saved-prompts.js       # Gestor de prompts guardados
  db-manager.js          # Manejo de IndexedDB
  highlight/
    highlight.min.js
    styles/
      monokai-sublime.min.css
  recursos/
    imagenes/
      LogoCyberOliver.jpeg
      algoritmo_comunicacion_llm.png
      favicon.ico
      favicon.svg
      apple-touch-icon.png

---
## Licencia

© 2025 Alan Mac-Arthur García Díaz. GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007.

*Esta herramienta está diseñada para fines educativos y profesionales. No se permite su redistribución comercial sin autorización.*

---

## Migración y Backup de Prompts Guardados

### 🚨 **Importante: ¿Dónde se guardan mis prompts?**

Los prompts se almacenan localmente en tu navegador usando **IndexedDB**, **NO en la carpeta del proyecto**. Esto significa:

- ✅ **Ventaja**: Los prompts persisten entre sesiones del navegador
- ❌ **Limitación**: No se transfieren automáticamente al cambiar de computadora

### 📤 **Cómo hacer backup de tus prompts**

**Para respaldar tus prompts importantes:**

1. Ve a la pestaña **"Mis Prompts"**
2. Haz clic en el botón **"Exportar Todos"** (en los botones de gestión)
3. Se descargará un archivo JSON con todos tus prompts guardados
4. **Guarda este archivo en un lugar seguro** (Dropbox, Google Drive, etc.)

### 💻 **Cómo migrar prompts a otra computadora**

**Si cambias de laptop o computadora:**

1. **En la computadora anterior:**
   - Exporta todos tus prompts (paso anterior)
   - Guarda el archivo JSON descargado

2. **En la nueva computadora:**
   - Copia toda la carpeta del proyecto `Modelo_Pront`
   - Abre la aplicación en tu navegador
   - Ve a la pestaña **"Mis Prompts"**
   - Haz clic en **"Importar"** (botón de gestión)
   - Selecciona el archivo JSON que guardaste
   - ¡Todos tus prompts aparecerán automáticamente!

### 💡 **Recomendaciones**

- **Haz backups regulares** después de crear prompts importantes
- **El archivo JSON es portátil** - funciona en cualquier instalación de Modelo_Pront
- **Mantén copias** en la nube para mayor seguridad

---

---

## Novedades de la versión 1.2.0

### 🆕 Sistema de Prompts Guardados
- **Almacenamiento local**: Tus prompts se guardan en tu navegador de forma persistente
- **Gestión completa**: Crear, editar, eliminar y organizar prompts por categorías
- **Búsqueda avanzada**: Encuentra prompts por nombre, descripción o contenido
- **Exportación masiva**: Exporta todos tus prompts en un archivo JSON
- **Importación**: Importa prompts desde archivos externos o de otras instalaciones

### 🔍 Buscador de IAs Integrado
- **Base de datos completa**: Más de 200 modelos de IA actualizados
- **Búsqueda inteligente**: Por nombre, descripción y funcionalidades
- **Filtros por categoría**: Conversacional, Código, Imágenes, Audio, Video, etc.
- **Enlaces directos**: Acceso rápido a cada plataforma de IA
- **Información detallada**: Descripción y características de cada modelo

---

> 💡 **Consejo**: Guarda tus prompts más efectivos en "Mis Prompts" para crear tu propia biblioteca de plantillas. ¡La reutilización de prompts optimizados mejora significativamente la calidad de tus interacciones con la IA!
