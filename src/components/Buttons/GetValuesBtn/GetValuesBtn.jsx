import css from './GetValuesBtn.module.css';
import { useForm } from 'react-hook-form';

const GetValuesBtn = () => {
  const form = useForm();
  const { getValues } = form;
  const handleGetValues = () => {
    console.log('Get values', getValues);
  };
  return <div></div>;
};

export default GetValuesBtn;
