import { useForm, useFieldArray } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
import css from './YouTubeForm.module.css';
import SubmitBtn from 'components/Buttons/SubmitBtn/SubmitBtn';
import GetValueBtn from 'components/Buttons/GetValueBtn/GetValueBtn';
import SetValuesBtn from 'components/Buttons/SetValuesBtn/SetValuesBtn';
import AddBtn from 'components/Buttons/AddBtn/AddBtn';
import DeleteBtn from 'components/Buttons/DeleteBtn/DeleteBtn';
import ResetBtn from 'components/Buttons/ResetBtn/ResetBtn';
import { useEffect } from 'react';
import ValidateBtn from 'components/Buttons/ValidateBtn/ValidateBtn';

let renderCounter = 0;

const YouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: 'Superman',
      email: '',
      channel: '',
      // number: [{ number: '' }],
      age: 0,
      dob: new Date(),
      phoneNumbers: ['', ''],
      phNumbers: [
        {
          number: '',
        },
      ],
    },
    mode: 'onSubmit',
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
    formState: {
      errors,
      // touchedFields,
      // dirtyFields,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
    },
  } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // console.log({ touchedFields, dirtyFields, isDirty, isValid });
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

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
    <>
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
                      'This domain is not supported*'
                    );
                  },
                  emailAvailable: async fieldValue => {
                    const response = await fetch(
                      `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                    );
                    const data = await response.json();
                    return data.length === 0 || 'Email is already taken*';
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

          {/* Phone number input */}
          <div className={css.formControl}>
            <label htmlFor="primaryPhone">Primary number</label>
            <input
              type="text"
              id="primaryPhone"
              autoComplete="off"
              placeholder="Enter your primary number"
              {...register('phoneNumbers.0', {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: 'Phone number is required*',
                },
              })}
            />
            <p className={css.errors}>{errors.primaryPhone?.message}</p>
          </div>
          {/* List of phone numbers with delete button if more than 1 number */}
          <div className={css.formControl}>
            <label htmlFor="phone">Additional phone numbers</label>
            <>
              {fields.map((field, index) => {
                return (
                  <div className={css.formControl} key={field.id}>
                    <input
                      type="text"
                      id="phone"
                      autoComplete="off"
                      placeholder="Enter your alternate number"
                      {...register(`phNumbers.${index}.number`, {
                        valueAsNumber: true,
                        required: {
                          value: true,
                          message: 'Phone number is required*',
                        },
                      })}
                    />
                    {/* Show delete button */}
                    <DeleteBtn remove={remove} index={index} />
                  </div>
                );
              })}

              {/* Add button */}
              <AddBtn append={append} />
            </>
          </div>

          <div className={css.containerBtn}>
            {/* Get Value Button */}
            <GetValueBtn handleGetValues={handleGetValues} />

            {/* Set Value Button */}
            <SetValuesBtn handleSetValues={handleSetValues} />

            {/* Submit Button */}
            <SubmitBtn
              isDirty={isDirty}
              isValid={isValid}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              errors={onError}
            />
            <ResetBtn reset={reset} />
            <ValidateBtn trigger={trigger} />
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </>
  );
};

export default YouTubeForm;
