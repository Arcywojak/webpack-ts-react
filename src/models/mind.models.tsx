export enum mindActionTypes {
    AddMind = 1,
    RemoveMind = 2,
    UpdateItem = 3,
}

export class Position {
    x: number;
    y: number;
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
    mind?: Mind;
    mindId?: string;
}

export class SingleMindProperties{
    mind: Mind;
    mindDispatch: React.Dispatch<MindAction>;
}

export class MindContextValue {
    minds: Mind[];
    mindsDispatch: React.Dispatch<MindAction>;
}

export class CreateMindDialogProps {
    open: boolean;
    parentId?: string;
    onClose: (wasItemAdded?: boolean) => void;
}