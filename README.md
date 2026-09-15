# Invitaciones Digitales Landing

Landing page mobile-first para exhibicion y venta de invitaciones digitales.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Lucide React
- ESLint
- pnpm

## Comandos

```bash
pnpm install
pnpm run dev
pnpm run lint
pnpm run build
pnpm run preview
```

## Estructura principal

```txt
src/
|-- assets/
|-- components/
|   |-- sections/
|   `-- ui/
|-- data/
|-- layouts/
|-- utils/
|-- App.jsx
|-- index.css
`-- main.jsx
```

## Contenido editable

La mayor parte del contenido comercial vive en:

```txt
src/data/siteData.js
```

Ahi puedes actualizar:

- Nombre de marca
- Textos del hero
- URL de WhatsApp
- Items de galeria
- Paquetes y precios
- Pasos del proceso
- Preguntas frecuentes

## Checklist antes de publicar

- Cambiar `whatsappUrl` por el numero real.
- Reemplazar imagenes de muestra por piezas finales.
- Revisar textos con acentos si el editor esta guardando UTF-8 correctamente.
- Ejecutar `pnpm run lint`.
- Ejecutar `pnpm run build`.
- Probar `pnpm run preview` en mobile y desktop.
