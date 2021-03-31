class MessageBody {
    constructor(messageBody){
        this.type = this.getMessageBodyPart("Message Type", messageBody);
        this.summary = this.getMessageBodyPart("Summary", messageBody);
    }

    getMessageBodyPart(title, messageBody) {
        let token = `## ${title}:`
        let startIndex = messageBody.indexOf(token);
        let endIndex = messageBody.indexOf("##", startIndex+2);
        return messageBody.slice(startIndex+token.length, endIndex).trim();
    }
}

exports.MessageBody = MessageBody;