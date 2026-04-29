const mongoose = require('mongoose');

const URI = 'mongodb://Aleja:aleja2026@ac-pcc9sx8-shard-00-00.nkywhcr.mongodb.net:27017,ac-pcc9sx8-shard-00-01.nkywhcr.mongodb.net:27017,ac-pcc9sx8-shard-00-02.nkywhcr.mongodb.net:27017/?ssl=true&replicaSet=atlas-14bj2s-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(URI)
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;