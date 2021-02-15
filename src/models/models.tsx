import {MindActionTypes} from './enums';

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
    colorStyle: ColorStyle;
    areColoursReversed: boolean
}

export interface MindAction {
    type: MindActionTypes;
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