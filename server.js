const exp=require('express')
const app=exp()

app.listen(3500,()=>{console.log('server started')})

const mclient=require('mongodb').MongoClient

const path=require('path')

app.use(exp.static(path.join(__dirname,'./build')))

mclient
.connect('mongodb://127.0.0.1:27017')
.then(dbref=>{
    const dbObj=dbref.db('cardsdb')
    const cardsCollectionObj=dbObj.collection('cardsCollection')
    app.set('cardsCollectionObj',cardsCollectionObj)
    console.log('db connected successfully')
})
.catch(err=>{
    console.log('error in connecting db',err)
})


app.use(exp.json())
app.post('/create-card',(req,res)=>{
    const cardsCollectionObj=req.app.get('cardsCollectionObj')
    const newCard=req.body
    cardsCollectionObj.insertOne(newCard)
    .then(dbres=>{
        res.status(201).send('card created')
    })
    .catch(err=>{console.log('err in inserting is',err)})
})

app.get('/get-card',(req,res)=>{
    const cardsCollectionObj=req.app.get('cardsCollectionObj')
    cardsCollectionObj.find().toArray()
    .then(cards=>{
        res.send(cards)
    })
})
