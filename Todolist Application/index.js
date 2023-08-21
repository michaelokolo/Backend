import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
var tasks = []

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newitem)
    res.render("index.ejs", {tasks:tasks})
    
})

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
})