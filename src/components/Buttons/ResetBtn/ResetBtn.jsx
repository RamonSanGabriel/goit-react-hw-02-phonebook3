import css from './ResetBtn.module.css';

const ResetBtn = ({ reset }) => {
  return (
    <div>
      <button className={css.submitBtn} type="button" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default ResetBtn;
