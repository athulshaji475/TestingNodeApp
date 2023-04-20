const express = require('express')
const app = express()
const token = '878yiyujgbhjvj'
const service = require('./services')

app.use(express.json())

app.get('/hello/:exp', async (req, res) => {
    let experssion = req.params.exp
    const result = await service.calaulation(experssion)
    console.log(result);
    res.status(result.statusCode).json(result.result)
})

app.listen(5000, () => {
    console.log(`server started at port ${5000}`);
})