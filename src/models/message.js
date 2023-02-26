const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    author: String,
    message: String
});

// convert to model "Message"
const Message = mongoose.model('Message', MessageSchema);

// export for controller
module.exports = Message;