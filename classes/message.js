const messageBodyFile = require("./messageBody");

class Message {
    constructor(messageData){
        this.id = messageData.messageID;
        this.messageBody = new messageBodyFile.MessageBody(messageData.messageBody);
        this.messageIssueTime = messageData.messageIssueTime;
        this.messageType = messageData.messageType;
        this.messageURL = messageData.messageURL;
    }
}

module.exports.Message = Message;