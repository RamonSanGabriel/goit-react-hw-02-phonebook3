import css from './SubmitBtn.module.css';

const SubmitBtn = ({ isDirty, isValid, onSubmit, isSubmitting }) => {
  /*   const isDirty = props.isDirty;
  const isValid = props.isValid; */

  // console.log(isDirty, isValid);
  // const isDisabled = !isDirty || isValid;

  return (
    <>
      {/* <div style={{ margin: '15px 0' }}> */}
      <button
        className={css.submitBtn}
        onClick={onSubmit}
        disabled={!isDirty || !isValid || isSubmitting}
      >
        Submit
      </button>
      {/* </div> */}
    </>
  );
};

export default SubmitBtn;
