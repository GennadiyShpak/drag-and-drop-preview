import { useState, useEffect } from 'react';

import s from './DropZoneViews.module.css';
import useFileReader from '../../hooks/useFileReader';

function DropZoneViews({ setPictureSrc, setLoadBytes, setTotalBytes }) {
  const [hightLight, setHightLight] = useState(false);
  const [file, setFile] = useState(null);
  const dropZoneImageHandler = useFileReader(file);
  useEffect(() => {
    if (!file) {
      return;
    }
    setPictureSrc(dropZoneImageHandler.imageSrc);
  }, [dropZoneImageHandler.imageSrc, file, setPictureSrc]);

  useEffect(() => {
    setLoadBytes(dropZoneImageHandler.load);
  }, [dropZoneImageHandler.load, setLoadBytes, setTotalBytes]);

  useEffect(() => {
    setTotalBytes(dropZoneImageHandler.total);
  }, [dropZoneImageHandler.total, setTotalBytes]);

  function onDragEnterHandler(e) {
    setHightLight(true);
  }

  function onDragLeaveHandler(e) {
    setHightLight(false);
  }

  function onDragOverHandler(e) {
    e.preventDefault();
  }

  function onDropHandler(e) {
    e.preventDefault();
    if (e.target.dataset.mark === 'dropZone') {
      const { files } = e.dataTransfer;
      setFile(files[0]);
      setHightLight(false);
    }
  }
  return (
    <>
      <div
        className={`${s.dropZone} ${hightLight ? s.hightLight : ''}`}
        data-mark="dropZone"
        onDragEnter={onDragEnterHandler}
        onDragLeave={onDragLeaveHandler}
        onDragOver={onDragOverHandler}
        onDrop={onDropHandler}
      >
        <p>Drop file here</p>
      </div>
    </>
  );
}
export default DropZoneViews;
