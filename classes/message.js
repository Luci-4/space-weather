class Message {
    constructor(messageData){
        this.messageBody = messageData.messageBody;
        this.messageIssueTime = messageData.messageIssueTime;
        this.messageType = messageData.messageType;
        this.messageURL = messageData.messageURL;
    }
}

module.exports.Message = Message;