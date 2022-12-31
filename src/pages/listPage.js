import React, { lazy, useEffect, useState } from "react";
import FileExplorer from "../components/list";
import ModalBox from "../components/modal";
import consumeApi from "../utils/consumeApi";

const Files = () => {
  const [paths, setPaths] = useState([]);
  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [fileType, setFileType] = useState('');
  useEffect(() => {
    if (paths.length == 0) {
      consumeApi("GET", "http://localhost:3001/list").then(({ dirs }) => {
        setPaths(dirs);
      });
    }
  }, []);
  const fetchFile = (filePath) => {
    consumeApi("POST", "http://localhost:3001/download", {}, { filePath },{},'blob').then(
      (response) => {
        const href = URL.createObjectURL(response)
        // window.open(href)
        setFile(href)
        setFileType(response.type)
        setShowModal(true)
        
        console.log("asddsaads", response.type);
      }
    );
  };

  return (
    <div id="main">
      <FileExplorer
        path={paths}
        onSelectFile={(filePath) => {
          fetchFile(filePath);
        }}
        file={file}
      />
      <ModalBox file={file} fileType={fileType} show={showModal} onClose={()=>{setShowModal(false)}}/>
    </div>
  );
};

export default Files;
