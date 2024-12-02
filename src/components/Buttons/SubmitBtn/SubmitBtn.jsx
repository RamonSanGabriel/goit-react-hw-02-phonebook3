import css from './SubmitBtn.module.css';

const SubmitBtn = ({ isDirty, isValid, onSubmit, isSubmitting }) => {
  return (
    <>
      <button
        className={css.submitBtn}
        onClick={onSubmit}
        // disabled={!isDirty || isSubmitting}
      >
        Submit
      </button>
    </>
  );
};

export default SubmitBtn;
