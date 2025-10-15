# Changelog

Todos los cambios notables en **Modelo_Pront** se documentarán en este archivo.

El formato sigue las convenciones de [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).
Este proyecto utiliza [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-10-15

### ✨ Nuevas funcionalidades principales

- **Sistema de gestión de prompts guardados**: Permite guardar, editar, eliminar y organizar prompts personalizados
  - Almacenamiento local con IndexedDB para persistencia de datos
  - Búsqueda y filtrado por categorías
  - Exportación e importación de prompts en formato JSON
  - Información de almacenamiento y gestión del espacio
  - Visualización detallada de cada prompt guardado
  - Modo de edición para modificar prompts existentes

- **Buscador de IAs integrado**: Base de datos completa de 200+ modelos de IA
  - Búsqueda por nombre y descripción
  - Filtrado por categorías (Conversacional, Código, Imágenes, Audio, etc.)
  - Enlaces directos a cada plataforma de IA
  - Interfaz responsive con resultados paginados

### 🔧 Mejoras técnicas

- Implementación de base de datos local con IndexedDB
- Sistema de notificaciones para acciones del usuario
- Mejoras en la navegación entre pestañas
- Optimización del rendimiento general

## [1.0.1] - 2025-10-13

### ✨ Lanzamiento estable

- Mejoras en la descripción de los campos del formulario del generador de prompts.

[1.0.1]: https://github.com/mac100185/Modelo_Pront/releases/tag/v1.0.1

## [1.0.0] - 2025-10-09

### ✨ Lanzamiento inicial estable

- Aplicación web interactiva para la creación de prompts estructurados para LLMs.
- Implementación del **algoritmo de 4 fases** para comunicación efectiva con inteligencia artificial:
  1. Preparación
  2. Delegación de tareas
  3. Creación del prompt
  4. Revisión e iteración
- Formulario detallado con campos para:
  - Rol del LLM y del usuario
  - Contexto, audiencia y tareas
  - Instrucciones de formato, tono, límites y ejemplos
- Generación automática de prompts en **XML, YAML, JSON y Markdown**.
- Funcionalidades de **copiar, exportar e imprimir** resultados.
- Interfaz en español, responsive y con diseño visual mejorado (colores, efectos, logo).
- Integración de **Highlight.js** para resaltado de sintaxis.
- Documentación completa en `README.md`.
- Licencia **GNU GPL v3** incluida.
- **Nueva funcionalidad (Oct 8)**: Se agrega buscador de IAs para facilitar la selección del modelo objetivo.

[1.2.0]: https://github.com/mac100185/Modelo_Pront/releases/tag/v1.2.0
[1.0.0]: https://github.com/mac100185/Modelo_Pront/releases/tag/v1.0.0
