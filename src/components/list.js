import React, { lazy, useEffect, useState } from "react";
import FileBrowser, { Icons } from "react-keyed-file-browser";
import Moment from "moment";
import "../stylesheets/list.css";
import ff from "../../src";
const mount = document.querySelectorAll("div.demo-mount-grouped-thumbnails");

function FileExplorer(props) {
  console.log("Ddasdasdas", props);
  let { path } = props;
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    if (paths.length == 0) {
      setPaths(path);
      console.log("asddsaads", paths);
    }
  }, [props]);
 
  return <FileBrowser files={[...paths]} icons={Icons.FontAwesome(4)} />;
}

export default FileExplorer;
