let mongoose = require('mongoose');

const server = 'cluster0-hm3sr.gcp.mongodb.net';


mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb+srv://Yorick:Wc3K$jG6@cluster0-hm3sr.gcp.mongodb.net/Data?retryWrites=true&w=majority', { useNewUrlParser: true})
    .catch(error => console.log(error));

let ProductSchema = new mongoose.Schema({
    name: String,
    amount: Number, 
});

module.exports = mongoose.model('Product', ProductSchema);