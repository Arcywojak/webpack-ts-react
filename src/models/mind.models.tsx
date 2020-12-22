export enum mindActionTypes {
    AddMind = 1,
    RemoveMind = 2,
}

export class Position {
    x: Number;
    y: Number;
}

export class Mind {
    id: string;
    parentId: string;
    name: string;
    position: Position;
    nestedMinds: Mind[];
}

export class MindAction {
    type: mindActionTypes;
    payload: Mind[];
}

export class MindContextValue {
    minds: Mind[];
    mindsDispatch: React.Dispatch<MindAction>;
}