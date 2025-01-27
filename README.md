# Proyecto de Galería de Imágenes
---
Aquí puedes acceder a la versión desplegada de la galería:

[Enlace a la página desplegada](#)
## Índice
- [Proyecto de Galería de Imágenes](#proyecto-de-galería-de-imágenes)
  - [Índice](#índice)
  - [Descripción General](#descripción-general)
  - [Características Principales](#características-principales)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)

---

## Descripción General

Este proyecto tiene como objetivo visualizar imágenes. Desde la disposición de las imágenes en una cuadrícula hasta la funcionalidad del modal para ampliarlas, cada detalle está diseñado para que sea intuitivo y estéticamente agradable.


---

## Características Principales

- **Interfaz Responsiva:** La galería se adapta perfectamente a distintos tamaños de pantalla, desde móviles hasta grandes pantallas.
- **Efecto de Zoom al Pasar el Ratón:** Las imágenes tienen un efecto de escala al ser sobrevoladas, haciendo que destaquen visualmente.
- **Modal Interactivo:** Al hacer clic en cualquier imagen, se muestra en un modal ampliado, lo que permite una visualización más detallada.
- **Diseño Moderno:** Colores oscuros, bordes redondeados y transiciones suaves que aportan un toque profesional.

---

## Estructura del Proyecto

### HTML

El archivo `index.html` define la estructura básica de la galería. Aquí he implementado una cuadrícula que organiza las imágenes, cada una optimizada para diferentes tamaños de dispositivos mediante el uso de la etiqueta `<picture>`.

### CSS

En `style.css` he trabajado el diseño visual del proyecto. Desde la disposición de las imágenes en un layout de cuadrícula hasta los efectos visuales de hover y transiciones suaves, el archivo controla toda la experiencia visual del usuario.

- **Sistema de Cuadrícula:** Define cómo se organizan las imágenes, adaptándose automáticamente a distintos dispositivos.
- **Efectos de Hover:** Un pequeño efecto de zoom que da vida a las interacciones.
- **Modal Oscuro:** Diseñado para centrarse únicamente en la imagen ampliada con un fondo oscuro que elimina distracciones.

### JavaScript

El archivo `script.js` se encarga de la funcionalidad interactiva del proyecto:

- Abre un modal al hacer clic en una imagen.
- Permite cerrar el modal haciendo clic fuera de la imagen o en el botón de cierre.
- Gestión sencilla de eventos para una experiencia fluida.

---