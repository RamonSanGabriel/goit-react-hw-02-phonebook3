import { myStyle } from 'data/submitBtnStyle';
import { useForm } from 'react-hook-form';

import css from './SubmitBtn.module.css';
import { useState } from 'react';

const SubmitBtn = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  let counter = 0;
  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
    setResult('');
    // counter++;
  };
  return (
    <div>
      <div style={{ margin: '15px 0' }}>
        <input
          className={css.submitBtn}
          // style={myStyle}
          type="submit"
          value={value}
          onSubmit={handleChange}
        >
          <button type="submit">Submit</button>
        </input>
      </div>
      <p>Counter: {result}</p>
    </div>
  );
};

export default SubmitBtn;
