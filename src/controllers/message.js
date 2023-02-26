// import model
const Message = require('../models/message');

const newMessage = (req, res, next) => {
    const newMessage = new Message({
        author: req.body.author,
        message: req.body.message
    })

    if (newMessage.message === "/clear"){
        Message.deleteMany({}, (err, data) => {
            return res.json(data);
        })
    }
    else {
        newMessage.save((err, data) => {
            if (err) return res.json({Error: err});
            return res.json(data);
        })
    }

}

const deleteAllMessages = (req, res, next) => {
    res.json({message: "DELETE messages"});
}

const getMessages = (req, res, next) => {
    Message.find({}, (err, data) => {
        if (err) return res.json({Error: err});
        return res.json(data);
    })
}

const getMessage = (req, res, next) => {
    res.json({message: "GET message"});
}

const deleteMessage = (req, res, next) => {
    res.json({message: "DELETE message"});
}

module.exports = {
    getMessages,
    newMessage,
    deleteAllMessages,
    getMessage,
    deleteMessage
}