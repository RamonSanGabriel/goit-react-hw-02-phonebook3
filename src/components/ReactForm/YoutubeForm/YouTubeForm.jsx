import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import css from './YouTubeForm.module.css';

let renderCounter = 0;

/* type FormValues = {
  username: string,
  email: string,
  channel: String,
}; */

const YouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: 'Superman',
      email: '',
      channel: '',
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = data => console.log('Form submitted', data);

  renderCounter++;

  return (
    <div>
      <h2>RenderCount: {renderCounter / 2}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={css.formControl}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Enter username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required*',
              },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message: 'Invalid username*',
              },
            })}
          />
          <p className={css.errors}>{errors.username?.message}</p>
        </div>

        <div className={css.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email address"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required*',
              },
              pattern: {
                value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: 'Invalid email format*',
              },
              validate: {
                notAdmin: fieldValue => {
                  return (
                    fieldValue !== 'admin@example.com' ||
                    'Enter a different email address*'
                  );
                },
                notBlackListed: fieldValue => {
                  return (
                    !fieldValue.endsWith('baddomain.com') ||
                    'This domain is not support*'
                  );
                },
                /* validate: fieldValue => {
                return (
                  fieldValue !== 'admin@example.com' ||
                  'Enter a different email address*'
                ); */
              },
            })}
          />
          <p className={css.errors}>{errors.email?.message}</p>
        </div>

        <div className={css.formControl}>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            autoComplete="off"
            placeholder="Enter YouTube channel"
            {...register('channel', {
              required: {
                value: true,
                message: 'Channel is required*',
              },
            })}
          />
          <p className={css.errors}>{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
