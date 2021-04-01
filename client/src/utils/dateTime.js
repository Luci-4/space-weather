function formatDateTime(date) {
    return date.replace(/T/g, " ").replace(/Z/, "");
}


function getDateTimeValue(date){
    return (parseInt(date
        .replace(/-/g, "")
        .replace(/T/g, "")
        .replace(/Z/g, "")
        .replace(/:/g, "")
    ))
}

function abbreviateSecondDateTimeInInterval(dateTime1, dateTime2){
    // date: String in format 'yyyy-MM-dd hh:mm'
    let [date1, time1] = dateTime1.split(" ");
    let [date2, time2] = dateTime2.split(" ");
    if (date1 === date2){
        return time2;

    }
    return dateTime2;
}
export {formatDateTime, getDateTimeValue, abbreviateSecondDateTimeInInterval}