import {Mind, MindAction, MindPage} from './models';
import {ManipulateMindAction} from './enums';

export interface SingleMindProps {
    scaleRate: number;
    mind: Mind;
    pageId: string;
    mindDispatch: React.Dispatch<MindAction>;
}

export interface ElementsHolderProps {
    scaleRate: number;
    mindPage: MindPage;
    mindsDispatch: React.Dispatch<MindAction>;
}

export interface LineBetweenMindsProps {
    mindFrom?: Mind;
    mindTo: Mind;
}

export interface ManipulateMindDialogProps {
    open: boolean;
    pageId: string;
    parentId?: string;
    mind?: Mind;
    manipulateMindAction: ManipulateMindAction;
    onClose: () => void;
}

export interface DeleteMindDialogProps {
    open: boolean;
    pageId: string;
    mindId: string;
    onClose: () => void;
}

export interface ScaleSliderProps {
    scaleRate: number;
    setScaleRate: React.Dispatch<React.SetStateAction<number>>;
}

export interface CreateMindMapDialogProps {
    open: boolean;
    onClose: () => void;
}

export interface DeleteMindMapDialogProps {
    mindPage: MindPage;
    open: boolean;
    onClose: (wasMindPageDeleted?: boolean) => void;
}

export interface SingleMindButtonsProps {
    pageId: string;
    mind: Mind;
    canDialogBeOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CreateMindButtonProps {
    pageId: string;
}

export interface SideBarProps {
    mindPages: MindPage[];
    currentPage: MindPage;
    setCurrentPage: React.Dispatch<React.SetStateAction<MindPage>>;
}