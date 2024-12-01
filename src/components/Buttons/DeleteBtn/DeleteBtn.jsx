import css from './DeleteBtn.module.css';

const DeleteBtn = ({ remove, index }) => {
  return (
    <div>
      {index > 0 && (
        <button
          className={css.deleteBtn}
          type="button"
          onClick={() => remove(index)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default DeleteBtn;
