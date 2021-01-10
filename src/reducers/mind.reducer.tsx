import {mindActionTypes, Mind, MindAction, MindPage} from '../models/mind.models';
import {LocalStorageService} from '../services/localStorage.service';

const localStorageService = new LocalStorageService('mind')

const emptyState = [] as MindPage[];

export const mindReducer = (state: MindPage[], action: MindAction): MindPage[] => {
    let currentMindPage = state.find(mindMap => mindMap.id === action.pageId) as MindPage;
    let newState: MindPage[] = [];

        switch (action.type) {
            case mindActionTypes.AddMindPage:
                return [...state, action.mindPage] as MindPage[];
                
            case mindActionTypes.AddMind:
                currentMindPage.minds.push(action.mind!);

                newState = state.map(mindMap => {
                    if (mindMap.id === currentMindPage.id) {
                        return currentMindPage;
                    };
                    return mindMap;
                })
                 
                localStorageService.setItems(newState);
                return  newState;

            case mindActionTypes.UpdateMind:
                currentMindPage.minds.map(mind => {
                    if (mind.id === action?.mind?.id) {
                        return action.mind;
                    }
                    return mind;
                })

                newState = state.map(mindMap => {
                    if (mindMap.id === currentMindPage.id) {
                        return currentMindPage;
                    };
                    return mindMap;
                })
                 
                localStorageService.setItems(newState);
                return  newState;

            case mindActionTypes.RemoveMind:
                const pageWithoutMind = currentMindPage?.minds.filter(mp => mp.id !== action.mindId);
                newState = state.map(mindMap => {
                    if (mindMap.id === currentMindPage.id) {
                        return currentMindPage;
                    };
                    return mindMap;
                })
                localStorageService.setItems(newState);
                return state;
            default: return state;
        }
}