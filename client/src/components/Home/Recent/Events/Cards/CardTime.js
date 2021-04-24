import {formatDateTime, finalFormatDateTime} from "../../../../../utils/dateTime";

function CardTime({time}){
    return (
        <p className="card-time">{
            (unformatedTime => {
                return unformatedTime ? `${finalFormatDateTime(formatDateTime(unformatedTime))} UTC` : "";
            })(time)
        }</p>
    );
}

export default CardTime;