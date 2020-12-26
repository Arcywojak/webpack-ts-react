import {Mind} from '../models/mind.models';

export class LocalStorageService {
    private objectName: string;

    constructor(objectName: string) {
        this.objectName = objectName;
    }

    public getItems<T>()  {
        const items = JSON.parse(localStorage.getItem(this.objectName)) || [];

        return items;
    }

    public setItems(data: any) {
        localStorage.setItem(this.objectName, JSON.stringify(data));
    }
}