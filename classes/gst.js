const gstKpIndexFile = require("./gstKpIndex");

class GST {
    constructor(gstData) {
        this.typeName = "Magnetic Geostorm";
        this.startTime = gstData?.startTime ?? null;
        this.kpIndices = gstData?.allKpIndex?.map((obj, index) => {
            let uniqueId = gstData?.gstID + `${index}`;
            return new gstKpIndexFile.GSTKpIndex(
                uniqueId,
                obj.observedTime,
                obj.kpIndex,
                obj.source
                );
        }) ?? null;

    }
}

module.exports.GST = GST;