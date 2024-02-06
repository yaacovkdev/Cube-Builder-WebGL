const express = require('express');
var path = require('path');

const app = express();
const PORT = 3000;

var staticPath = path.join(__dirname, 'src/');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'CubeBuilder.html'));
});

app.listen(PORT, function() {
    console.log(`Server started at http://localhost:${PORT}`);
});