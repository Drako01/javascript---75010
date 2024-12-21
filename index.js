import http from 'http';
import https from 'https';

const server = http.createServer((req, res) => {
    if (req.url === '/productos') {
        const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=Samsung';

        https.get(apiUrl, (apiRest) => {
            let data = '';

            apiRest.on('data', (chunk) => {
                data += chunk;
            })

            apiRest.on('end', () => {
                res.writeHead(200, { 'content-type': 'application/json' });

                res.end(data);
            })

        }).on('error', (err) => {
            res.writeHead(500, { 'content-type': 'application/json' });

            res.end('Error al obtener los datos');
        })
    } else {
        res.writeHead(404, { 'content-type': 'application/json' });

        res.end('Ruta no encontrada');
    }
});


server.listen(3000, () => {
    console.log('Servidor Escuchando en el http://localhost:3000');
});
