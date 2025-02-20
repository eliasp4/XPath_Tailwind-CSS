document.getElementById('scrapingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const xpath = document.getElementById('xpath').value;
    const resultsDiv = document.getElementById('results');
    const imagesDiv = document.getElementById('images');
    resultsDiv.innerHTML = '<p class="text-gray-600">Cargando...</p>';
    imagesDiv.innerHTML = '';
    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const result = document.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
        let node;
        const nodes = [];
        while (node = result.iterateNext()) {
            nodes.push(node);
        }
        if (nodes.length > 0) {
            // Verificar si los nodos contienen atributos src
            const hasImageSrc = nodes.some(node => node.src);
            if (hasImageSrc) {
                imagesDiv.innerHTML = '<h2 class="text-xl font-semibold mb-2">Imágenes:</h2>';
                nodes.forEach(node => {
                    if (node.src) {
                        const imgElement = document.createElement('img');
                        imgElement.src = node.src;
                        imgElement.alt = 'Scraped Image';
                        imgElement.className = 'scraped-image';
                        imagesDiv.appendChild(imgElement);
                    }
                });
                resultsDiv.innerHTML = ''; // Limpiar resultados de texto
            } else {
                resultsDiv.innerHTML = '<h2 class="text-xl font-semibold mb-2">Resultados:</h2>';
                const ul = document.createElement('ul');
                ul.className = 'list-disc pl-5';
                nodes.forEach(node => {
                    const li = document.createElement('li');
                    li.textContent = node.textContent;
                    li.className = 'mb-1';
                    ul.appendChild(li);
                });
                resultsDiv.appendChild(ul);
            }
        } else {
            resultsDiv.innerHTML = '<p class="text-red-500">No se encontraron resultados para el XPath proporcionado.</p>';
        }
    } catch (error) {
        resultsDiv.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
    }
});