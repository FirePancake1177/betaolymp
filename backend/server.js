import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import mongodb from "mongodb";


const app = express()
const CONNECTION = "mongodb+srv://Anton:Batel_xom102@cluster0.rbibx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new mongodb.MongoClient(CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true});

const router = express.Router()
router.get("/", async (req, res) => {
  try {
    await client.connect(function (err, client) {
      const db = client.db("Universities")
      const collection = db.collection("demo")
      collection.find({}).toArray(function (err, result) {
        if (err) throw err
        res.set({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        });
        res.status(200).json(result)
      })
    })
  } catch (e) {
    res.status(404).json({message: e.message})
  }
})


app.use("/posts", router)

app.use(bodyParser.json())
app.use(cors())


const PORT = 5000

mongoose.connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  app.listen(PORT, () => console.log(`Server runs on port ${PORT}`))
})
  .catch((err) => console.log(err.message))

mongoose.set("useFindAndModify", false)
