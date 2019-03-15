import React from "react";

export default (fn, ...args) => React.useEffect(fn.apply(null, args), args);
