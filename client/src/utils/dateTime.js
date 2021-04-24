function formatDateTime(date) {
    return date?.replace(/T/g, " ").replace(/Z/, "") ?? null;
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

function finalFormatDateTime(dateTime){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    // yyyy-MM-dd hh:mm -> dd MM yyyy
    const [date, time] = dateTime?.split(" ") || ["", ""];
    let arr = date.split("-");
    arr.reverse();
    arr[1] = months[parseInt(arr[1])-1];
    const currentDate = new Date()
    arr[2] = arr[2] == currentDate.getFullYear() ? undefined : arr[2];
    return arr?.join(" ").trim()+ ", " + time;
}
export {formatDateTime, getDateTimeValue, abbreviateSecondDateTimeInInterval, finalFormatDateTime}