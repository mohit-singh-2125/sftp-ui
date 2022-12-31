import React, { lazy, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../stylesheets/modal.css"
function ModalBox(props) {
  const { file, fileType, show, onClose } = props;
  const decideFileType = (type) => {
    
    if (type == "image") {
      return (
        <>
          <a href={file} download>
            <img src={file} width="104" height="142" />
          </a>
        </>
      );
    }
    if (type == "video") {
      return (
        <>
          <video width="750" height="500" controls>
            <source src={file} type="video/mp4" />
          </video>
        </>
      );
    }
  };
  return (
    <>
      <Modal show={show} onHide={() => onClose()}>
        <Modal.Header closeButton>{file.split("/")[file.split("/").length-1]}</Modal.Header>
        <Modal.Body>{decideFileType(fileType.split('/')[0])}</Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => onClose()}>Close</Button>
          <Button onClick={() => this.handleModal()}>Save</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalBox;
