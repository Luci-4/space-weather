class FLR {
    constructor(FLRData){
        this.activeRegionNum = FLRData.activeRegionNum;
        this.beginTime = FLRData.beginTime;
        this.endTime = FLRData.endTime;
        this.classType = FLRData.classType;
        this.peakTime = FLRData.peakTime;
        this.sourceLocation = FLRData.sourceLocation;
    }
}

module.exports.FLR = FLR;