import './App.css';
import { useState } from 'react';

import Input from './components/Input';
import DropZoneViews from './components/DropZoneViews';
import image from './img/image.jpg';
import ImagePreview from './components/ImagePreview';

function App() {
  const [pictureSrc, setPictureSrc] = useState(image);
  const [totalBytes, setTotalBytes] = useState(null);
  const [loadBytes, setLoadBytes] = useState(null);
  return (
    <div className="App">
      <Input
        setPictureSrc={setPictureSrc}
        setLoadBytes={setLoadBytes}
        setTotalBytes={setTotalBytes}
      />
      <DropZoneViews
        setPictureSrc={setPictureSrc}
        setLoadBytes={setLoadBytes}
        setTotalBytes={setTotalBytes}
      />
      <ImagePreview
        imageSrc={pictureSrc}
        loadBytes={loadBytes}
        totalBytes={totalBytes}
      />
    </div>
  );
}

export default App;
