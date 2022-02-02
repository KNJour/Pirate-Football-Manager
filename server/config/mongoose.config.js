// bring in mongoose
const mongoose = require('mongoose');

//database connection

mongoose.connect("mongodb://localhost/piratecrew", {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log("mongoose CONNECTED"))
    .catch(err => console.log("mongoose NOT connected", err))