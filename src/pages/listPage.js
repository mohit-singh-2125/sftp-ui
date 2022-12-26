import React, { lazy, useEffect, useState } from "react";
import FileExplorer from "../components/list";
import consumeApi from "../utils/consumeApi";

const Files = () => {
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    if(paths.length==0){
      consumeApi("GET", "http://localhost:3001/list").then(({dirs})=>{
        setPaths(dirs);
        console.log("asddsaads",paths)
      })
    }
    console.log("Sdasdasads")
  }, []);

  return <FileExplorer path={paths} />;
};

export default Files;
