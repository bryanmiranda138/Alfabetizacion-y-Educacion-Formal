# 🗺️ WebSIG: Alfabetización y Educación Formal en El Salvador (2024)

Un Sistema de Información Geográfica en entorno Web (Web SIG) diseñado para analizar y visualizar de forma interactiva la distribución territorial de los niveles de alfabetización y asistencia a la educación formal a nivel de distritos en El Salvador.

Este proyecto cartográfico transforma datos censales en una herramienta visual, rápida y accesible mediante navegadores web, sin depender de servidores backend gracias a su arquitectura estática (JAMstack).

## ✨ Características Principales

* **Mapas de Coropletas Interactivos:** Visualización espacial de 12 variables demográficas segmentadas por sexo y zona.
* **Control de Capas Excluyente:** Menú lateral implementado con OpenLayers que garantiza la visualización de un solo indicador a la vez (Radio Buttons), evitando la saturación visual.
* **Buscador Predictivo:** Herramienta de búsqueda integrada para localizar y hacer zoom automático a cualquier distrito del país.
* **Herramientas de Medición:** Funcionalidad nativa para medir distancias métricas y calcular áreas sobre el mapa base.
* **Interfaz Limpia (UI/UX):** * Ventanas emergentes (Popups) dinámicas que ocultan metadatos técnicos.
  * Resaltado visual de polígonos al pasar el cursor (`Highlight on hover`).
  * Modal informativo de bienvenida integrado.
* **Alto Rendimiento:** Geometrías optimizadas y minificadas (precisión reducida a 5 decimales) para garantizar una carga casi instantánea en la web.

## 📊 Fuentes de Datos

* **Datos Demográficos:** Censo Nacional de Población y Vivienda 2024 - Banco Central de Reserva de El Salvador (BCR).
* **Cartografía Base:** Límites político-administrativos de El Salvador en Sistema de Referencia de Coordenadas **WGS84 (EPSG:4326)**.

## 🛠️ Tecnologías y Arquitectura

El procesamiento espacial se realizó en escritorio y se exportó para la web utilizando el siguiente stack:

* **PostgreSQL / PostGIS:** Motor de base de datos relacional espacial para el almacenamiento seguro, uniones espaciales (Joins) y limpieza de los tabulados del BCR.
* **QGIS (v3.44.9):** Software de escritorio para el diseño de la simbología, tematización y configuración cartográfica.
* **qgis2web:** Complemento de QGIS para la transpilación del proyecto de escritorio a código web.
* **OpenLayers:** Librería de JavaScript de alto rendimiento para el renderizado interactivo de los mapas en el navegador.
* **HTML5, CSS3 & JavaScript (Vanilla):** Lenguajes base del frontend.

## 🚀 Instalación y Despliegue

Este proyecto es autocontenido y no requiere instalación de dependencias, servidores locales (como Node.js o PHP) ni bases de datos activas para su visualización.

### Uso en Entorno Local (Offline)
1. Clona o descarga este repositorio en formato `.zip`.
2. Descomprime la carpeta.
3. Abre el archivo `index.html` con cualquier navegador web moderno (Chrome, Firefox, Edge).

### Despliegue Web
El proyecto está optimizado para ser alojado en plataformas de sitios estáticos. Simplemente arrastra la carpeta principal a **Netlify**, **GitHub Pages** o **Vercel** para tener el WebSIG público en cuestión de segundos.

## 📂 Estructura del Repositorio

```text
/
├── index.html               # Archivo principal y estructura de la interfaz (incluye Modal)
├── layers/                  # Archivos JavaScript (.js) con las geometrías minificadas (GeoJSON)
├── styles/                  # Archivos de configuración de simbología coroplética por capa
├── resources/               # Librerías estáticas (OpenLayers, CSS, utilidades de búsqueda)
├── webfonts/                # Tipografías e iconos de interfaz
└── images/                  # Marcadores y recursos gráficos del mapa base
```
✒️ Autor
Bryan Andres Candelario Miranda
Desarrollador y Diseñador del Proyecto
