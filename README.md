# Infinity Park Hotel — Rediseño web

Rediseño estático (HTML/CSS/JS, sin build step) del sitio de Infinity Park Hotel, listo para publicar en GitHub Pages, Vercel o cualquier hosting estático.

## Estructura

```
index.html          Página principal (hero, historia, habitaciones, experiencias, galería, testimonios, contacto)
assets/css/styles.css  Estilos y sistema de diseño (tokens de color/tipografía en :root)
assets/js/main.js     Menú móvil, año del footer, formulario de reserva (placeholder)
```

## Cómo verlo localmente

Solo abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Notas de este rediseño

- El contenido (textos, precios, contacto) es **placeholder** — reemplázalo con la información real del hotel.
- Las imágenes se dejaron como bloques con degradado (no hubo acceso a internet para traer fotos reales ni el contenido del sitio original durante esta sesión). Reemplaza los `.media-block`, `.room-media`, `.gallery-item` y `.hero-media` en `styles.css` por `background-image` con fotos reales, o agrega elementos `<img>` en el HTML.
- Paleta: verde bosque (`--color-forest`), dorado (`--color-gold`) y crudo (`--color-cream`), tipografía Playfair Display (títulos) + Inter (cuerpo).
- El formulario de reserva del hero es un placeholder visual; hay que conectarlo a un motor de reservas real (Booking, Cloudbeds, etc.) o a un backend propio.
