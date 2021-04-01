function formatDateTime(date) {
    return date.replace(/T/g, " ").replace(/Z/, " UTC");
}


function getDateTimeValue(date){
    return (parseInt(date
        .replace(/-/g, "")
        .replace(/T/g, "")
        .replace(/Z/g, "")
        .replace(/:/g, "")
    ))
}
export {formatDateTime, getDateTimeValue}