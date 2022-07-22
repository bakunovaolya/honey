
import './App.css';
import Header from "./modules/header/header";
import {navList} from "./modules/header/config";
import NavBar from "./modules/content/navBar";
import Basket from "./modules/content/navBarList/basket/basket";
import {useState} from "react";
import Footer from "./modules/footer/Footer";
function App() {
   const [isCartOpen, setCartOpen] = useState(false);
  return (
    <div className="App">

      <Header navList={navList}
       handleCart={() => setCartOpen(true)} className='header'
      />
        <NavBar className='navBar'/>
             <Basket
            cartOpen={isCartOpen}
            closeCart={() => setCartOpen(false)}
        />
        <Footer className='footer'/>

    </div>
  );
}

export default App;
