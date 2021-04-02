const messageBodyFile = require("./messageBody");

class Message {
    constructor(messageData){
        this.id = messageData?.messageID ?? null;
        this.body = new messageBodyFile.MessageBody(messageData?.messageBody ?? "");
        this.issueTime = messageData?.messageIssueTime ?? null;
        
        this.type = messageData?.messageType ?? null;
        this.url = messageData?.messageURL ?? null;
    }
}

module.exports.Message = Message;