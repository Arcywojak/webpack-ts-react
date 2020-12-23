import {Mind} from '../models/mind.models';

export class LocalStorageService {
    private objectName: string;

    constructor(objectName: string) {
        this.objectName = objectName;
    }

    public getItems<T>()  {
       // const items = JSON.parse(localStorage.getItem(this.objectName)) || null;

       const items = [
           {
            id: '111',
            name: "New mind blah blah blah 111",
            position: {x:0, y:0},
           }
       ]
        return items;
    }

    public setItems(data: any) {
        localStorage.setItem(this.objectName, JSON.stringify(data));
    }
}