import React, {createContext, useEffect, useReducer} from 'react';
import {mindReducer} from '../reducers/mind.reducer';
import {LocalStorageService} from '../services/localStorage.service';
import {MindContextValue} from '../models/models';

export const MindContext = createContext({} as MindContextValue);

const MindContextProvider = ({children} : any) => {
    const localStorageService = new LocalStorageService('mind');
    const [mindPages, mindsDispatch] = useReducer(mindReducer, [], (): any => (localStorageService.getItems() || []) )

    useEffect( () => {
        localStorageService.getItems();
    }, [mindPages]);

    return (
        <MindContext.Provider value = {{mindPages, mindsDispatch}}>
            {children}
        </MindContext.Provider>
    )

}

export default MindContextProvider;