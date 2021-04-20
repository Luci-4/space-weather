class MessageBody {
    constructor(messageBody){
        this.type = this.getMessageBodyPart("Message Type", messageBody);
        this.type = this.type.includes("Weekly Space Weather Summary Report for") ? this.type : this.type.substring(this.type.indexOf(" - ") + 3);
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