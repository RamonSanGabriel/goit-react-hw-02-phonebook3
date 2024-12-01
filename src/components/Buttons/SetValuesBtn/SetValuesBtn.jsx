import css from './SetValuesBtn.module.css';

const SetValuesBtn = ({ handleSetValues }) => {
  return (
    <div>
      <button
        className={css.setValuesBtn}
        type="button"
        onClick={handleSetValues}
      >
        Set Values
      </button>
    </div>
  );
};

export default SetValuesBtn;
