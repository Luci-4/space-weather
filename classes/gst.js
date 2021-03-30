const gstKpIndexFile = require("./gstKpIndex");

class GST {
    constructor(gstData) {
        this.startTime = gstData.startTime;
        this.kpIndices = gstData.allKpIndex.map(obj => {
            return new gstKpIndexFile.GSTKpIndex(
                obj.observedTime,
                obj.kpIndex,
                obj.source
                );
        });

    }
}

module.exports.GST = GST;