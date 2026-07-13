# Tiny House Osorno - Manual de edición

Sitio estático construido con `index.html`, `styles.css`, `script.js`, Bootstrap 5.3.3 y jQuery 3.7.1.

## 1. Hero con fondo cambiante

Las rutas del hero están en `index.html`:

- Línea 50: `bg-hero1.jpeg`.
- Línea 51: `bg-hero2.jpeg`.

El cross-fade está en `styles.css`, líneas 300 a 308. El temporizador está en `script.js`, líneas 48 a 67, y cambia la imagen cada 6000 ms.

## 2. Inventario de 11 modelos

Las tarjetas se encuentran dentro de `.portfolio-track` en `index.html`. Cada tarjeta abre un modal Bootstrap independiente y contiene un enlace directo de cotización a Marcelo Andrade.

| Línea de imagen | Modelo | Metraje | Portada | Modal |
| --- | --- | --- | --- | --- |
| 117 | Tiny | 18 mt² | `cat-modelo-tiny.jpg` | `#modalTiny` |
| 130 | Flopy | 18 mt² | `cat-modelo-flopy.jpg` | `#modalFlopy` |
| 143 | Mirasur | 21 mt² | `cat-modelo-mirasur.jpg` | `#modalMirasur` |
| 156 | Ralún | 21 mt² | `cat-modelo-ralun.jpg` | `#modalRalun` |
| 169 | VIP | 24 mt² | `cat-modelo-vip.jpg` | `#modalVip` |
| 182 | Cochamó | 30 mt² | `cat-modelo-cochamo.jpg` | `#modalCochamo` |
| 195 | Puelo | 36 mt² | `cat-modelo-puelo.jpg` | `#modalPuelo` |
| 208 | Llanquihue | 48 mt² | `cat-modelo-llanquihue.jpg` | `#modalLlanquihue` |
| 221 | Patagonia | 54 mt², 3 módulos | `cat-modelo-patagonia.jpg` | `#modalPatagonia` |
| 234 | Oficina Corporativa | A medida | `cat-modelo-oficina-corporativa.jpg` | `#modalOficina` |
| 247 | Food Truck / Comercial | Comercial | `cat-modelo-food-truck.jpg` | `#modalFoodTruck` |

El carrusel principal se estiliza desde `styles.css`, línea 613. La pista está en la línea 625 y las acciones de tarjeta desde la línea 683. La navegación se controla en `script.js`, líneas 80 a 99 y 178 a 186.

El cálculo es automático: muestra tres modelos en escritorio, dos en tablet y uno en móvil. El contador toma la cantidad real de `.portfolio-card`, por lo que actualmente informa un total de 11.

## 3. Imágenes de los 11 modales

Cada modal contiene exactamente tres imágenes: exterior, interior y plano. Las secuencias están escritas directamente en `index.html`.

| Líneas HTML | Modelo | Archivos que se deben reemplazar |
| --- | --- | --- |
| 617 a 619 | Tiny | `modal-tiny-ext.jpg`, `modal-tiny-int.jpg`, `modal-tiny-plano.jpg` |
| 658 a 660 | Flopy | `modal-flopy-ext.jpg`, `modal-flopy-int.jpg`, `modal-flopy-plano.jpg` |
| 699 a 701 | Mirasur | `modal-mirasur-ext.jpg`, `modal-mirasur-int.jpg`, `modal-mirasur-plano.jpg` |
| 740 a 742 | Ralún | `modal-ralun-ext.jpg`, `modal-ralun-int.jpg`, `modal-ralun-plano.jpg` |
| 781 a 783 | VIP | `modal-vip-ext.jpg`, `modal-vip-int.jpg`, `modal-vip-plano.jpg` |
| 819 a 821 | Cochamó | `modal-cochamo-ext.jpg`, `modal-cochamo-int.jpg`, `modal-cochamo-plano.jpg` |
| 852 a 854 | Puelo | `modal-puelo-ext.jpg`, `modal-puelo-int.jpg`, `modal-puelo-plano.jpg` |
| 885 a 887 | Llanquihue | `modal-llanquihue-ext.jpg`, `modal-llanquihue-int.jpg`, `modal-llanquihue-plano.jpg` |
| 918 a 920 | Patagonia | `modal-patagonia-ext.jpg`, `modal-patagonia-int.jpg`, `modal-patagonia-plano.jpg` |
| 951 a 953 | Oficina Corporativa | `modal-oficina-corporativa-ext.jpg`, `modal-oficina-corporativa-int.jpg`, `modal-oficina-corporativa-plano.jpg` |
| 984 a 986 | Food Truck / Comercial | `modal-food-truck-ext.jpg`, `modal-food-truck-int.jpg`, `modal-food-truck-plano.jpg` |

Convención de nombres:

- `ext`: fotografía o render exterior.
- `int`: fotografía o render interior.
- `plano`: planta o plano referencial.

Los archivos actuales son placeholders JPEG válidos creados con el material existente para evitar errores 404. Sustituye su contenido manteniendo exactamente los mismos nombres y extensiones.

Recomendación: imágenes de 1800 x 1200 px, relación 3:2 y peso menor a 350 KB.

## 4. Comportamiento de los modales

Cada tarjeta usa un `data-bs-target` diferente. Bootstrap abre directamente el modal correspondiente, sin compartir paneles ocultos.

La interacción por teclado obtiene el selector de `data-bs-target` en `script.js`, líneas 197 a 201. Cada mini-slider vuelve a su primera imagen al abrirse mediante el bloque de líneas 208 a 213.

El enlace `Cotizar` detiene la propagación del clic en `script.js`, líneas 204 a 206. Así abre WhatsApp sin activar el modal de la tarjeta.

En pantallas de hasta 768 px, cada modal conserva exactamente el 75% del ancho del viewport. La regla está en `styles.css`, líneas 2090 a 2092.

## 5. Galería de fabricación

Esta sección no fue modificada. Sus rutas continúan en `index.html`:

- Línea 315: `chasis-taller.png`.
- Línea 326: `aislacion-estructural.png`.
- Línea 336: `montaje-interiores.png`.

La grilla comienza en `styles.css`, línea 904. Se mantienen sus restricciones de altura y comportamiento responsive.

## 6. Cómo sustituir imágenes

1. Exporta el render o fotografía con el nombre exacto indicado en las tablas.
2. Conserva la extensión `.jpg`.
3. Reemplaza el archivo en la raíz del proyecto.
4. Recarga Live Server sin caché.
5. Revisa portada, exterior, interior y plano en escritorio y móvil.

## 7. Cómo añadir otro modelo

1. Duplica una `.portfolio-card` dentro de `.portfolio-track`.
2. Define un `data-bs-target` único.
3. Duplica un `.model-modal` completo y asigna el mismo ID.
4. Cambia los IDs del modal, título y carrusel interno.
5. Añade las tres imágenes y el enlace personalizado de WhatsApp.

## 8. Interacciones preservadas

- Hero automático cada 6 segundos.
- Proceso de compra automático cada 4 segundos.
- FAQ inicialmente cerrada.
- Carrusel con flechas, teclado y contador dinámico.
- Modales Bootstrap con carrusel interno.
- Formulario y navegación responsive sin cambios.

## 9. Lista antes de publicar

- Confirmar que las 44 imágenes JPG definitivas existan.
- Revisar mayúsculas, minúsculas y extensiones.
- Probar los 11 enlaces de WhatsApp.
- Probar los 11 modales y sus 33 imágenes.
- Revisar en 390 px, 768 px, 1280 px y 1440 px.
- Ejecutar Lighthouse con las imágenes finales optimizadas.
