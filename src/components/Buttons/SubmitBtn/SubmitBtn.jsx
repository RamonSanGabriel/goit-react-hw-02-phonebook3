import css from './SubmitBtn.module.css';

const SubmitBtn = ({ isDirty, isValid, onSubmit }) => {
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
        // disabled={!isDirty || !isValid}
      >
        Submit
      </button>
      {/* </div> */}
    </>
  );
};

export default SubmitBtn;
