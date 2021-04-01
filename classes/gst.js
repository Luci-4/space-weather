const gstKpIndexFile = require("./gstKpIndex");

class GST {
    constructor(gstData) {
        this.startTime = gstData.startTime;
        this.kpIndices = gstData.allKpIndex.map((obj, index) => {
            let uniqueId = gstData.gstID + `${index}`;
            return new gstKpIndexFile.GSTKpIndex(
                uniqueId,
                obj.observedTime,
                obj.kpIndex,
                obj.source
                );
        });

    }
}

module.exports.GST = GST;