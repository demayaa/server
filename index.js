const app = require('express');
const BodyParser = require('body-parser');

app.use(BodyParser.json())

app.get('*', (req,res)=>{
    res.send('server connect');
})

app.listen(3000)