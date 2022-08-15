const express = require("express")
const app = express()
const path = require('path');
const router = express.Router();
const port = 5000

const staticPath = path.join(__dirname, "/views")

app.use(express.static(staticPath))

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get("/", router)

console.log(`Server berjalan pada http://localhost:${port}`)

app.listen(port)