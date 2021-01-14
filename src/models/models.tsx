export enum mindActionTypes {
    AddMind = 1,
    RemoveMind = 2,
    UpdateMind = 3,
    AddMindPage = 4,
    RemoveMindPage = 5
}

export class Position {
    x: number;
    y: number;
}

export class Dimensions {
    width: number;
    height: number
}

export class Mind {
    id: string;
    parentId?: string;
    pageId: string;
    name: string;
    position: Position;
    averageMindDimenstionsInPx: Dimensions;
}

export class MindAction {
    type: mindActionTypes;
    pageId?: string;
    mind?: Mind;
    mindId?: string;
    mindPage?: MindPage;
}

export class MindContextValue {
    mindPages: MindPage[];
    mindsDispatch: React.Dispatch<MindAction>;
}

export class MindPage {
    id: string;
    name: string;
    minds: Mind[];
}