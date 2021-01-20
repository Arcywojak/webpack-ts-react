
export class LocalStorageService {
    private objectName: string;

    constructor(objectName: string) {
        this.objectName = objectName;
    }

    public getItems()  {
        const items = localStorage.getItem(this.objectName);

        if (items) { 
            return JSON.parse(items);
        }

        return [];
    }

    public setItems(data: any) {
        localStorage.setItem(this.objectName, JSON.stringify(data));
    }
}