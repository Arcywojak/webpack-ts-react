
export class LocalStorageService {
    private objectName: string;

    constructor(objectName: string) {
        this.objectName = objectName;
    }

    public getItems()  {
        const items = JSON.parse(localStorage.getItem(this.objectName) || '') || [];

        return items;
    }

    public setItems(data: any) {
        localStorage.setItem(this.objectName, JSON.stringify(data));
    }
}