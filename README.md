# Tiny House Osorno

Sitio web estático para la presentación y cotización de viviendas modulares de Tiny House Osorno. La implementación actual reúne el catálogo comercial, precios, fichas detalladas, especificaciones constructivas, proceso de compra, talleres, preguntas frecuentes, contacto por WhatsApp y una página de garantías, condiciones y privacidad.

Última revisión del manual: 14 de julio de 2026.

## Tecnologías

- HTML5 en `index.html`.
- CSS personalizado en `assets/css/styles.css`.
- JavaScript y jQuery en `assets/js/script.js`.
- Bootstrap 5.3.3 y Bootstrap Icons 1.11.3 desde CDN.
- jQuery 3.7.1 desde CDN.
- Google Maps embebido para las ubicaciones de los talleres.

No existe un proceso de compilación ni dependencias locales. El sitio puede servirse directamente como contenido estático.

## Estructura del proyecto

```text
web/
├── index.html
├── privacidad.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    └── img/
        ├── logo.png
        ├── bg-hero1.jpeg
        ├── bg-hero2.jpeg
        ├── elegirnos.jpeg
        ├── taller.jpg
        ├── construccion/
        │   ├── construccion1.jpg
        │   ├── construccion2.jpg
        │   └── construccion3.jpg
        └── modelos/
            ├── tiny/
            ├── ralun/
            ├── frutillar/
            ├── cochamo/
            ├── puelo/
            ├── pucon/
            ├── puyehue/
            ├── llanquihue/
            ├── patagonia/
            ├── ranco/
            ├── chiloe/
            └── tronador/
```

## Secciones vigentes

| Sección | Ancla | Contenido principal |
| --- | --- | --- |
| Hero | `#inicio` | Presentación comercial, llamadas a la acción y fondo rotativo. |
| Introducción | Sin ancla | Explicación del ancho transportable y personalización del diseño. |
| Catálogo | `#servicios` | Carrusel con 12 modelos, metrajes, precios y accesos a cotización. |
| Por qué elegirnos | `#ingenieria` | Más de 600 módulos, postventa y fotografía del equipo. |
| Fabricación | `#fabricacion` | Chasis, aislación, tabiquería y revestimientos. |
| Inclusiones y extras | `#incluye` | Exclusiones del valor base, obras opcionales y extras cotizables. |
| Proceso de compra | `#proceso` | Línea de tiempo interactiva de 8 etapas. |
| Talleres | `#ubicacion` | Mapas de Osorno y Temuco sobre un fondo fotográfico atenuado. |
| Preguntas frecuentes | `#faq` | Acordeón con 5 consultas comerciales y técnicas. |
| Contacto | `#contacto` | Tres contactos y botones directos de cotización por WhatsApp. |

## Hero

El Hero utiliza dos imágenes:

- `assets/img/bg-hero1.jpeg`
- `assets/img/bg-hero2.jpeg`

`script.js` alterna ambas imágenes cada 5 segundos mediante un fundido controlado por las clases `.hero-slide` y `.active`.

Actualmente comunica:

- Viviendas modulares transportables.
- Chasis de hierro de 4 mm y perfil 100x50.
- Aislación con lana de vidrio en todas las caras.
- Entrega de las viviendas terminadas desde fábrica.

## Catálogo actual de 12 modelos

Las tarjetas están dentro de `.portfolio-track`. Cada una incluye portada, metraje, precio, acceso al modal y enlace directo de WhatsApp.

| Modelo | Metraje | Precio publicado | Portada | Modal | Imágenes |
| --- | ---: | ---: | --- | --- | ---: |
| Tiny | 18 mt² | Desde $6.990.000 | `modelos/tiny/tiny1.jpeg` | `#modalTiny` | 3 |
| Ralún | 21 mt² | Desde $8.490.000 | `modelos/ralun/ralun1.jpeg` | `#modalRalun` | 4 |
| Frutillar | 25.5 mt² | Desde $9.990.000 | `modelos/frutillar/frutillar1.jpeg` | `#modalFrutillar` | 4 |
| Cochamó | 30 mt² | Desde $13.490.000 | `modelos/cochamo/cochamo1.jpeg` | `#modalCochamo` | 4 |
| Puelo | 36 mt² | Desde $14.990.000 | `modelos/puelo/puelo1.jpeg` | `#modalPuelo` | 4 |
| Pucon | 39 mt² | Desde $15.990.000 | `modelos/pucon/pucon1.jpeg` | `#modalPucon` | 4 |
| Puyehue | 42 mt² | Desde $16.990.000 | `modelos/puyehue/puyehue1.jpeg` | `#modalPuyehue` | 4 |
| Llanquihue | 48 mt² | Desde $19.990.000 | `modelos/llanquihue/llanquihue1.jpeg` | `#modalLlanquihue` | 3 |
| Patagonia | 54 mt² | Desde $22.990.000 | `modelos/patagonia/patagonia1.jpeg` | `#modalPatagonia` | 4 |
| Ranco | 66 mt² | Desde $33.990.000 | `modelos/ranco/ranco1.jpeg` | `#modalRanco` | 4 |
| Chiloé | 72 mt² | Desde $31.990.000 | `modelos/chiloe/chiloe1.jpeg` | `#modalChiloe` | 4 |
| Tronador | 94 mt² | Desde $38.880.000 | `modelos/tronador/tronador1.jpeg` | `#modalTronador` | 4 |

