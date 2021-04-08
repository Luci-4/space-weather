const CMEImpactFile = require("./cmeImpact");

class CME {
    constructor(cmeData) {
        this.typeName = "Coronal Mass Ejection";
        this.startTime = cmeData?.startTime ?? null;
        this.note = cmeData?.note ?? null;
        const analysis = cmeData?.cmeAnalyses?.[0] ?? null;

        this.latitude = analysis?.latitude ?? null;
        this.longitude = analysis?.longitude ?? null;
        this.halfAngle = analysis?.halfAngle ?? null;
        this.speed = analysis?.speed ?? null;

        this.type = analysis?.type ?? null;

        this.analysisNote = analysis?.note ?? null;
        
        const enlil = analysis?.enlilList?.[0] ?? null;
        this.isEarthGB = enlil?.isEarthGB ?? null;
            
            
        this.impactList = enlil?.impactList?.map(obj => {
    
            return new CMEImpactFile.CMEImpact(
            obj.isGlancingBlow,
            obj.location,
            obj.arrivalTime
            );
        }) ?? null;
       
    }
}

module.exports.CME = CME;