import ProgressBar from '../ProgressBar';

const ImagePreview = ({ imageSrc, totalBytes, loadBytes }) => {
  return (
    <>
      <div>
        <img src={imageSrc} width="300" alt="random img" />
      </div>
      <div>
        {loadBytes && (
          <ProgressBar totalBytes={totalBytes} loadBytes={loadBytes} />
        )}
      </div>
    </>
  );
};
export default ImagePreview;
