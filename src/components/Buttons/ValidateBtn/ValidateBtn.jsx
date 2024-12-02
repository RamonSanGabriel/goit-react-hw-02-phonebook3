import css from './Validate.module.css';

const ValidateBtn = ({ trigger }) => {
  return (
    <div>
      <div>
        <button
          className={css.submitBtn}
          type="button"
          onClick={() => trigger('channel')}
        >
          Validate
        </button>
      </div>
    </div>
  );
};

export default ValidateBtn;
