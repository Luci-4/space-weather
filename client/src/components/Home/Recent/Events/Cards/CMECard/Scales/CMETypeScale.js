import React from "react";
import {CMETypes} from "./CMETypes";

function CMETypeScale({type}) {
    return (
      <p className="cme-type">{CMETypes?.[type]}</p>
    );

}

export default CMETypeScale;