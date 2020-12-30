import React, {useState} from 'react';
import './side-bar.scss';
import AddIcon from '@material-ui/icons/Add';
import { MindPage, SideBarProps } from '../../../models/mind.models';
import CreateMindPageDialog from '../../dialogs/create-mind-page-dialog/create-mind-page-dialog';

const SideBar = (props: SideBarProps) => {
    const {mindPages, currentPageId, setCurrentPage} = props;
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
      };

    const handleClickChangePage = (mindPage: MindPage) => {
        setCurrentPage(mindPage);
    }

    return (
        <>
        <aside className="main-side-bar"> 
            <div className="side-bar-paragraph">
                <p>Add new mind map</p>
            </div>
            <div className="mind-map-button" onClick={handleClickOpenDialog}>
                <AddIcon />
            </div>
            {mindPages && mindPages.map(mp => {
                return (
                    <div onClick={() => {handleClickChangePage(mp)}} key={mp.id} className={`mind-map-button item ${mp.id === currentPageId ? "active" : ""}`}>
                        {mp.name}
                    </div>
                )
            })}
        </aside> 
        <CreateMindPageDialog open={openDialog} onClose={handleCloseDialog} />

        </>
    )
}

export default SideBar
