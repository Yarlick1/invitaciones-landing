export const siteInfo = {
  brandName: 'IDU',
  headline: 'Invitaciones digitales que se sienten como tu evento',
  subtitle:
    'Creamos invitaciones elegantes, claras y listas para compartir por redes sociales o correo. Perfectas para bodas, XV años, bautizos y celebraciones especiales.',
  primaryCta: 'Ver catálogo',
  secondaryCta: 'Cotizar por WhatsApp',
  whatsappUrl: 'https://wa.me/7222611354',
}

export const navigationItems = [
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'FAQ', href: '#faq' },
]

export const heroStats = [
  { value: '48h', label: 'Primera propuesta' },
  { value: '+50', label: 'Eventos entregados' },
  { value: '100%', label: 'Digital y compartible' },
]

export const galleryItems = [
  {
    id: 'boda-editorial',
    title: 'Boda editorial',
    eventType: 'Boda',
    previewType: 'wedding',
    description: 'Estilo romántico con tonos suaves, agenda del evento y ubicación.',
  },
  {
    id: 'xv-moderno',
    title: 'XV moderno',
    eventType: 'XV años',
    previewType: 'xv',
    description: 'Layout dinámico para fotos, música, dress code y confirmación.',
  },
  {
    id: 'bautizo-delicado',
    title: 'Bautizo delicado',
    eventType: 'Bautizo',
    previewType: 'baptism',
    description: 'Diseño sereno con detalles finos, fecha, ubicación y datos clave.',
  },
]

export const pricingPackages = [
  {
    id: 'basico',
    name: 'Básico',
    price: '$499 MXN',
    description: 'Para eventos simples que necesitan una invitación bonita y clara.',
    featured: false,
    features: ['Diseño personalizado', 'Fecha, hora y ubicación', 'Link listo para compartir', '1 ronda de ajustes'],
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$799 MXN',
    description: 'La opción más equilibrada para una experiencia completa.',
    featured: true,
    features: ['Todo lo del paquete Básico', 'Galería de fotos', 'Botón de confirmación', 'Música o video destacado', '2 rondas de ajustes'],
  },
  {
    id: 'personalizado',
    name: 'Personalizado',
    price: 'A cotizar',
    description: 'Para eventos con una idea visual o funcionalidad especial.',
    featured: false,
    features: ['Dirección de arte a medida', 'Secciones especiales', 'Animaciones personalizadas', 'Acompañamiento completo'],
  },
]

export const processSteps = [
  {
    id: 'brief',
    icon: 'messages',
    title: 'Cuéntalo todo',
    description: 'Compártenos tipo de evento, fecha, datos clave, fotos y estilo deseado.',
  },
  {
    id: 'design',
    icon: 'sparkles',
    title: 'Diseñamos la propuesta',
    description: 'Armamos una invitación mobile-first con jerarquía clara y estilo visual.',
  },
  {
    id: 'review',
    icon: 'pen',
    title: 'Ajustamos detalles',
    description: 'Revisamos textos, colores, imágenes y datos hasta dejarla lista.',
  },
  {
    id: 'delivery',
    icon: 'send',
    title: 'Recibes tu link',
    description: 'Entregamos el enlace final para compartirlo al instante con tus invitados.',
  },
]

export const faqItems = [
  {
    id: 'tiempos',
    question: '¿Cuánto tarda una invitación digital?',
    answer: 'El tiempo promedio es de 2 a 5 días hábiles, dependiendo del paquete y del nivel de personalización que necesite tu evento.',
  },
  {
    id: 'cambios',
    question: '¿Puedo pedir cambios al diseño?',
    answer: 'Sí. Cada paquete incluye rondas de ajustes para pulir textos, colores, fotos y datos antes de la entrega final.',
  },
  {
    id: 'compartir',
    question: '¿Cómo se comparte la invitación?',
    answer: 'Te entregamos un enlace digital que puedes enviar por WhatsApp, correo, redes sociales o incluir en mensajes personalizados.',
  },
  {
    id: 'fotos',
    question: '¿Necesito tener fotos profesionales?',
    answer: 'No es obligatorio. Podemos trabajar con fotos de buena calidad o crear una propuesta más gráfica si aún no tienes imágenes.',
  },
  {
    id: 'rsvp',
    question: '¿Puede incluir confirmación de asistencia?',
    answer: 'Sí. Podemos agregar botón de confirmación por WhatsApp o dirigir a un formulario, según el flujo que prefieras.',
  },
  {
    id: 'eventos',
    question: '¿Para qué tipo de eventos funciona?',
    answer: 'Funciona para bodas, XV años, bautizos, cumpleaños, baby showers, aniversarios, eventos corporativos y celebraciones familiares.',
  },
]
