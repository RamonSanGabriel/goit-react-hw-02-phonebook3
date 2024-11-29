import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCounter = 0;

const YouTubeForm = () => {
  const form = useForm({
    username: '',
    email: '',
    channel: '',
  });
  const { register, control, handleSubmit } = form;

  const onSubmit = data => console.log('Form submitted', data);

  renderCounter++;

  return (
    <div>
      <h2>RenderCount: {renderCounter / 2}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          {...register('username')}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          {...register('email')}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          autoComplete="off"
          {...register('channel')}
        />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
