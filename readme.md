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
  1. Clona este repositorio: git clone https://github.com/eliasp4/XPath_Tailwind-CSS/
2. Navega al directorio del proyecto: cd web-scraping-tool
3. Instala Node.js si aún no lo tienes instalado (https://nodejs.org)
4. Instala las dependencias: npm install
5. Compila los estilos de Tailwind CSS: npx tailwindcss -i ./src/input.css -o ./dist/output.css
6. Abre el archivo `src/index.html` en tu navegador web para usar la herramienta.

## Desarrollo
Para recompilar los estilos de Tailwind CSS automáticamente mientras desarrollas, ejecuta: npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch.

Esto vigilará los cambios en tus archivos y recompilará los estilos automáticamente.

## Uso
1. Abre el archivo `index.html` en tu navegador web.
2. Ingresa la URL del sitio web que deseas scrapear.
3. Ingresa la expresión XPath para los elementos que quieres extraer.
4. Haz clic en "Realizar Scraping" para ver los resultados.

### Ejemplos de uso:
1. Para obtener imágenes de coches en Marca:
   - URL: `https://www.marca.com/coches-y-motos/coches.html?intcmp=MENUPROD&s_kw=coches`
   - XPath: `//img`

2. Para obtener enlaces de noticias de coches en Marca:
   - URL: `https://www.marca.com/coches-y-motos/coches.html?intcmp=MENUPROD&s_kw=coches`
   - XPath: `//ul[@id='marca']//a`

3. Para obtener todos los nombres de meta tags:
   - URL: `https://es.wikipedia.org/wiki/JavaScript`
   - XPath: `//meta/@name`

4. Para obtener títulos de productos de JD Sports:
   - URL: `https://www.jdsports.es/marca/adidas/`
   - XPath: `//span[@class='itemTitle']`

5. Para obtener el contenido del generador de meta tags:
   - URL: `https://es.wikipedia.org/wiki/JavaScript`
   - XPath: `//meta[@name='generator']/@content`
  
## Estructura del Proyecto
- `src/index.html`: Archivo HTML principal
- `src/script.js`: Lógica de JavaScript para el scraping
- `src/input.css`: Archivo de entrada para Tailwind CSS
- `dist/output.css`: Archivo CSS compilado por Tailwind
- `tailwind.config.js`: Configuración de Tailwind CSS

## Manejo de Errores
La herramienta incluye manejo de errores para:
- URLs inválidas
- XPaths que no encuentran resultados
- Errores de red o del servidor

Los errores se muestran de manera amigable en la interfaz de usuario.

## Asincronía
La herramienta utiliza `fetch()` y `async/await` para realizar solicitudes HTTP de forma asíncrona, asegurando que la interfaz de usuario permanezca responsiva durante el proceso de scraping.

## Notas Adicionales
Este proyecto fue desarrollado como parte de una tarea. El objetivo principal era implementar una herramienta de web scraping utilizando XPath y diseñar una interfaz de usuario con Tailwind CSS.
