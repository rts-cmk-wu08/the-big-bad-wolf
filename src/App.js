import Header from './templates/Header';
import Footer from './templates/Footer';
import Main from './templates/Main';
import { CompareProvider } from './contexts/CompareContext';
import { CartProvider } from './contexts/CartContext';

function App() {

    return (
        
        <CartProvider>
            <CompareProvider>
                <div className="App">

                    <Header />

                    <Main />

                    <Footer />

                </div>
            </CompareProvider>
        </CartProvider>
        
    );

}

export default App;
