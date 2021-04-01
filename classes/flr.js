class FLR {
    constructor(FLRData){
        this.activeRegionNum = FLRData.activeRegionNum;
        this.beginTime = FLRData.beginTime;
        this.endTime = FLRData.endTime;
        this.classType = FLRData.classType;
        this.class = FLRData.classType[0]; // letter A, B, C, M or X
        this.score = parseFloat(FLRData.classType.substring(1))
        console.log(this.classType, ":::", this.class, this.score)
        this.peakTime = FLRData.peakTime;
        this.sourceLocation = FLRData.sourceLocation;
    }
}

module.exports.FLR = FLR;