import css from './AddBtn.module.css';

const AddBtn = ({ append }) => {
  return (
    <div>
      <button
        className={css.addBtn}
        type="button"
        onClick={() => append({ number: '' })}
      >
        Add phone number
      </button>
    </div>
  );
};

export default AddBtn;
