require('dotenv').config()
const express = require('express')
const router = require('./router/router')
const connectDb = require('./db/connect')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 2000

/**they are same middelwares  */

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use('/uploads' , express.static(__dirname + 'uploads'))

const dirname = path.resolve();

/* they are some api routes */

app.use('/api' , router)

app.use(express.static(path.join(dirname, '/Frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(dirname, 'Frontend', 'dist', 'index.html'));
})

const start = async () =>{
    try { 
        // await connectDb('mongodb://127.0.0.1:27017/blogData')
        await connectDb(process.env.MDB_URL)
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
start()
