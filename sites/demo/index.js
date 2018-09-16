const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Node js response')
})

app.listen(8000, () => console.log('App is running on 4000'))