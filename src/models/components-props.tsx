import {Mind, MindAction, MindPage} from './models';

export class SingleMindProps {
    scaleRate: number;
    mind: Mind;
    pageId: string;
    mindDispatch: React.Dispatch<MindAction>;
}

export class ElementsHolderProps {
    scaleRate: number;
    mindPage: MindPage;
    mindsDispatch: React.Dispatch<MindAction>;
}

export class CreateMindDialogProps {
    open: boolean;
    pageId: string;
    parentId?: string;
    onClose: () => void;
}

export class DeleteMindDialogProps {
    open: boolean;
    pageId: string;
    mindId: string;
    onClose: () => void;
}

export class ScaleSliderProps {
    scaleRate: number;
    setScaleRate: React.Dispatch<React.SetStateAction<number>>;
}

export class CreateMindMapDialogProps {
    open: boolean;
    onClose: () => void;
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