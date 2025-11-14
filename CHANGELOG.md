# Changelog

Todos los cambios notables en **Modelo_Prompt** se documentarán en este archivo.

El formato sigue las convenciones de [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).
Este proyecto utiliza [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2025-01-15

### ✨ Nuevas funcionalidades principales

#### Sistema de gestión de prompts guardados

- **Almacenamiento persistente con IndexedDB**
  - Los prompts se guardan localmente en el navegador
  - Persistencia de datos entre sesiones
  - No requiere servidor ni conexión a internet
  - Monitor de uso de almacenamiento

- **Gestión completa de prompts**
  - Crear y guardar prompts desde el generador
  - Editar prompts existentes con modal dedicado
  - Eliminar prompts individuales
  - Visualizar detalles completos de cada prompt
  - Organización por categorías (Trabajo, Personal, Educativo, Negocios, Creativo, Técnico, Marketing)

- **Búsqueda y filtrado avanzado**
  - Búsqueda por nombre y descripción en tiempo real
  - Filtrado por categorías
  - Vista de todas las categorías o categoría específica
  - Contador de prompts por categoría

- **Exportación e importación**
  - Exportar todos los prompts en formato JSON
  - Importar prompts desde archivos JSON externos
  - Portabilidad entre dispositivos y navegadores
  - Sistema de backup y migración

- **Funcionalidad "Cargar en Formulario"**
  - Carga prompts guardados directamente en el generador
  - Permite editar y regenerar prompts existentes
  - Reutilización de plantillas efectivas

#### Buscador de IAs integrado

- **Base de datos completa de modelos de IA**
  - Más de 200 modelos de IA actualizados
  - Información detallada de cada modelo
  - Enlaces directos a cada plataforma
  - Descripción de funcionalidades

- **Categorías de IAs**
  - Conversacional (ChatGPT, Claude, Gemini, Llama, etc.)
  - Código (GitHub Copilot, Cursor, Replit, CodeLlama, etc.)
  - Imágenes (DALL-E, Midjourney, Stable Diffusion, Leonardo, etc.)
  - Audio (ElevenLabs, Murf, Play.ht, etc.)
  - Video (Runway, Synthesia, Pictory, etc.)
  - Multimodal (GPT-4 Vision, Gemini Pro, Claude 3, etc.)
  - Investigación (Perplexity, You.com, Consensus, etc.)
  - Asistentes (Jasper, Copy.ai, Writesonic, etc.)
  - Productividad (Notion AI, Grammarly, etc.)
  - Y más categorías especializadas

- **Búsqueda inteligente**
  - Filtrado por nombre y descripción
  - Búsqueda en tiempo real
  - Filtros por categoría
  - Resultados organizados y paginados

### 🎨 Mejoras de interfaz

- **Sistema de navegación mejorado**
  - 5 pestañas principales: Información, Generador, Resultados, Mis Prompts, Buscar IA
  - Navegación fluida entre secciones
  - Estado activo visual en pestañas

- **Tema claro/oscuro**
  - Botón de alternancia de tema en el header
  - Persistencia de preferencia (si se implementa)
  - Diseño adaptado para ambos modos

- **Modales interactivos**
  - Modal para guardar nuevos prompts
  - Modal para editar prompts existentes
  - Modal para confirmar eliminación
  - Modal para confirmar limpieza masiva
  - Modal para ver detalles de prompts
  - Diseño consistente y accesible

- **Notificaciones de usuario**
  - Feedback visual para acciones completadas
  - Mensajes de éxito y error
  - Alertas informativas

### 🔧 Mejoras técnicas

- **Arquitectura modular**
  - `db-manager.js`: Manejo de IndexedDB
  - `saved-prompts.js`: Lógica de gestión de prompts
  - `ia-search.js`: Funcionalidad del buscador
  - `ia-data.js`: Base de datos de modelos de IA
  - Separación clara de responsabilidades

- **Optimización de rendimiento**
  - Carga eficiente de datos
  - Búsqueda y filtrado optimizados
  - Manejo asíncrono de operaciones de base de datos

- **Gestión de errores mejorada**
  - Try-catch en operaciones críticas
  - Mensajes de error informativos
  - Recuperación elegante de fallos

### 📄 Documentación

- README.md completamente actualizado con:
  - Descripción detallada de todas las características
  - Guías de uso paso a paso
  - Sección de migración y backup
  - Preguntas frecuentes
  - Información de estructura de archivos
  - Ejemplos prácticos

- Páginas legales añadidas:
  - `politica-privacidad.html`: Política de privacidad completa
  - `terminos-uso.html`: Términos de uso
  - `contacto.html`: Página de contacto

- Documentación del algoritmo:
  - `AlgoritmoModeloPrompt.pdf`: Explicación detallada del algoritmo de 4 fases

### 🔒 Privacidad y seguridad

- Sin recopilación de datos personales
- Sin cookies de rastreo
- Sin envío de información a servidores externos
- Almacenamiento 100% local
- Transparencia total del código

---

## [1.0.1] - 2025-01-13

### 🔧 Mejoras y correcciones

- Mejoras en la descripción de los campos del formulario del generador de prompts
- Texto de ayuda más claro y detallado para cada campo
- Correcciones menores de formato y estilo
- Optimización de tooltips y placeholders

### 📝 Documentación

- Actualización de README con descripciones más claras
- Corrección de typos y formato

---

## [1.0.0] - 2025-01-09

### ✨ Lanzamiento inicial estable

#### Funcionalidades principales

- **Aplicación web interactiva** para la creación de prompts estructurados para LLMs
- **Implementación del algoritmo de 4 fases** para comunicación efectiva con inteligencia artificial:
  1. **Preparación**: Definir objetivo, contexto, audiencia y expectativas
  2. **Delegación de tareas**: Dividir, priorizar y validar tareas
  3. **Creación del prompt**: Estructurar prompt completo con todos los elementos
  4. **Revisión e iteración**: Evaluar, mejorar y documentar

#### Formulario estructurado

- **Campos del formulario**:
  - Rol del LLM (Asistente, Experto, Redactor, etc.)
  - Rol del usuario
  - Contexto de la situación
  - Impacto buscado
  - Audiencia objetivo
  - Tareas específicas (múltiples líneas)
  - Instrucciones detalladas (formato, idioma, canal, riesgo)
  - Empatía y tono (opcional)
  - Clarificación y refinamiento
  - Límites y consecuencias
  - Ejemplos de salida esperada (opcional)

- **Botones de limpieza** individual por campo
- **Validación básica** de campos obligatorios

#### Generación de prompts

- **Múltiples formatos de exportación**:
  - XML: Estructura jerárquica clara
  - YAML: Formato legible y conciso
  - JSON: Intercambio de datos
  - Markdown: Documentación y legibilidad

- **Resaltado de sintaxis** con Highlight.js
- **Tema Monokai Sublime** para mejor visualización de código

#### Funcionalidades de exportación

- **Copiar al portapapeles**: Un clic para copiar cualquier formato
- **Exportar como archivo**: Descarga directa en formato correspondiente
- **Imprimir**: Impresión o exportación a PDF desde el navegador

#### Interfaz de usuario

- **Diseño responsive**: Funciona en desktop, tablet y móvil
- **Navegación por pestañas**:
  - Información: Explicación del algoritmo de 4 fases
  - Generador: Formulario de creación
  - Resultados: Visualización y exportación
  - Buscar IA: Directorio de modelos (añadido Oct 8)

- **Identidad visual**:
  - Logo CyberOliver
  - Esquema de colores profesional
  - Efectos visuales y transiciones
  - Iconos descriptivos

#### Contenido educativo

- **Pestaña de Información** con:
  - Explicación completa del algoritmo
  - Diagrama visual del proceso
  - Ejemplos prácticos para cada fase
  - Mejores prácticas de comunicación con LLMs

#### Recursos técnicos

- **Librería Highlight.js** integrada para resaltado de sintaxis
- **Favicon e iconos** para múltiples plataformas
- **Estructura de archivos** organizada y modular

#### Documentación

- **README.md completo** con:
  - Descripción del proyecto
  - Guía de uso
  - Estructura de archivos
  - Información de licencia

- **CHANGELOG.md** para seguimiento de versiones

#### Licencia

- **GNU GPL v3**: Software libre y de código abierto
- Archivo LICENSE incluido
- Derechos de autor especificados

---

## Notas sobre versionado

### Formato de versiones

Este proyecto sigue el [Versionado Semántico 2.0.0](https://semver.org/spec/v2.0.0.html):

- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0): Nueva funcionalidad compatible con versiones anteriores
- **PATCH** (0.0.X): Correcciones de bugs compatibles con versiones anteriores

### Categorías de cambios

- **✨ Nuevas funcionalidades**: Características completamente nuevas
- **🔧 Mejoras y correcciones**: Mejoras a funcionalidades existentes
- **🐛 Corrección de bugs**: Solución de problemas y errores
- **🎨 Mejoras de interfaz**: Cambios visuales y de UX
- **📝 Documentación**: Actualizaciones de documentación
- **🔒 Seguridad**: Parches y mejoras de seguridad
- **⚡ Rendimiento**: Optimizaciones de velocidad
- **♻️ Refactorización**: Cambios en código sin afectar funcionalidad
- **🗑️ Deprecado**: Funcionalidades que serán eliminadas
- **❌ Eliminado**: Funcionalidades eliminadas

---

## Próximas versiones (Roadmap)

### [1.3.0] - Planeado

- Modo de edición directa en vista de resultados
- Historial de versiones de prompts
- Plantillas predefinidas por tipo de tarea
- Compartir prompts mediante URLs o códigos QR
- Estadísticas de uso de prompts guardados

### [1.4.0] - En consideración

- Integración con APIs de LLMs para testing directo
- Sistema de etiquetas adicionales (tags)
- Comparación lado a lado de prompts
- Exportación a más formatos (TOML, INI)
- Modo colaborativo (compartir con otros usuarios)

---

[1.2.0]: https://github.com/mac100185/Modelo_Prompt/releases/tag/v1.2.0
[1.0.1]: https://github.com/mac100185/Modelo_Prompt/releases/tag/v1.0.1
[1.0.0]: https://github.com/mac100185/Modelo_Prompt/releases/tag/v1.0.0

---

**© 2025 Alan Mac-Arthur García Díaz** | GNU GENERAL PUBLIC LICENSE Version 3