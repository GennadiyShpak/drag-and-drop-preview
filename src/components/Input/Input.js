import { useState, useEffect } from 'react';
import useFileReader from '../../hooks/useFileReader';

function Input({ setPictureSrc, setLoadBytes, setTotalBytes }) {
  const [file, setFile] = useState(null);
  const inputImageHandler = useFileReader(file);
  useEffect(() => {
    if (!file) {
      return;
    }
    setPictureSrc(inputImageHandler.imageSrc);
  }, [file, inputImageHandler.imageSrc, setPictureSrc]);

  useEffect(() => {
    setLoadBytes(inputImageHandler.load);
  }, [inputImageHandler.load, setLoadBytes]);

  useEffect(() => {
    setTotalBytes(inputImageHandler.total);
  }, [inputImageHandler.total, setTotalBytes]);

  const onChangeHandler = ({ target }) => {
    setFile(target.files[0]);
  };
  return (
    <>
      <input type="file" onChange={onChangeHandler} />
    </>
  );
}

export default Input;
