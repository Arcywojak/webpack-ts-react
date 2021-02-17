import React, {useState} from 'react';
import './side-bar.scss';
import AddIcon from '@material-ui/icons/Add';
import { MindPage} from '../../../models/models';
import {SideBarProps} from '../../../models/components-props';
import CreateMindPageDialog from '../../dialogs/create-mind-page-dialog/create-mind-page-dialog';
import DeleteMindPageDialog from '../../dialogs/delete-mind-page-dialog/delete-mind-page-dialog';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import closeTriangleUrl from '../../../assets/images/closeTriangle.svg';

const SideBar = (props: SideBarProps) => {
    const {mindPages, currentPage, setCurrentPage} = props;
    const [isSideBarHidden, setIsSidebarHidden] = useState(false);
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [mindPageToDelete, setMindPageToDelete] = useState({} as MindPage);


    const handleClickOpenDialog = () => {
        setOpenCreateDialog(true);
      };
    
      const handleCloseCreateDialog = () => {
        setOpenCreateDialog(false);
      };

      const toggleSideBar = () => {
          setIsSidebarHidden(!isSideBarHidden);
      }

    const handleClickChangePage = (mindPage: MindPage) => {
        setCurrentPage(mindPage);
    };

    const handleOpenDeleteDialog = (mindPage: MindPage) => {
        setMindPageToDelete(mindPage);
        setOpenDeleteDialog(true);
      };

    const handleCloseDeleteDialog = (deleted?: boolean) => {
        if (deleted) {
            setCurrentPage({} as MindPage);
        }
        setOpenDeleteDialog(false);
      };


    return (
        <>
        <aside className={`main-side-bar ${isSideBarHidden ? "hidden" : ""}`}>
            <div className="side-bar-content">
                <div className="side-bar-paragraph">
                    <p>Add new mind map</p>
                </div>
                <div className="mind-map-button" onClick={handleClickOpenDialog}>
                    <AddIcon />
                </div>
                {mindPages && mindPages.map(mp => {
                    return (
                        <div onClick={() => {handleClickChangePage(mp)}} key={mp.id} className={`mind-map-button item ${mp.id === currentPage?.id ? "active" : ""}`}>
                            {mp.name}
                            <div className="delete-mind-map-button" onClick={() => {handleOpenDeleteDialog(mp)}}>
                                <DeleteForeverIcon/>
                            </div>
                        </div>
                    )
                })}
            </div> 
            <div className="side-bar-closer" onClick={toggleSideBar}>
                <img src={closeTriangleUrl} alt=""/>
            </div>
        </aside> 
        <CreateMindPageDialog open={openCreateDialog} onClose={handleCloseCreateDialog} />

        <DeleteMindPageDialog open={openDeleteDialog} onClose={handleCloseDeleteDialog} mindPage={mindPageToDelete}/>
        </>
    )
}

export default SideBar
