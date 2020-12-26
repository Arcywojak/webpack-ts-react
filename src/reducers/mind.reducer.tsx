import {mindActionTypes, Mind, MindAction} from '../models/mind.models';
import {LocalStorageService} from '../services/localStorage.service';

const localStorageService = new LocalStorageService('mind')

export const mindReducer = (state: Mind[], action: MindAction): Mind[] => {
        switch (action.type) {
            case mindActionTypes.AddMind:
                const newState = [
                    action.mind,
                    ...state
                ];
                localStorageService.setItems(newState);
                return  newState;
            case mindActionTypes.RemoveMind:
                return state;
        }
}