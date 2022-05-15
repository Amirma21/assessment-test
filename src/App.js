
import './App.css';
import CountProvider from './components/Context/CountProvider';
import Body from '../src/components/Layout/Body/Body';
import Footer from '../src/components/Layout/Footer/Footer';
import Header from '../src/components/Layout/Header/Header';

function App() {
  return (
    <>
      <CountProvider>
        <Header/>
        <Body/>
        <Footer/>
     
      </CountProvider>
    </>
  );
}

export default App;
