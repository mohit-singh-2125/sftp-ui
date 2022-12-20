import React, { lazy, useEffect, useState } from "react";
import FileExplorer from "../components/list";
import consumeApi from "../utils/consumeApi";

const Files = () => {
  const [paths, setPaths] = useState([]);
  useEffect(async () => {
    let { dirs } = await consumeApi("GET", "http://localhost:3001/list");
    setPaths(dirs);
  }, []);
  return <FileExplorer path={paths} />;
};

export default Files;
