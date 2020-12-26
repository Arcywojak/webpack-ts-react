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

            case mindActionTypes.UpdateItem:
                const updatedState = state.map(item => {
                    if (item.id === action.mind.id) {
                        return action.mind;
                    }
                    return item;
                });
                localStorageService.setItems(updatedState);
                return updatedState;

            case mindActionTypes.RemoveMind:
                return state;
        }
}