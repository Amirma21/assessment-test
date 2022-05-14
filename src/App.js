
import './App.css';
import CountProvider from './components/Context/CountProvider';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <>
      <CountProvider>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </CountProvider>
    </>
  );
}

export default App;
