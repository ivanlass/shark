


function ProgressBar({width}) {
  return (
      <div className="progress-bar-wrapper">
    <div className="outer-progress">
        <div 
        className={width === 100 ? "inner-progress full": "inner-progress not-full"}
        style={{width:`${width}%`}}
        >
        </div>
    </div>
            <p>{width}</p>
            <p className="progress-max-num">100</p>

</div>
  );
}

export default ProgressBar;
