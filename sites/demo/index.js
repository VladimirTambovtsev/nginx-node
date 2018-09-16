const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/test', (req, res) => {
	res.send('Node js response')
})

app.listen(8000, () => console.log('App is running on 192.168.0.66'))