import { createContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = (props) => {

    const [compCards, setCompCards] = useState([]);

    return (
        <CompareContext.Provider value={[compCards, setCompCards]}>
            {props.children}
        </CompareContext.Provider>
    );
}