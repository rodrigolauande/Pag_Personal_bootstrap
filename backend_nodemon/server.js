const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true}))

app.post("/users", (req, resp) => {
    console.log(req.body)
    resp.redirect('http://192.168.0.16:8080/#/paginas/inscricao.html')
})

app.listen(8081, () => {
    console.log('Backend execultando...')
})
