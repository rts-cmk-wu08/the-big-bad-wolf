import { createContext, useState, useEffect } from 'react';

export const CompareContext = createContext();

export const CompareProvider = (props) => {

    // Get the initial compare items from the local storage
    const initialCompCards = JSON.parse(localStorage.getItem('compCards')) || [];
    const [compCards, setCompCards] = useState(initialCompCards);

    // Save the compare items to the local storage every time it changes
    useEffect(() => {
        localStorage.setItem('compCards', JSON.stringify(compCards));
    }, [compCards]);

    return (
        <CompareContext.Provider value={[compCards, setCompCards]}>
            {props.children}
        </CompareContext.Provider>
    );
}
