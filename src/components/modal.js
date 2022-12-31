import React, { lazy, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../stylesheets/modal.css"
function ModalBox(props) {
  const { file, fileType, fileName, show, onClose } = props;
  const decideFileType = (type) => {

    if (type == "image") {
      return (
        <center>
          {/* <a href={file} download> */}
            <img src={file} width="104" height="142" />
          {/* </a> */}
        </center>
      );
    }
    if (type == "video") {
      return (
        <center>
          <video width="750" height="500" controls>
            <source src={file} type="video/mp4" />
          </video>
        </center>
      );
    }
  };
  return (
    <>
      <Modal show={show} onHide={() => onClose()}>
        <Modal.Header closeButton>{fileName}</Modal.Header>
        <Modal.Body>{decideFileType(fileType.split('/')[0])}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onClose()}>Close</Button>
          <a href={file} download><Button>Download</Button></a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
