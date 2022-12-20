import Header from './templates/Header';
import Footer from './templates/Footer';
import Main from './templates/Main';
import { CompareProvider } from './contexts/CompareContext';
import { CartProvider } from './contexts/CartContext';
import { TypeProvider } from './contexts/TypeContext';

function App() {

    return (
        <TypeProvider>
            <CartProvider>
                <CompareProvider>
                    <div className="App">

                        <Header />

                        <Main />

                        <Footer />

                    </div>
                </CompareProvider>
            </CartProvider>
        </TypeProvider>
    );

}

export default App;
