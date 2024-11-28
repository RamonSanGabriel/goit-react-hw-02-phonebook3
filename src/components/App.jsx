import { useForm } from 'react-hook-form';
import Header from './Header/Header';

let renderCount = 0;

const App = () => {
  renderCount++;

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
  });
  // Import the userForm hook

  const onSubmit = data => {
    console.log(data);
  };

  // console.log(errors);
  const form = watch();
  return (
    <div>
      <Header renderCount={renderCount} />
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          First name
          <input
            {...register('firstName', { required: 'This is required' })}
            id="firstName"
            title=""
          />
          <p>{errors.firstName?.message}</p>
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            {...register('lastName', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            })}
            id="lastName"
            title=""
          />
          <p>{errors.lastName?.message}</p>
        </label>

        <input type="submit" />
        <p>{form}</p>
      </form>
    </div>
  );
};
export default App;
