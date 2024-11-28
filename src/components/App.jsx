import Header from './Header/Header';
import { LoginForm } from './LoginForm/LoginForm';
import ReactForm from './ReactForm/ReactForm';

const App = () => {
  return (
    <div>
      <Header />
      <h1>React Forms</h1>
      <ReactForm />
      {/* <LoginForm /> */}
    </div>
  );
};
export default App;
