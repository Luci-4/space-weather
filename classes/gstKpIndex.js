class GSTKpIndex {
    constructor(
        id,
        observedTime,
        kpIndex,
        source
        ) {
            this.id = id;
            this.observedTime = observedTime;
            this.kpIndex = kpIndex;
            this.source = source;
        }
}

module.exports.GSTKpIndex = GSTKpIndex;