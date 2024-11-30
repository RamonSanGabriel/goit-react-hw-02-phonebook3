import Footer from './Footer/Footer';
import YouTubeHeader from './Header/YouTubeHeader/YouTubeHeader';
import YouTubeForm from './YoutubeForm/YouTubeForm';

const App = () => {
  return (
    <div
      style={{
        padding: '20px 20px',
        // textAlign: 'center',
      }}
    >
      <YouTubeHeader />
      <YouTubeForm />
      <Footer />
    </div>
  );
};
export default App;
