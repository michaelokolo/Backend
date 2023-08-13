import express from 'express'

const app = express()
const port = 3000

app.get('/', (req,res)=>{
    const today = new Date()
    const day = today.getDay()
    console.log(day)
    res.render("index.ejs", 
    {dayType:day === 0 || 6 ? "a weekend": "a weekday", 
    advice:day === 0 || 6 ? "it's time to have some fun": "it's time to work hard"})
})

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
})