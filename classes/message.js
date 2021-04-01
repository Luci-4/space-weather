const messageBodyFile = require("./messageBody");

class Message {
    constructor(messageData){
        this.id = messageData.messageID;
        this.messageBody = new messageBodyFile.MessageBody(messageData.messageBody);
        this.messageIssueTime = messageData.messageIssueTime;
        console.log(this.messageIssueTime)
        this.dateTimeValue = parseInt(this.messageIssueTime
            .replace(/-/g, "")
            .replace(/T/g, "")
            .replace(/Z/g, "")
            .replace(/:/g, "")
        )
        console.log(this.dateTimeValue)
        this.messageType = messageData.messageType;
        this.messageURL = messageData.messageURL;
    }
}

module.exports.Message = Message;