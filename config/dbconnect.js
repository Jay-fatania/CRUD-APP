const mongoose = require('mongoose')

let dbconnect = async () => {
const middleware = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
mongoose.connect(process.env.DB_URL, middleware, {})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connected.!!')
})
} 
module.exports = {dbconnect}