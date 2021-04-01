const messageBodyFile = require("./messageBody");

class Message {
    constructor(messageData){
        this.id = messageData.messageID;
        this.body = new messageBodyFile.MessageBody(messageData.messageBody);
        this.issueTime = messageData.messageIssueTime;
        
        this.type = messageData.messageType;
        this.url = messageData.messageURL;
    }
}

module.exports.Message = Message;