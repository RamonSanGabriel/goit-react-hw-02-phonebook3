import css from './SubmitBtn.module.css';

const SubmitBtn = ({ isValid, isDirty }) => {
  const onSubmit = data => console.log('Form submitted', data);
  return (
    <>
      {/* <div style={{ margin: '15px 0' }}> */}
      <button
        disabled={!isDirty || isValid}
        className={css.submitBtn}
        onClick={onSubmit}
        type="submit"
      >
        Submit
      </button>
      {/* </div> */}
    </>
  );
};

export default SubmitBtn;
