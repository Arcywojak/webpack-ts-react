import React, {createContext, useEffect, useReducer} from 'react';
import {mindReducer} from '../reducers/mind.reducer';
import {LocalStorageService} from '../services/localStorage.service';
import {Mind, MindContextValue} from '../models/mind.models';

export const MindContext = createContext(new MindContextValue());

const MindContextProvider = ({children} : any) => {
    const localStorageService = new LocalStorageService('mind');
    const [minds, mindsDispatch] = useReducer(mindReducer, [], () => (localStorageService.getItems<Mind[]>() || []) )

    useEffect( () => {
        localStorageService.getItems();
    }, [minds]);

    return (
        <MindContext.Provider value = {{minds, mindsDispatch}}>
            {children}
        </MindContext.Provider>
    )

}

export default MindContextProvider;