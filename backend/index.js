const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.post('/convert', (req, res) => {
    const markdownText = req.body.markdown;
    const html = marked.parse(markdownText);
    res.send({ html });
});

app.listen(port, () => {
    console.log(`Server is running on port${port}`);
});
