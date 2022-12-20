import { createContext, useState, useEffect } from 'react';

export const TypeContext = createContext();

export const TypeProvider = (props) => {

    // Get the initial compare items from the local storage
    const [selectedType, setSelectedType] = useState([]);


    return (
        <TypeContext.Provider value={[selectedType, setSelectedType]}>
            {props.children}
        </TypeContext.Provider>
    );
}