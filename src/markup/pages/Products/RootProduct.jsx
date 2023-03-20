import React from "react";
import { Link } from "react-router-dom";
const RootProduct = () => {
    const pathName = window?.location?.pathname;
    // get only the last part of the path
    const pathNameArray = pathName.split("/");
    const lastPartOfPath = pathNameArray[pathNameArray.length - 1];

  return <div>{lastPartOfPath}</div>;
};

export default RootProduct;
