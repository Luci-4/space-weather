class FLR {
    constructor(FLRData){
        this.typeName = "Solar FLare";
        this.activeRegionNum = FLRData?.activeRegionNum ?? null;
        this.beginTime = FLRData?.beginTime ?? null;
        this.endTime = FLRData?.endTime ?? null;
        this.classType = FLRData?.classType ?? null;
        this.class = FLRData?.classType?.[0] ?? null; // letter A, B, C, M or X
        this.score = parseFloat(FLRData?.classType?.substring(1)) ?? null
        this.peakTime = FLRData?.peakTime ?? null;
        this.sourceLocation = FLRData?.sourceLocation ?? null;
    }
}

module.exports.FLR = FLR;