import React, { useEffect, useState } from "react";
import FileBrowser, { Icons } from "react-keyed-file-browser";
import "../stylesheets/list.css";

function FileExplorer(props) {
  const { path, onSelectFile } = props;
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    if (paths.length == 0) {
      setPaths(path);
    }
  }, [props]);

  const readFile = (filePath) => {
    onSelectFile(filePath.key);
  };

  return (
    <>
      <FileBrowser
        files={[...paths]}
        icons={Icons.FontAwesome(4)}
        onSelectFile={(e) => {
          readFile(e);
        }}
      />
    </>
  );
}

export default FileExplorer;
