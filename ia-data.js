// ia-data.js – Lista real y limpia de las 200 IA más usadas (octubre 2025)

const allAIs = [
  {
    name: "ChatGPT",
    description: "Asistente conversacional de OpenAI basado en GPT-4o.",
    category: "Conversacional",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude",
    description:
      "Asistente de Anthropic con razonamiento avanzado y ética alineada.",
    category: "Conversacional",
    url: "https://claude.ai",
  },
  {
    name: "Gemini",
    description: "Modelo multimodal de Google con integración en Workspace.",
    category: "Conversacional",
    url: "https://gemini.google.com",
  },
  {
    name: "Copilot",
    description:
      "Asistente de Microsoft integrado en Windows, Office y GitHub.",
    category: "Conversacional",
    url: "https://copilot.microsoft.com",
  },
  {
    name: "Perplexity AI",
    description:
      "Motor de búsqueda con respuestas basadas en fuentes verificadas.",
    category: "Búsqueda",
    url: "https://perplexity.ai",
  },
  {
    name: "You.com",
    description:
      "Buscador inteligente con múltiples modelos de IA y personalización.",
    category: "Búsqueda",
    url: "https://you.com",
  },
  {
    name: "Phind",
    description:
      "Asistente especializado en programación y resolución técnica.",
    category: "Desarrollo",
    url: "https://phind.com",
  },
  {
    name: "Poe",
    description:
      "Plataforma que ofrece acceso a múltiples modelos de IA en un solo lugar.",
    category: "Conversacional",
    url: "https://poe.com",
  },
  {
    name: "Midjourney",
    description: "Generador de imágenes artísticas por texto mediante Discord.",
    category: "Generación de Imágenes",
    url: "https://midjourney.com",
  },
  {
    name: "DALL·E 3",
    description: "Generador de imágenes realistas de OpenAI desde texto.",
    category: "Generación de Imágenes",
    url: "https://openai.com/dall-e",
  },
  {
    name: "Stable Diffusion",
    description: "Modelo de código abierto para generación de imágenes.",
    category: "Generación de Imágenes",
    url: "https://stability.ai",
  },
  {
    name: "Ideogram",
    description:
      "Especializado en generar imágenes con texto legible integrado.",
    category: "Generación de Imágenes",
    url: "https://ideogram.ai",
  },
  {
    name: "Leonardo.Ai",
    description:
      "Plataforma para artistas con herramientas de generación y refinamiento.",
    category: "Generación de Imágenes",
    url: "https://leonardo.ai",
  },
  {
    name: "Adobe Firefly",
    description:
      "Herramientas de generación de imágenes integradas en Creative Cloud.",
    category: "Generación de Imágenes",
    url: "https://firefly.adobe.com",
  },
  {
    name: "Runway ML",
    description: "Herramientas de IA para edición de video y efectos visuales.",
    category: "Video",
    url: "https://runwayml.com",
  },
  {
    name: "Synthesia",
    description: "Crea videos con avatares digitales en 120+ idiomas.",
    category: "Video",
    url: "https://synthesia.io",
  },
  {
    name: "HeyGen",
    description:
      "Plataforma para generar videos con avatares de IA desde texto.",
    category: "Video",
    url: "https://heygen.com",
  },
  {
    name: "Pika",
    description: "Generador de video corto a partir de texto o imágenes.",
    category: "Video",
    url: "https://pika.art",
  },
  {
    name: "Lumen5",
    description:
      "Convierte blogs y textos en videos promocionales automáticamente.",
    category: "Video",
    url: "https://lumen5.com",
  },
  {
    name: "ElevenLabs",
    description:
      "Síntesis de voz ultra realista y clonación vocal con control emocional.",
    category: "Audio",
    url: "https://elevenlabs.io",
  },
  {
    name: "Murf.ai",
    description: "Generador de voz profesional para narraciones y e-learning.",
    category: "Audio",
    url: "https://murf.ai",
  },
  {
    name: "Play.ht",
    description: "Conversión de texto a voz con voces realistas y API.",
    category: "Audio",
    url: "https://play.ht",
  },
  {
    name: "Suno AI",
    description:
      "Genera canciones completas con letra, voz e instrumentación desde texto.",
    category: "Audio",
    url: "https://suno.ai",
  },
  {
    name: "Udio",
    description:
      "Crea música original de alta calidad mediante prompts de texto.",
    category: "Audio",
    url: "https://udio.com",
  },
  {
    name: "Notion AI",
    description: "Asistente integrado en Notion para redacción y organización.",
    category: "Productividad",
    url: "https://notion.so",
  },
  {
    name: "Otter.ai",
    description: "Transcribe reuniones en tiempo real y genera resúmenes.",
    category: "Productividad",
    url: "https://otter.ai",
  },
  {
    name: "Fireflies.ai",
    description: "Asistente para reuniones: graba, transcribe y resume.",
    category: "Productividad",
    url: "https://fireflies.ai",
  },
  {
    name: "Tome",
    description: "Crea presentaciones narrativas con IA a partir de prompts.",
    category: "Productividad",
    url: "https://tome.app",
  },
  {
    name: "Gamma",
    description: "Genera documentos, presentaciones y páginas web con IA.",
    category: "Productividad",
    url: "https://gamma.app",
  },
  {
    name: "GrammarlyGO",
    description: "Asistente de escritura contextual integrado en navegadores.",
    category: "Escritura",
    url: "https://grammarly.com",
  },
  {
    name: "Jasper",
    description:
      "IA para marketing, generación de contenido y copys persuasivos.",
    category: "Marketing",
    url: "https://jasper.ai",
  },
  {
    name: "Copy.ai",
    description:
      "Herramienta para crear contenido de marketing, redes y emails.",
    category: "Marketing",
    url: "https://copy.ai",
  },
  {
    name: "Writesonic",
    description: "Generador de contenido SEO, artículos y anuncios con IA.",
    category: "Marketing",
    url: "https://writesonic.com",
  },
  {
    name: "Rytr",
    description: "Asistente de escritura asequible para blogs, emails y más.",
    category: "Escritura",
    url: "https://rytr.me",
  },
  {
    name: "GitHub Copilot",
    description:
      "Asistente de programación en tiempo real para editores de código.",
    category: "Desarrollo",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Replit Ghostwriter",
    description: "IA integrada en Replit para autocompletar y depurar código.",
    category: "Desarrollo",
    url: "https://replit.com",
  },
  {
    name: "Codeium",
    description:
      "Alternativa gratuita a Copilot con soporte para muchos lenguajes.",
    category: "Desarrollo",
    url: "https://codeium.com",
  },
  {
    name: "Tabnine",
    description: "Autocompletado de código con IA entrenada localmente.",
    category: "Desarrollo",
    url: "https://tabnine.com",
  },
  {
    name: "Hugging Face",
    description:
      "Plataforma de modelos de IA de código abierto y espacios de demostración.",
    category: "Desarrollo",
    url: "https://huggingface.co",
  },
  {
    name: "Figma AI",
    description:
      "Herramientas de IA integradas en Figma para generar diseños y prototipos.",
    category: "Diseño",
    url: "https://figma.com",
  },
  {
    name: "Galileo AI",
    description:
      "Genera interfaces de usuario a partir de descripciones textuales.",
    category: "Diseño",
    url: "https://galileo.ai",
  },
  {
    name: "Uizard",
    description: "Convierte bocetos en diseños digitales con IA.",
    category: "Diseño",
    url: "https://uizard.io",
  },
  {
    name: "MonkeyLearn",
    description: "Plataforma para análisis de texto y clasificación con IA.",
    category: "Análisis",
    url: "https://monkeylearn.com",
  },
  {
    name: "Akkio",
    description:
      "Herramienta sin código para predicción y análisis de datos empresariales.",
    category: "Análisis",
    url: "https://akkio.com",
  },
  {
    name: "Tableau GPT",
    description:
      "Integración de IA en Tableau para análisis conversacional de datos.",
    category: "Análisis",
    url: "https://tableau.com",
  },
  {
    name: "Khanmigo",
    description: "Tutor de IA de Khan Academy para estudiantes y profesores.",
    category: "Educación",
    url: "https://khanmigo.com",
  },
  {
    name: "Quizlet",
    description:
      "Herramientas de estudio con generación de tarjetas y pruebas por IA.",
    category: "Educación",
    url: "https://quizlet.com",
  },
  {
    name: "Duolingo Max",
    description:
      "Tutor de idiomas con GPT-4 para explicaciones y práctica conversacional.",
    category: "Educación",
    url: "https://duolingo.com",
  },
  {
    name: "Character.AI",
    description: "Crea y chatea con personajes de IA personalizados.",
    category: "Conversacional",
    url: "https://character.ai",
  },
  {
    name: "Groq",
    description: "Inferencia ultrarrápida de modelos de lenguaje con LPU.",
    category: "Desarrollo",
    url: "https://groq.com",
  },
  {
    name: "Mistral AI",
    description: "Modelos de lenguaje de código abierto de alto rendimiento.",
    category: "Desarrollo",
    url: "https://mistral.ai",
  },
  {
    name: "Ollama",
    description: "Ejecuta modelos de IA localmente en tu máquina.",
    category: "Desarrollo",
    url: "https://ollama.com",
  },
  {
    name: "LM Studio",
    description:
      "Interfaz gráfica para ejecutar modelos de lenguaje localmente.",
    category: "Desarrollo",
    url: "https://lmstudio.ai",
  },
  {
    name: "Fal.ai",
    description: "API para modelos de generación de imágenes, video y audio.",
    category: "Desarrollo",
    url: "https://fal.ai",
  },
  {
    name: "Replicate",
    description: "Ejecuta modelos de IA de código abierto con una API simple.",
    category: "Desarrollo",
    url: "https://replicate.com",
  },
  {
    name: "Weights & Biases",
    description:
      "Herramienta para experimentación y monitoreo de modelos de ML.",
    category: "Desarrollo",
    url: "https://wandb.ai",
  },
  {
    name: "LangChain",
    description:
      "Framework para aplicaciones con cadenas de modelos de lenguaje.",
    category: "Desarrollo",
    url: "https://langchain.com",
  },
  {
    name: "LlamaIndex",
    description:
      "Framework para conectar datos privados con modelos de lenguaje.",
    category: "Desarrollo",
    url: "https://llamaindex.ai",
  },
  {
    name: "Vercel v0",
    description: "Genera interfaces web con IA desde un prompt.",
    category: "Diseño",
    url: "https://v0.dev",
  },
  {
    name: "Cursor",
    description: "Editor de código con IA integrada, basado en VS Code.",
    category: "Desarrollo",
    url: "https://cursor.sh",
  },
  {
    name: "Windsurf",
    description: "Editor de código con IA avanzada para desarrollo ágil.",
    category: "Desarrollo",
    url: "https://windsurf.com",
  },
  {
    name: "MagicSchool.ai",
    description: "Herramientas de IA para educadores y creación de lecciones.",
    category: "Educación",
    url: "https://magicschool.ai",
  },
  {
    name: "Diffit",
    description: "Genera materiales diferenciados para estudiantes con IA.",
    category: "Educación",
    url: "https://diffit.me",
  },
  {
    name: "MagicSlides",
    description: "Genera presentaciones de Google Slides con IA en segundos.",
    category: "Productividad",
    url: "https://magicslides.app",
  },
  {
    name: "TidyCal",
    description:
      "Asistente de IA para programar reuniones y gestionar calendarios.",
    category: "Productividad",
    url: "https://tidycal.com",
  },
  {
    name: "Motion",
    description:
      "Asistente de IA para planificación automática de tareas y calendarios.",
    category: "Productividad",
    url: "https://motion.app",
  },
  {
    name: "ClickUp AI",
    description:
      "Asistente integrado en ClickUp para gestión de tareas y documentación.",
    category: "Productividad",
    url: "https://clickup.com",
  },
  {
    name: "Asana AI",
    description:
      "Herramientas de IA para resúmenes, tareas y gestión de proyectos.",
    category: "Productividad",
    url: "https://asana.com",
  },
  {
    name: "Trello AI",
    description:
      "Asistente de IA para automatizar flujos de trabajo en Trello.",
    category: "Productividad",
    url: "https://trello.com",
  },
  {
    name: "Canva Magic Studio",
    description: "Conjunto de herramientas de IA para diseño gráfico en Canva.",
    category: "Diseño",
    url: "https://canva.com",
  },
  {
    name: "Adobe Sensei",
    description: "IA integrada en productos Adobe para edición y creación.",
    category: "Diseño",
    url: "https://adobe.com/sensei",
  },
  {
    name: "Descript",
    description: "Edita audio y video como si fueran documentos de texto.",
    category: "Audio/Video",
    url: "https://descript.com",
  },
  {
    name: "CapCut",
    description: "Editor de video con herramientas de IA para creadores.",
    category: "Video",
    url: "https://capcut.com",
  },
  {
    name: "Opus Clip",
    description: "Convierte videos largos en clips virales con IA.",
    category: "Video",
    url: "https://opus.pro",
  },
  {
    name: "HeyWhisper",
    description: "Asistente de voz para controlar apps y tareas con comandos.",
    category: "Productividad",
    url: "https://heywhisper.com",
  },
  {
    name: "Mem.ai",
    description: "Nota inteligente que se organiza automáticamente con IA.",
    category: "Productividad",
    url: "https://mem.ai",
  },
  {
    name: "Obsidian AI",
    description:
      "Asistente de IA para navegación y generación en tu base de conocimiento.",
    category: "Productividad",
    url: "https://obsidian.md",
  },
  {
    name: "Roam Research AI",
    description: "IA para conectar ideas y generar contenido en Roam.",
    category: "Productividad",
    url: "https://roamresearch.com",
  },
  {
    name: "Elicit",
    description:
      "Asistente de investigación académica con resúmenes y extracción de datos.",
    category: "Análisis",
    url: "https://elicit.org",
  },
  {
    name: "Consensus",
    description:
      "Buscador de respuestas basado en investigaciones científicas.",
    category: "Búsqueda",
    url: "https://consensus.app",
  },
  {
    name: "Scite",
    description:
      "Herramienta para ver cómo se citan los artículos científicos.",
    category: "Análisis",
    url: "https://scite.ai",
  },
  {
    name: "Genei",
    description: "Resumen de documentos académicos y legales con IA.",
    category: "Análisis",
    url: "https://genei.io",
  },
  {
    name: "Humata",
    description: "Haz preguntas a tus documentos PDF con IA.",
    category: "Análisis",
    url: "https://humata.ai",
  },
  {
    name: "AskYourPDF",
    description: "Chat con tus archivos PDF usando IA.",
    category: "Análisis",
    url: "https://askyourpdf.com",
  },
  {
    name: "DocuChat",
    description: "Asistente para interactuar con documentos largos.",
    category: "Análisis",
    url: "https://docuchat.io",
  },
  {
    name: "Beautiful.ai",
    description: "Presentaciones inteligentes que se adaptan automáticamente.",
    category: "Productividad",
    url: "https://beautiful.ai",
  },
  {
    name: "Pitch AI",
    description: "Asistente para crear y mejorar presentaciones en Pitch.",
    category: "Productividad",
    url: "https://pitch.com",
  },
  {
    name: "Flowith",
    description: "Asistente de productividad con memoria contextual.",
    category: "Productividad",
    url: "https://flowith.com",
  },
  {
    name: "Aira",
    description:
      "Asistente de IA para ciegos y personas con discapacidad visual.",
    category: "Accesibilidad",
    url: "https://aira.io",
  },
  {
    name: "Be My Eyes",
    description:
      "Conecta a personas ciegas con voluntarios o IA para asistencia visual.",
    category: "Accesibilidad",
    url: "https://bemyeyes.com",
  },
  {
    name: "Fathom",
    description:
      "Graba y resume reuniones automáticamente, sin transcripción manual.",
    category: "Productividad",
    url: "https://fathom.video",
  },
  {
    name: "Notta",
    description: "Transcribe audio a texto en tiempo real con alta precisión.",
    category: "Productividad",
    url: "https://notta.ai",
  },
  {
    name: "Gong",
    description: "Plataforma de revenue intelligence con IA para ventas.",
    category: "Análisis",
    url: "https://gong.io",
  },
  {
    name: "Chorus.ai",
    description:
      "Analiza conversaciones de ventas para mejorar el rendimiento.",
    category: "Análisis",
    url: "https://chorus.ai",
  },
  {
    name: "Jasper Art",
    description: "Generador de imágenes para acompañar contenido de marketing.",
    category: "Generación de Imágenes",
    url: "https://jasper.ai",
  },
  {
    name: "Artbreeder",
    description: "Crea y mezcla imágenes con redes generativas.",
    category: "Generación de Imágenes",
    url: "https://artbreeder.com",
  },
  {
    name: "DeepAI",
    description: "API y herramientas para generación de texto, imágenes y más.",
    category: "Desarrollo",
    url: "https://deepai.org",
  },
  {
    name: "Civitai",
    description: "Comunidad y repositorio de modelos para Stable Diffusion.",
    category: "Generación de Imágenes",
    url: "https://civitai.com",
  },
  {
    name: "Tensor.Art",
    description: "Plataforma para generar imágenes con modelos personalizados.",
    category: "Generación de Imágenes",
    url: "https://tensor.art",
  },
  {
    name: "Krea",
    description: "Generación de imágenes en tiempo real con control avanzado.",
    category: "Generación de Imágenes",
    url: "https://krea.ai",
  },
  {
    name: "Scenario",
    description: "Crea assets de IA para juegos con modelos personalizados.",
    category: "Generación de Imágenes",
    url: "https://scenario.com",
  },
  {
    name: "Kaiber",
    description: "Transforma imágenes y videos en arte animado con IA.",
    category: "Video",
    url: "https://kaiber.ai",
  },
  {
    name: "Invideo AI",
    description: "Crea videos editados profesionalmente desde texto.",
    category: "Video",
    url: "https://invideo.io",
  },
  {
    name: "Synthesys",
    description: "Genera videos con presentadores de IA y voz realista.",
    category: "Video",
    url: "https://synthesys.io",
  },
  {
    name: "Colossyan",
    description: "Videos con actores de IA para capacitación empresarial.",
    category: "Video",
    url: "https://colossyan.com",
  },
  {
    name: "Elai.io",
    description: "Convierte texto en videos con presentadores digitales.",
    category: "Video",
    url: "https://elai.io",
  },
  {
    name: "Wisecut",
    description:
      "Edita videos automáticamente con IA para podcasts y entrevistas.",
    category: "Video",
    url: "https://wisecut.video",
  },
  {
    name: "Adobe Podcast AI",
    description:
      "Herramientas de IA para grabar, transcribir y editar podcasts.",
    category: "Audio",
    url: "https://podcast.adobe.com",
  },
  {
    name: "Podcastle",
    description: "Grabación y edición de audio profesional con IA.",
    category: "Audio",
    url: "https://podcastle.ai",
  },
  {
    name: "Audo",
    description: "Elimina ruido de fondo y mejora audio con IA.",
    category: "Audio",
    url: "https://audo.ai",
  },
  {
    name: "Krisp",
    description: "Cancelación de ruido en llamadas con IA.",
    category: "Audio",
    url: "https://krisp.ai",
  },
  {
    name: "Cleanvoice",
    description: "Elimina 'eh', 'ah' y silencios de grabaciones de audio.",
    category: "Audio",
    url: "https://cleanvoice.ai",
  },
  {
    name: "Boomy",
    description: "Crea canciones originales en segundos con IA.",
    category: "Audio",
    url: "https://boomy.com",
  },
  {
    name: "Soundraw",
    description: "Genera música sin derechos de autor con IA.",
    category: "Audio",
    url: "https://soundraw.io",
  },
  {
    name: "AIVA",
    description: "Compositor de música clásica y cinematográfica con IA.",
    category: "Audio",
    url: "https://aiva.ai",
  },
  {
    name: "Splash",
    description: "Genera landing pages con IA en minutos.",
    category: "Diseño",
    url: "https://splash.ai",
  },
  {
    name: "Durable",
    description: "Crea sitios web completos en 30 segundos con IA.",
    category: "Diseño",
    url: "https://durable.co",
  },
  {
    name: "10Web",
    description: "Construye sitios web con IA y hosting incluido.",
    category: "Diseño",
    url: "https://10web.io",
  },
  {
    name: "Framer AI",
    description: "Diseña y publica sitios web desde un prompt de texto.",
    category: "Diseño",
    url: "https://framer.com",
  },
  {
    name: "Webflow AI",
    description: "Genera diseños web con IA dentro de Webflow.",
    category: "Diseño",
    url: "https://webflow.com",
  },
  {
    name: "Whisper by OpenAI",
    description: "Modelo de reconocimiento de voz de alta precisión.",
    category: "Audio",
    url: "https://openai.com/research/whisper",
  },
  {
    name: "AssemblyAI",
    description: "API de transcripción y análisis de audio con IA.",
    category: "Audio",
    url: "https://assemblyai.com",
  },
  {
    name: "Deepgram",
    description: "API de voz a texto para aplicaciones empresariales.",
    category: "Audio",
    url: "https://deepgram.com",
  },
  {
    name: "Lovo.ai",
    description: "Generación de voz y estudio de doblaje con IA.",
    category: "Audio",
    url: "https://lovo.ai",
  },
  {
    name: "WellSaid Labs",
    description: "Voces de IA para narraciones profesionales.",
    category: "Audio",
    url: "https://wellsaidlabs.com",
  },
  {
    name: "Resemble AI",
    description: "Clonación de voz y generación de audio con IA.",
    category: "Audio",
    url: "https://resemble.ai",
  },
  {
    name: "PlayAI",
    description: "Crea experiencias interactivas de audio con IA.",
    category: "Audio",
    url: "https://play.ai",
  },
  {
    name: "Mubert",
    description: "Música generativa en tiempo real con IA.",
    category: "Audio",
    url: "https://mubert.com",
  },
  {
    name: "Endel",
    description: "Sonidos personalizados para enfoque, relajación y sueño.",
    category: "Audio",
    url: "https://endel.io",
  },
  {
    name: "Cradle",
    description: "Diseña proteínas y moléculas con IA para biotecnología.",
    category: "Ciencia",
    url: "https://cradle.bio",
  },
  {
    name: "Insilico Medicine",
    description: "Descubrimiento de fármacos con IA generativa.",
    category: "Ciencia",
    url: "https://insilico.com",
  },
  {
    name: "Recursion",
    description: "Plataforma de biología computacional con IA.",
    category: "Ciencia",
    url: "https://recursion.com",
  },
  {
    name: "Atomwise",
    description: "Predicción de interacciones moleculares con IA.",
    category: "Ciencia",
    url: "https://atomwise.com",
  },
  {
    name: "BenevolentAI",
    description: "IA para investigación médica y descubrimiento de fármacos.",
    category: "Ciencia",
    url: "https://benevolent.com",
  },
  {
    name: "Climate TRACE",
    description: "Monitoreo de emisiones globales con IA y satélites.",
    category: "Medio Ambiente",
    url: "https://climatetrace.org",
  },
  {
    name: "Pachama",
    description:
      "Verificación de créditos de carbono con IA y monitoreo satelital.",
    category: "Medio Ambiente",
    url: "https://pachama.com",
  },
  {
    name: "Gro Intelligence",
    description: "Análisis de riesgos agrícolas y climáticos con IA.",
    category: "Análisis",
    url: "https://gro-intelligence.com",
  },
  {
    name: "Agritecture",
    description: "Planificación agrícola urbana con IA.",
    category: "Agricultura",
    url: "https://agritecture.com",
  },
  {
    name: "Tortuga AgTech",
    description: "Optimización de cultivos con sensores y IA.",
    category: "Agricultura",
    url: "https://tortugaagtech.com",
  },
  {
    name: "John Deere AI",
    description: "Maquinaria agrícola autónoma con visión por computadora.",
    category: "Agricultura",
    url: "https://johndeere.com",
  },
  {
    name: "Blue River Tech",
    description: "Tecnología de pulverización selectiva con IA.",
    category: "Agricultura",
    url: "https://bluerivertechnology.com",
  },
  {
    name: "Zesty.ai",
    description: "Evaluación de riesgo de incendios con IA y teledetección.",
    category: "Seguros",
    url: "https://zesty.ai",
  },
  {
    name: "Cape Analytics",
    description: "Inspección de propiedades con IA y datos geoespaciales.",
    category: "Seguros",
    url: "https://capeanalytics.com",
  },
  {
    name: "Tractable",
    description:
      "Evaluación de daños en siniestros con visión por computadora.",
    category: "Seguros",
    url: "https://tractable.ai",
  },
  {
    name: "Shift Technology",
    description: "Detección de fraudes en seguros con IA.",
    category: "Seguros",
    url: "https://shift-technology.com",
  },
  {
    name: "Lemonade AI",
    description: "Asistente virtual para seguros y reclamaciones.",
    category: "Seguros",
    url: "https://lemonade.com",
  },
  {
    name: "Upstart",
    description: "Evaluación crediticia con modelos de IA alternativos.",
    category: "Finanzas",
    url: "https://upstart.com",
  },
  {
    name: "Plaid",
    description: "Conecta apps financieras con datos bancarios usando IA.",
    category: "Finanzas",
    url: "https://plaid.com",
  },
  {
    name: "Kensho",
    description: "Análisis financiero con procesamiento del lenguaje natural.",
    category: "Finanzas",
    url: "https://kensho.com",
  },
  {
    name: "AlphaSense",
    description:
      "Buscador inteligente para investigación financiera y corporativa.",
    category: "Finanzas",
    url: "https://alpha-sense.com",
  },
  {
    name: "BloombergGPT",
    description: "Modelo de lenguaje especializado en finanzas.",
    category: "Finanzas",
    url: "https://bloomberg.com",
  },
  {
    name: "Numerai",
    description: "Fondo de cobertura descentralizado con modelos de IA.",
    category: "Finanzas",
    url: "https://numer.ai",
  },
  {
    name: "HedgeStreet",
    description: "Plataforma de trading con predicciones de IA.",
    category: "Finanzas",
    url: "https://hedgestreet.com",
  },
  {
    name: "Kavout",
    description: "Análisis cuantitativo de acciones con machine learning.",
    category: "Finanzas",
    url: "https://kavout.com",
  },
  {
    name: "Ayasdi",
    description: "Análisis topológico de datos para finanzas y salud.",
    category: "Análisis",
    url: "https://ayasdi.com",
  },
  {
    name: "DataRobot",
    description: "Automatización de ciencia de datos y machine learning.",
    category: "Análisis",
    url: "https://datarobot.com",
  },
  {
    name: "H2O.ai",
    description: "Plataforma de ciencia de datos con IA automatizada.",
    category: "Análisis",
    url: "https://h2o.ai",
  },
  {
    name: "RapidMiner",
    description: "Herramienta de ciencia de datos sin código y con código.",
    category: "Análisis",
    url: "https://rapidminer.com",
  },
  {
    name: "KNIME",
    description: "Plataforma de análisis de datos con flujos visuales.",
    category: "Análisis",
    url: "https://knime.com",
  },
  {
    name: "Alteryx",
    description: "Automatización de análisis de datos para empresas.",
    category: "Análisis",
    url: "https://alteryx.com",
  },
  {
    name: "Databricks",
    description: "Plataforma unificada para datos, IA y machine learning.",
    category: "Análisis",
    url: "https://databricks.com",
  },
  {
    name: "Snowflake Cortex",
    description: "IA generativa integrada en la nube de datos Snowflake.",
    category: "Análisis",
    url: "https://snowflake.com",
  },
  {
    name: "Google Vertex AI",
    description: "Plataforma unificada para modelos de IA en Google Cloud.",
    category: "Desarrollo",
    url: "https://cloud.google.com/vertex-ai",
  },
  {
    name: "Amazon Bedrock",
    description: "Servicio de modelos fundacionales en AWS.",
    category: "Desarrollo",
    url: "https://aws.amazon.com/bedrock",
  },
  {
    name: "Azure AI Studio",
    description:
      "Entorno para construir y desplegar modelos de IA en Microsoft.",
    category: "Desarrollo",
    url: "https://azure.microsoft.com",
  },
  {
    name: "IBM Watsonx",
    description: "Plataforma de IA para empresas de IBM.",
    category: "Desarrollo",
    url: "https://ibm.com/watsonx",
  },
  {
    name: "Cohere",
    description: "Modelos de lenguaje para empresas con API robusta.",
    category: "Desarrollo",
    url: "https://cohere.com",
  },
  {
    name: "Anthropic API",
    description: "Acceso programático a Claude para desarrolladores.",
    category: "Desarrollo",
    url: "https://anthropic.com",
  },
  {
    name: "OpenAI API",
    description: "Acceso a GPT-4, DALL·E, Whisper y más.",
    category: "Desarrollo",
    url: "https://openai.com/api",
  },
  {
    name: "Google AI Studio",
    description: "Entorno gratuito para prototipar con modelos de Google.",
    category: "Desarrollo",
    url: "https://aistudio.google.com",
  },
  {
    name: "Together AI",
    description: "Inferencia rápida de modelos de código abierto.",
    category: "Desarrollo",
    url: "https://together.ai",
  },
  {
    name: "Anyscale",
    description: "Plataforma para ejecutar modelos de IA a escala.",
    category: "Desarrollo",
    url: "https://anyscale.com",
  },
  {
    name: "Modal",
    description: "Ejecuta funciones de Python con IA en la nube.",
    category: "Desarrollo",
    url: "https://modal.com",
  },
  {
    name: "Baseten",
    description: "Despliega modelos de IA como aplicaciones web.",
    category: "Desarrollo",
    url: "https://baseten.co",
  },
  {
    name: "Steamship",
    description: "Framework para agentes de IA con memoria y herramientas.",
    category: "Desarrollo",
    url: "https://steamship.com",
  },
  {
    name: "CrewAI",
    description: "Framework para orquestar equipos de agentes de IA.",
    category: "Desarrollo",
    url: "https://crewai.com",
  },
  {
    name: "AutoGen",
    description: "Framework de Microsoft para agentes conversacionales.",
    category: "Desarrollo",
    url: "https://microsoft.github.io/autogen",
  },
  {
    name: "LangGraph",
    description: "Extensión de LangChain para flujos cíclicos de agentes.",
    category: "Desarrollo",
    url: "https://langchain.com",
  },
  {
    name: "Flowise",
    description: "Interfaz visual para construir flujos de LangChain.",
    category: "Desarrollo",
    url: "https://flowise.ai",
  },
  {
    name: "Dify",
    description: "Plataforma low-code para aplicaciones con LLM.",
    category: "Desarrollo",
    url: "https://dify.ai",
  },
  {
    name: "LiteLLM",
    description: "Capa de compatibilidad para múltiples APIs de LLM.",
    category: "Desarrollo",
    url: "https://litellm.ai",
  },
  {
    name: "Llama.cpp",
    description: "Ejecución eficiente de modelos Llama en CPU.",
    category: "Desarrollo",
    url: "https://github.com/ggerganov/llama.cpp",
  },
  {
    name: "ExLlama",
    description: "Inferencia rápida de modelos Llama cuantizados en GPU.",
    category: "Desarrollo",
    url: "https://github.com/turboderp/exllama",
  },
  {
    name: "Text Generation WebUI",
    description: "Interfaz web para ejecutar modelos de lenguaje localmente.",
    category: "Desarrollo",
    url: "https://github.com/oobabooga/text-generation-webui",
  },
  {
    name: "AnythingLLM",
    description: "Plataforma todo-en-uno para documentos y chat con IA local.",
    category: "Desarrollo",
    url: "https://anythingllm.com",
  },
  {
    name: "PrivateGPT",
    description: "Chat con documentos privados sin enviar datos a la nube.",
    category: "Desarrollo",
    url: "https://privategpt.dev",
  },
  {
    name: "GPT4All",
    description:
      "Modelos de IA que se ejecutan localmente en cualquier dispositivo.",
    category: "Desarrollo",
    url: "https://gpt4all.io",
  },
  {
    name: "Jan",
    description:
      "Aplicación de escritorio para ejecutar modelos de IA localmente.",
    category: "Desarrollo",
    url: "https://jan.ai",
  },
  {
    name: "Ollama WebUI",
    description: "Interfaz web para Ollama con chat y gestión de modelos.",
    category: "Desarrollo",
    url: "https://ollama-webui.com",
  },
  {
    name: "Open WebUI",
    description: "Interfaz web moderna para Ollama y modelos locales.",
    category: "Desarrollo",
    url: "https://openwebui.com",
  },
  {
    name: "Continue",
    description:
      "Plugin de IA para VS Code con soporte para múltiples modelos.",
    category: "Desarrollo",
    url: "https://continue.dev",
  },
  {
    name: "Aider",
    description: "Editor de código en terminal con IA que edita tus archivos.",
    category: "Desarrollo",
    url: "https://aider.chat",
  },
  {
    name: "Devika",
    description: "Agente de IA que puede construir aplicaciones completas.",
    category: "Desarrollo",
    url: "https://devika.ai",
  },
  {
    name: "Cline",
    description: "Asistente de terminal con capacidad para ejecutar comandos.",
    category: "Desarrollo",
    url: "https://github.com/cline/cline",
  },
  {
    name: "SWE Agent",
    description: "Agente de IA que resuelve issues de GitHub automáticamente.",
    category: "Desarrollo",
    url: "https://swe-agent.com",
  },
  {
    name: "Devon",
    description: "Agente de IA para desarrollo de software autónomo.",
    category: "Desarrollo",
    url: "https://devon.ai",
  },
  {
    name: "Replit Agent",
    description: "Agente de IA que programa dentro de Replit.",
    category: "Desarrollo",
    url: "https://replit.com",
  },
  {
    name: "V0 by Vercel",
    description: "Genera componentes UI con IA desde un prompt.",
    category: "Desarrollo",
    url: "https://v0.dev",
  },
  {
    name: "Builder.io AI",
    description: "Genera páginas web con IA y edita visualmente.",
    category: "Desarrollo",
    url: "https://builder.io",
  },
  {
    name: "TeleportHQ",
    description: "Diseña y exporta código con IA generativa.",
    category: "Desarrollo",
    url: "https://teleporthq.io",
  },
  {
    name: "Anima",
    description: "Convierte diseños en código con IA.",
    category: "Desarrollo",
    url: "https://animaapp.com",
  },
  {
    name: "Locofy",
    description: "Convierte Figma y Adobe XD en código React o Vue.",
    category: "Desarrollo",
    url: "https://locofy.ai",
  },
  {
    name: "Zeplin",
    description: "Generación de código y documentación desde diseños.",
    category: "Desarrollo",
    url: "https://zeplin.io",
  },
  {
    name: "Supabase AI",
    description: "Herramientas de IA integradas en la plataforma Supabase.",
    category: "Desarrollo",
    url: "https://supabase.com",
  },
  {
    name: "Firebase Genkit",
    description: "Framework de IA para aplicaciones Firebase.",
    category: "Desarrollo",
    url: "https://firebase.google.com/genkit",
  },
  {
    name: "MongoDB Atlas Vector Search",
    description: "Búsqueda semántica en bases de datos MongoDB.",
    category: "Desarrollo",
    url: "https://mongodb.com",
  },
  {
    name: "Pinecone",
    description: "Base de datos vectorial para aplicaciones de IA.",
    category: "Desarrollo",
    url: "https://pinecone.io",
  },
  {
    name: "Weaviate",
    description: "Base de datos vectorial de código abierto.",
    category: "Desarrollo",
    url: "https://weaviate.io",
  },
  {
    name: "Qdrant",
    description: "Motor de búsqueda vectorial de alto rendimiento.",
    category: "Desarrollo",
    url: "https://qdrant.tech",
  },
  {
    name: "Milvus",
    description: "Plataforma de búsqueda vectorial escalable.",
    category: "Desarrollo",
    url: "https://milvus.io",
  },
  {
    name: "Chroma",
    description: "Base de datos vectorial ligera para prototipado.",
    category: "Desarrollo",
    url: "https://chroma.io",
  },
  {
    name: "LanceDB",
    description: "Base de datos vectorial local y sin servidor.",
    category: "Desarrollo",
    url: "https://lancedb.com",
  },
  {
    name: "Vespa",
    description: "Plataforma de búsqueda y ranking con soporte vectorial.",
    category: "Desarrollo",
    url: "https://vespa.ai",
  },
  {
    name: "Typesense",
    description: "Motor de búsqueda con soporte para incrustaciones.",
    category: "Desarrollo",
    url: "https://typesense.org",
  },
  {
    name: "Elasticsearch",
    description: "Motor de búsqueda con integración de machine learning.",
    category: "Desarrollo",
    url: "https://elastic.co",
  },
  {
    name: "Algolia",
    description: "Búsqueda como servicio con soporte para IA.",
    category: "Desarrollo",
    url: "https://algolia.com",
  },
  {
    name: "Meilisearch",
    description: "Motor de búsqueda de código abierto y fácil de usar.",
    category: "Desarrollo",
    url: "https://meilisearch.com",
  },
  {
    name: "Searx",
    description: "Meta-buscador de código abierto y privado.",
    category: "Búsqueda",
    url: "https://searx.info",
  },
  {
    name: "Kagi",
    description: "Buscador privado con resúmenes de IA.",
    category: "Búsqueda",
    url: "https://kagi.com",
  },
  {
    name: "Brave Search",
    description: "Buscador independiente con asistente de IA.",
    category: "Búsqueda",
    url: "https://search.brave.com",
  },
  {
    name: "Neeva",
    description: "Buscador sin anuncios con integración de IA.",
    category: "Búsqueda",
    url: "https://neeva.com",
  },
  {
    name: "Andi",
    description: "Buscador conversacional con respuestas explicativas.",
    category: "Búsqueda",
    url: "https://andisearch.com",
  },
  {
    name: "Metaphor",
    description: "Buscador semántico inspirado en Perplexity.",
    category: "Búsqueda",
    url: "https://metaphor.systems",
  },
  {
    name: "You.com Pro",
    description: "Versión avanzada con múltiples modelos y personalización.",
    category: "Búsqueda",
    url: "https://you.com",
  },
  {
    name: "Arc Search",
    description: "Navegador con IA que resume páginas web.",
    category: "Búsqueda",
    url: "https://arc.net",
  },

  // === IA Chinas (2025) ===
  {
    name: "Qwen (Tongyi Qianwen)",
    description:
      "Modelo de lenguaje de gran tamaño desarrollado por Alibaba Cloud, con versiones para razonamiento, programación y multimodalidad.",
    category: "Conversacional",
    url: "https://qwen.ai",
  },
  {
    name: "ERNIE Bot",
    description:
      "Modelo de inteligencia artificial de Baidu basado en el framework ERNIE, optimizado para búsqueda, oficina y aplicaciones empresariales.",
    category: "Conversacional",
    url: "https://yiyan.baidu.com",
  },
  {
    name: "GLM (Zhipu AI)",
    description:
      "Serie de modelos de lenguaje de Zhipu AI, incluyendo GLM-4, con capacidades avanzadas de razonamiento y herramientas.",
    category: "Desarrollo",
    url: "https://zhipu.ai",
  },
  {
    name: "Kimi Chat",
    description:
      "Asistente de IA de Moonshot AI con contexto ultralargo (hasta 200K tokens) y soporte para documentos.",
    category: "Conversacional",
    url: "https://kimi.moonshot.cn",
  },
  {
    name: "Baichuan",
    description:
      "Modelos de lenguaje de código abierto y cerrado de Baichuan Intelligent Technology, optimizados para aplicaciones empresariales.",
    category: "Desarrollo",
    url: "https://baichuan-ai.com",
  },
  {
    name: "Yi (01.ai)",
    description:
      "Modelos de lenguaje de alto rendimiento desarrollados por 01.ai, con versiones de hasta 34B parámetros.",
    category: "Desarrollo",
    url: "https://01.ai",
  },
  {
    name: "DeepSeek",
    description:
      "Modelos de IA de DeepSeek, incluyendo versiones especializadas en programación (DeepSeek-Coder).",
    category: "Desarrollo",
    url: "https://deepseek.com",
  },
  {
    name: "SenseChat",
    description:
      "Asistente de IA multimodal de SenseTime, integrado en su ecosistema de visión por computadora.",
    category: "Conversacional",
    url: "https://sensetime.com",
  },
  {
    name: "Aya",
    description:
      "Modelo multilingüe de Alibaba especializado en idiomas asiáticos y globales, desarrollado por Tongyi Lab.",
    category: "Desarrollo",
    url: "https://tongyi.aliyun.com",
  },
  {
    name: "Pangu Large Model",
    description:
      "Modelo fundacional de Huawei Cloud para escenarios empresariales, incluyendo minería, energía y finanzas.",
    category: "Desarrollo",
    url: "https://huaweicloud.com/pangu",
  },
  {
    name: "Bianque",
    description:
      "Modelo de IA especializado en medicina desarrollado por Baidu, para diagnóstico y asistencia clínica.",
    category: "Ciencia",
    url: "https://yiyan.baidu.com",
  },
  {
    name: "Yuan 2.0",
    description:
      "Modelo de lenguaje de Inspur, diseñado para centros de datos y aplicaciones empresariales en China.",
    category: "Desarrollo",
    url: "https://inspur.com",
  },
  {
    name: "WuDao",
    description:
      "Modelo multimodal de gran escala desarrollado por Beijing Academy of Artificial Intelligence (BAAI).",
    category: "Desarrollo",
    url: "https://baai.ac.cn",
  },
  {
    name: "iFLYTEK Spark",
    description:
      "Plataforma de IA conversacional de iFLYTEK, líder en reconocimiento de voz y procesamiento del lenguaje en China.",
    category: "Conversacional",
    url: "https://xinghuo.xfyun.cn",
  },
  {
    name: "360 Zhinao",
    description:
      "Asistente de IA de 360 Security, integrado en navegadores y herramientas de productividad.",
    category: "Productividad",
    url: "https://ai.360.cn",
  },
  {
    name: "Baidu Wenxin",
    description:
      "Plataforma de modelos fundacionales de Baidu para empresas, con API y herramientas de ajuste fino.",
    category: "Desarrollo",
    url: "https://wenxin.baidu.com",
  },
  {
    name: "Tencent HunYuan",
    description:
      "Modelo de IA de Tencent para integración en juegos, redes sociales y servicios en la nube.",
    category: "Desarrollo",
    url: "https://hunyuan.tencent.com",
  },
  {
    name: "Meituan KARMA",
    description:
      "Modelo de IA de Meituan para optimización logística, recomendaciones y atención al cliente.",
    category: "Análisis",
    url: "https://meituan.com",
  },
  {
    name: "JD YANXI",
    description:
      "Modelo de IA de JD.com para comercio electrónico, logística y atención al cliente.",
    category: "Análisis",
    url: "https://jd.com",
  },
  {
    name: "Doubao",
    description:
      "Asistente de IA de ByteDance (creadores de TikTok), integrado en sus apps y servicios.",
    category: "Conversacional",
    url: "https://doubao.com",
  },
];
