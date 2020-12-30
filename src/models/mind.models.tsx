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

export class Mind {
    id: string;
    parentId?: string;
    pageId: string;
    name: string;
    position: Position;
}

export class MindAction {
    type: mindActionTypes;
    pageId?: string;
    mind?: Mind;
    mindId?: string;
    mindPage?: MindPage;
}

export class SingleMindProperties{
    mind: Mind;
    pageId: string;
    mindDispatch: React.Dispatch<MindAction>;
}

export class MindContextValue {
    mindPages: MindPage[];
    mindsDispatch: React.Dispatch<MindAction>;
}

export class ElementsHolderProps {
    mindPage: MindPage;
    mindsDispatch: React.Dispatch<MindAction>;
}

export class CreateMindDialogProps {
    open: boolean;
    pageId: string;
    parentId?: string;
    onClose: (wasItemAdded?: boolean) => void;
}

export class CreateMindMapDialogProps {
    open: boolean;
    onClose: (wasItemAdded?: boolean) => void;
}

export class SingleMindButtonsProps {
    pageId: string;
    mind: Mind;
    canDialogBeOpen: boolean;
}

export class CreateMindButtonProps {
    pageId: string;
}

export class SideBarProps {
    mindPages: MindPage[];
    currentPageId: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<MindPage>>;
}

export class MindPage {
    id: string;
    name: string;
    minds: Mind[];
}