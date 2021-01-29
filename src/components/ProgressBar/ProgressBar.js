import s from './ProgressBar.module.css';

const ProgressBar = ({ totalBytes, loadBytes }) => {
  let loadBar;
  totalBytes
    ? (loadBar = Math.trunc((loadBytes / totalBytes) * 100))
    : (loadBar = 0);
  console.log(totalBytes);
  console.log('l', loadBytes);
  return (
    <div className={s.wrapper}>
      <div className={s.containerStyles}>
        <div className={s.fillerStyles}>
          <span
            className={s.labelStyles}
            width={`${loadBar}%`}
          >{`${loadBar}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
