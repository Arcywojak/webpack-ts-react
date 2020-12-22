import {mindActionTypes, Mind, MindAction} from '../models/mind.models';

export const mindReducer = (state: Mind[], action: MindAction): Mind[] => {
        switch (action.type) {
            case mindActionTypes.AddMind:
                return state;
            case mindActionTypes.RemoveMind:
                return state;
        }
}