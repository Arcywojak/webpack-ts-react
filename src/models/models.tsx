
export enum mindActionTypes {
    AddMind = 1,
    RemoveMind = 2,
    UpdateMind = 3,
    AddMindPage = 4,
    RemoveMindPage = 5
}

export interface Position {
    x: number;
    y: number;
}

export interface Dimensions {
    width: number;
    height: number
}

export interface Mind {
    id: string;
    parentId?: string;
    pageId: string;
    name: string;
    position: Position;
    averageMindDimenstionsInPx: Dimensions;
    colorStyle: ColorStyle
}

export interface MindAction {
    type: mindActionTypes;
    pageId?: string;
    mind?: Mind;
    mindId?: string;
    mindPage?: MindPage;
    shouldSavingBePrevented?: boolean;
}

export interface MindContextValue {
    mindPages: MindPage[];
    mindsDispatch: React.Dispatch<MindAction>;
}

export interface MindPage {
    id: string;
    name: string;
    minds: Mind[];
}

export interface ColorStyle {
    colorStyleId: number;
    backgroundColor: string;
    color: string;
    borderColor: string;
}