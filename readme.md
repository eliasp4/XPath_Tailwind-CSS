# Web Scraping Tool con XPath y Tailwind CSS

## Descripción
Esta herramienta de web scraping permite a los usuarios extraer información de páginas web utilizando XPath. La interfaz de usuario está diseñada con Tailwind CSS para una experiencia moderna y responsive.

## Características
- Interfaz de usuario intuitiva y atractiva diseñada con Tailwind CSS
- Capacidad para ingresar una URL y una expresión XPath
- Extracción de datos basada en el XPath proporcionado
- Visualización de resultados, incluyendo imágenes si se extraen

## Tecnologías Utilizadas
- HTML5
- JavaScript (ES6+)
- Tailwind CSS
- XPath para la selección de elementos

## Instalación
1. Clona este repositorio: git clone https://github.com tu-usuario/web-scraping-tool.git
2. Navega al directorio del proyecto: cd web-scraping-tool
3. Instala las dependencias: npm install
4. Compila los estilos de Tailwind CSS: npx tailwindcss -i ./src/input.css -o ./dist/output.css

## Uso
1. Abre el archivo `index.html` en tu navegador web.
2. Ingresa la URL del sitio web que deseas scrapear.
3. Ingresa la expresión XPath para los elementos que quieres extraer.
4. Haz clic en "Realizar Scraping" para ver los resultados.

## Estructura del Proyecto
- `src/index.html`: Archivo HTML principal
- `src/script.js`: Lógica de JavaScript para el scraping
- `src/input.css`: Archivo de entrada para Tailwind CSS
- `dist/output.css`: Archivo CSS compilado por Tailwind
- `tailwind.config.js`: Configuración de Tailwind CSS

## Notas Adicionales
Este proyecto fue desarrollado como parte de una tarea. El objetivo principal era implementar una herramienta de web scraping utilizando XPath y diseñar una interfaz de usuario con Tailwind CSS.