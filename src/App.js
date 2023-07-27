import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import Main from './Main';
import Silabos from './Silabos';
import Faq from './Faq';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Silabos />
      <Faq />
      <RegistrationForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
