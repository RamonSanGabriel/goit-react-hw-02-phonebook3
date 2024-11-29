import { useForm } from 'react-hook-form';

import css from './SubmitBtn.module.css';
import { useState } from 'react';

let counter = 0;
const SubmitBtn = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
    setResult('');
    // counter++;
  };
  const onSubmit = data => console.log('Form submitted', data);
  return (
    <div>
      <div style={{ margin: '15px 0' }}>
        <button className={css.submitBtn} onClick={onSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitBtn;
