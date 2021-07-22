const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/wellMonitor";

const optionsObj = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};

mongoose.connect(connectionString, optionsObj);

mongoose.connection.on('connected', () => {
    console.log('MONGODB IS CONNECTED');
});

mongoose.connection.on('disconnected', () => {
    console.log('MONGODB HAS DISCONNECTED');
});

mongoose.connection.on('error', (err) => {
    console.log('MONGODB ERROR:', err);
});

module.exports = {
    WellData: require('./WellData')
}




// mongodb+srv://nickennedy:<password>@sei-cluster-0.pluqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// https://well-monitor-api.herokuapp.com/