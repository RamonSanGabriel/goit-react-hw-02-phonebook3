import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import css from './YouTubeForm.module.css';
import SubmitBtn from 'components/Buttons/SubmitBtn/SubmitBtn';

let renderCounter = 0;

const YouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      channel: '',
      // number: [{ number: '' }],
      age: 0,
      dob: new Date(),
      phoneNumbers: ['', ''],
      phNumbers: {
        number: '',
      },
    },
  });
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, touchedFields, dirtyFields, isDirty, isValid },
  } = form;

  console.log({ touchedFields, dirtyFields, isDirty, isValid });

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

  const handleGetValues = () => {
    console.log('Get values', getValues('username'));
  };
  const handleSetValues = () => {
    setValue('username', '', {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const onSubmit = data => console.log('Form submitted', data);
  const watchUsername = watch('username');
  const onError = errors => {
    console.log('Error', errors);
  };

  renderCounter++;

  return (
    <div>
      <div>
        <div className={css.container}>
          <h2>RenderCount: {renderCounter / 2}</h2>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
              <span>{watchUsername}</span>
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
            <div className={css.formControl}>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                autoComplete="off"
                placeholder="Enter your age"
                {...register('age', {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: 'Age is required*',
                  },
                  disabled: watch('channel') === '',
                })}
              />
              <p className={css.errors}>{errors.age?.message}</p>
            </div>
            <div className={css.formControl}>
              <label htmlFor="date">Date of birth</label>
              <input
                type="date"
                id="date"
                autoComplete="off"
                placeholder="Enter your date of birth"
                {...register('date', {
                  valueAsDate: true,
                  required: {
                    value: true,
                    message: 'Date of birth is required*',
                  },
                })}
              />
              <p className={css.errors}>{errors.date?.message}</p>
            </div>
            {/* List of phone numbers with delete button if more than 1 number */}
            <div className={css.formControl}>
              <label htmlFor="phone">List of phone numbers</label>
              <>
                {fields.map((field, index) => {
                  return (
                    <div className={css.formControl} key={field.id}>
                      <input
                        type="text"
                        id="phone"
                        autoComplete="off"
                        placeholder="Enter your phone number"
                        {...register(`phoneNumbers.${index}.number`, {
                          valueAsNumber: true,
                          required: {
                            value: true,
                            message: 'Phone number is required*',
                          },
                        })}
                      />
                      {/* Show delete button */}
                      {index > 0 && (
                        <button
                          className={css.deleteBtn}
                          type="button"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* Add button */}
                <button
                  className={css.formBtnAdd}
                  type="button"
                  onClick={() => append({ number: '' })}
                >
                  Add phone number
                </button>
              </>
            </div>

            <div style={{ textAlign: 'left' }}>
              {/* Get Value Button */}
              <button
                className={css.getValuesBtn}
                type="button"
                onClick={handleGetValues}
              >
                Get Values
              </button>

              {/* Set Value Button */}
              <button
                className={css.setValuesBtn}
                type="button"
                onClick={handleSetValues}
              >
                Set Values
              </button>

              <SubmitBtn isValid={isValid} isDirty={isDirty} />
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default YouTubeForm;
