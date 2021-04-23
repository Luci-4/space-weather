import React from "react";
import {CMETypes} from "./CMETypes";

function CMETypeScale({type}) {
    return (
      <p>{CMETypes?.[type]}</p>
    );

}

export default CMETypeScale;