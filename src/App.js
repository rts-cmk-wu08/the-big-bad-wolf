import Header from './templates/Header';
import Footer from './templates/Footer';
import Main from './templates/Main';
import { CompareProvider } from './contexts/CompareContext';

function App() {

    return (
        <CompareProvider>
            <div className="App">

                <Header />

                <Main />

                <Footer />

            </div>
        </CompareProvider>
        
    );

}

export default App;
