const CMEImpactFile = require("./cmeImpact");

class CME {
    constructor(cmeData) {
        this.startTime = cmeData.startTime;
        // console.log("-------------------------");
        // console.log(cmeData);
        this.latitude = cmeData.cmeAnalyses[0].latitude;
        this.longitude = cmeData.cmeAnalyses[0].longitude;

        this.note = cmeData.note;

        this.halfAngle = cmeData.cmeAnalyses[0].halfAngle;
        this.speed = cmeData.cmeAnalyses[0].speed;

        this.type = cmeData.cmeAnalyses[0].type;

        this.analysisNote = cmeData.cmeAnalyses[0].note;

        this.isEarthGB = cmeData.cmeAnalyses[0].enlilList[0].isEarthGB;
        this.impactList = cmeData.cmeAnalyses[0].enlilList[0].impactList.map(obj => {
            return new CMEImpactFile.CMEImpact(
                obj.isGlancingBlow,
                obj.location,
                obj.arrivalTime
                );
        });
    }
}

module.exports.CME = CME;