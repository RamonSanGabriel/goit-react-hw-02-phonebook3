import { myStyle } from 'data/submitBtnStyle';
import { useForm } from 'react-hook-form';
import css from './ReactForm.module.css';

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  }); // Import the userForm hook

  let counter = 0;

  const onSubmit = data => {
    // console.log(data);
    counter++;
  };

  // console.log(errors);
  const firstName = watch('firstName');

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={css.reactFormLabel} htmlFor="firstName">
          <p>Render: {counter++}</p>
          <h5>First name</h5>
          <input
            className={css.reactFormInput}
            {...register('firstName', {
              required: true,
              minLength: {
                value: 4,
                message: 'Must be 4 characters or more',
              },
              maxLength: {
                value: 10,
                message: 'Must be 10 characters or less',
              },
            })}
            id="firstName"
            title=""
            type="text"
            placeholder="Enter your first name"
          />
          {errors.firstName && errors.firstName.type === 'required' && (
            <span>*This is required*</span>
          )}
          {errors.firstName && errors.firstName.type === 'maxLength' && (
            <span>*Max length exceeded*</span>
          )}
          {/* <p>{errors.firstName?.message}</p> */}
        </label>
        {/* Input lastName */}
        <label className={css.reactFormLabel} htmlFor="lastName">
          <h5>Last name</h5>
          <input
            className={css.reactFormInput}
            {...register('lastName', {
              required: true,
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            })}
            id="lastName"
            title=""
            type="text"
            placeholder="Enter your last name"
          />
          {errors.lastName && errors.lastName.type === 'required' && (
            <span>*This is required*</span>
          )}
          {errors.lastName && errors.lastName.type === 'minLength' && (
            <span>*Minimum of 4 characters*</span>
          )}
          {/* <p>{errors.lastName?.message}</p> */}
        </label>
        <p>{firstName}</p>
        {/* <input name="submit" id="submit" type="submit" value="submit" /> */}
        <div style={{ margin: '15px 0' }}>
          <button style={myStyle}>
            <input
              style={myStyle}
              type="submit"
              name="submit"
              id="submit"
              value="submit"
              // onSubmit={handleSubmit(onSubmit)}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactForm;
