const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://Anton:Batel_xom102@cluster0.rbibx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});
  try {
    await client.connect(function (err, client) {
      const db = client.db("Universities")
      const collection = db.collection("demo")
      collection.findOne({'Факультет': 'ФКН ПМИ ВШЭ'}, function (err, result) {
        if (err) throw err
        return (result)
      })
    })
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

export default main