Las rutas de la tabla son relativas a `assets/img/`.

### Comportamiento del carrusel

- Muestra 3 tarjetas en escritorio, 2 en tablet y 1 en móvil.
- Las flechas modifican el índice del carrusel sin recargar la página.
- El contador se calcula desde la cantidad real de elementos `.portfolio-card`.
- Las tarjetas pueden abrirse con clic o teclado.
- El enlace `Cotizar` detiene la propagación para abrir WhatsApp sin activar el modal.
- Los precios de las tarjetas usan `.portfolio-price`.

## Modales del catálogo

Cada modelo tiene un modal Bootstrap independiente y un carrusel de imágenes propio. Las galerías usan la convención:

```text
assets/img/modelos/<slug>/<slug>1.jpeg
assets/img/modelos/<slug>/<slug>2.jpeg
assets/img/modelos/<slug>/<slug>3.jpeg
assets/img/modelos/<slug>/<slug>4.jpeg
```

Tiny y Llanquihue utilizan tres imágenes. Los otros diez modelos utilizan cuatro, para un total actual de 46 imágenes de catálogo.

Cada modal contiene:

- Nombre y metraje del modelo.
- Precio en la misma línea del metraje mediante `.model-modal-meta` y `.model-modal-price`.
- Descripción comercial.
- Lista técnica `.model-spec-list`.
- Botón de cotización por WhatsApp.
- Carrusel que vuelve a la primera imagen cada vez que se abre el modal.

En pantallas de hasta 768 px, el diálogo conserva un ancho aproximado del 75% del viewport y reorganiza la galería sobre la información.

## Estándar de fabricación

La sección `#fabricacion` documenta el estándar constructivo vigente:

- Chasis de hierro rígido de 4 mm de espesor y dimensiones de 100x50.
- Recubrimiento antioxidante sobre la estructura base.
- Aislación multicapa con lana de vidrio de alto rendimiento térmico en todas las caras.
- Tabiquería estructural en vulcometal o pino de 2x3, a elección del cliente.
- Revestimiento exterior en metal siding o smart panel de alta durabilidad y resistencia climática.

Las menciones equivalentes dentro de las listas técnicas de los modales fueron normalizadas con este mismo estándar.

Las imágenes de fabricación activas son:

- `assets/img/construccion/construccion1.jpg`
- `assets/img/construccion/construccion2.jpg`
- `assets/img/construccion/construccion3.jpg`

## Talleres y mapas

La sección `#ubicacion` presenta dos tarjetas con mapas embebidos:

- Taller Osorno.
- Taller Temuco.

La imagen `assets/img/taller.jpg` cubre el 100% del fondo de la sección mediante `.location-section::after`. Sobre ella se aplica una capa clara semitransparente para reducir el contraste y mantener legibles los encabezados y mapas.

El fondo permanece centrado, sin repetición y con `background-size: cover` tanto en escritorio como en móvil. En pantallas pequeñas los mapas se apilan en una sola columna.

## Contacto

La web ofrece acceso directo por WhatsApp a:

- Marcelo Andrade, gestión de proyectos y dirección.
- Liliana Campos, ejecutiva de ventas.
- Karla Ortega, ejecutiva de ventas.

El CTA final ya no contiene formulario, tarjetas laterales ni procesa datos. En su lugar, presenta un único panel centrado con botones directos hacia los WhatsApp de los tres asesores y una nota de consentimiento enlazada a `privacidad.html`. También se mantienen el botón flotante, los enlaces de cotización en tarjetas y modales, e Instagram en el pie de página.

## Garantías, compra y privacidad

El archivo `privacidad.html` comparte la cabecera, navegación, identidad visual y pie de página del inicio. Su contenido incluye:

