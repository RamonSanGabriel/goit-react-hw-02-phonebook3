import { useForm } from 'react-hook-form';
import css from './ReactForm.module.css';
import SubmitBtn from 'components/Buttons/SubmitBtn/SubmitBtn';

let counter = 0;

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
      counter: '',
    },
  }); // Import the userForm hook

  const onSubmit = data => {
    // console.log(data);
    counter++;
  };

  /*  const handleSubmit = e => {
    e.preventDefault();
    alert('button is working');
    // counter++;
  }; */
  // console.log(errors);

  /* Display text from Input box first name */
  const firstName = watch('firstName');

  return (
    <div className={css.formDiv}>
      <div>
        <form className={css.reactForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.reactFormLabel} htmlFor="firstName">
            <p>Render: {counter}</p>
            {/* Input First name */}
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
                  value: 20,
                  message: 'Must be 20 characters or less',
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
              <span>*Max length of 10 exceeded*</span>
            )}
            {/* <p>{errors.firstName?.message}</p> */}
          </label>

          {/* Input Last name */}
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
                maxLength: {
                  value: 20,
                  message: 'Must be 20 characters or less',
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
            {errors.lastName && errors.lastName.type === 'maxLength' && (
              <span>*Max length of 10 exceeded*</span>
            )}
            {/* <p>{errors.lastName?.message}</p> */}
          </label>
          {/* Input email */}
          <h5>Email</h5>
          <div className={css.group}>
            <input
              className={css.reactFormInput}
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && errors.email.message}
          </div>
          <p>{firstName}</p>
          {/* <input name="submit" id="submit" type="submit" value="submit" /> */}
          <SubmitBtn />
          {/* <div style={{ margin: '15px 0' }}>
            <input
              className={css.submitBtn}
              // style={myStyle}
              type="submit"
              onSubmit={handleSubmit}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ReactForm;
