export const LoginForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    const onSubmit = { login, password };
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username <input type="text" name="login" placeholder="type your name" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder=" at least 8 characters"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

/* ReactDOM.render(
  <LoginForm onSubmit={values => console.log(values)} />,
  document.getElementById('root')
); */