- Garantía de 1 año y detalle de coberturas.
- Condición de pago total para garantía y post venta.
- Procedimiento y canal exclusivo de post venta por WhatsApp.
- Esquema de pagos 50%, 30% y 20%.
- Condición de entrega terminada desde fábrica.
- Datos personales recopilados, finalidad y resguardo.
- Proceso de adecuación a la Ley N° 21.719, cuya entrada en vigencia está fijada para el 1 de diciembre de 2026.
- Categorías de datos iniciales y contractuales claramente separadas.
- Derechos de acceso, rectificación, cancelación o supresión y oposición, ejercibles por correo electrónico.
- Condiciones del derecho a retracto para viviendas fabricadas por encargo conforme al artículo 3 bis de la Ley N° 19.496.

El enlace del pie de página lleva directamente a esta página legal. El crédito “Powered By Human Web Design” enlaza al sitio de Human Web Design en una pestaña nueva y utiliza los atributos de seguridad recomendados.

## Interacciones y accesibilidad

- Hero automático cada 5 segundos.
- Proceso de compra automático cada 4 segundos y selección manual de sus 8 etapas.
- FAQ inicialmente cerrada y con un solo elemento abierto a la vez.
- Animaciones de entrada con `IntersectionObserver`.
- Navegación móvil Bootstrap con cierre al seleccionar un enlace.
- Apertura de tarjetas mediante teclado con `Enter` o barra espaciadora.
- Estados `aria-live` en el contador y la línea de tiempo.
- Textos alternativos en imágenes informativas.
- Carga diferida en imágenes secundarias y mapas.
- Reducción de animaciones mediante `prefers-reduced-motion`.

## Diseño responsivo

Los principales puntos de adaptación están definidos alrededor de:

- Escritorio: desde 992 px.
- Tablet: hasta 991.98 px.
- Móvil: hasta 768 px.
- Móvil pequeño: hasta 575.98 px.

En móvil se apilan las grillas, el carrusel muestra una tarjeta, los mapas ocupan todo el ancho disponible y los modales reorganizan su contenido verticalmente.

## Cómo actualizar un precio

El precio de cada modelo aparece dos veces en `index.html`:

1. En la tarjeta, dentro de `.portfolio-price`.
2. En el modal, dentro de `.model-modal-price`.

Ambos valores deben cambiarse juntos para evitar inconsistencias.

## Cómo sustituir imágenes de un modelo

1. Localiza la carpeta `assets/img/modelos/<slug>/`.
2. Conserva los nombres secuenciales existentes.
3. Mantén la extensión `.jpeg` usada por ese modelo.
4. Optimiza las imágenes antes de publicarlas.
5. Revisa la portada y todas las diapositivas del modal en escritorio y móvil.

Se recomienda una relación cercana a 3:2, resolución suficiente para pantallas grandes y un peso reducido para proteger el tiempo de carga.

## Cómo añadir o retirar un modelo

Para añadir un modelo:

1. Añade su carpeta e imágenes bajo `assets/img/modelos/`.
2. Duplica una `.portfolio-card` dentro de `.portfolio-track`.
3. Define un `data-model` y un `data-bs-target` únicos.
4. Duplica un `.model-modal` y sincroniza todos sus identificadores.
5. Actualiza imágenes, nombre, metraje, precio, descripción y enlace de WhatsApp.
6. Prueba tarjeta, modal, carrusel interno y cotización por WhatsApp.

Para retirar un modelo se deben eliminar su tarjeta y modal. La carpeta de imágenes puede eliminarse solo después de comprobar que ninguna ruta del sitio todavía la utiliza.

## Ejecución local

Puede abrirse con Live Server o con cualquier servidor HTTP estático. Por ejemplo:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Después visita `http://127.0.0.1:4173/`.

Es recomendable usar un servidor en lugar de abrir `index.html` directamente para reproducir mejor el comportamiento de producción.

## Lista antes de publicar

- Confirmar los 12 nombres, metrajes y precios en tarjetas y modales.
- Probar los 12 modales y sus 46 imágenes.
- Probar los enlaces de WhatsApp de tarjetas, modales y contactos.
- Probar el enlace del pie de página y los anclajes internos de `privacidad.html`.
- Verificar el WhatsApp de post venta `+56 9 2175 9503` y su horario publicado.
- Verificar los mapas de Osorno y Temuco.
- Revisar el fondo `taller.jpg` en escritorio y móvil.
- Revisar el sitio en 390 px, 768 px, 1280 px y 1440 px.
- Comprobar navegación por teclado y preferencia de movimiento reducido.
- Ejecutar Lighthouse con las imágenes finales optimizadas.
