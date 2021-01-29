import { useState, useEffect, useMemo } from 'react';

const useFileReader = file => {
  const [imageSrc, setImageSrc] = useState(null);
  const [load, setLoad] = useState(1);
  const [total, setTotal] = useState(null);

  const reader = useMemo(() => {
  return  new FileReader();
  }, []);

  reader.onloadstart = function () {};
  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
    }
  }, [file, reader]);
  reader.onprogress = function (e) {
    const { loaded, total } = e;
    setLoad(loaded);
    setTotal(total);
  };

  reader.onloadend = function () {
    setImageSrc(reader.result);
  };

  return { imageSrc, load, total };
};
export default useFileReader;
