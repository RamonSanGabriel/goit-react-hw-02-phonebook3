import css from './GetValuesBtn.module.css';

const GetValueBtn = ({ handleGetValues }) => {
  return (
    <div>
      <button
        className={css.getValuesBtn}
        type="button"
        onClick={handleGetValues}
      >
        Get Values
      </button>
    </div>
  );
};

export default GetValueBtn;
