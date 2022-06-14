import { useContext } from 'react';
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Intro } from './components/Intro/Intro';
import { ProductList } from './components/productList/ProductList';
import { Toggle } from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode?"#222":"white" ,  color:darkMode &&"white"}} className="App">
     <Toggle/>
     <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
