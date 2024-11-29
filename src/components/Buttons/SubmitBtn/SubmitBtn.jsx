import { myStyle } from 'data/submitBtnStyle';
import css from './SubmitBtn.module.css';

const SubmitBtn = () => {
  return (
    <div>
      <div style={{ margin: '15px 0' }}>
        <input
          className={css.submitBtn}
          // style={myStyle}
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          // onSubmit={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default SubmitBtn;
