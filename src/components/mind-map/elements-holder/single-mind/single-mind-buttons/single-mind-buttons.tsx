import React, {useState} from 'react'
import './single-mind-buttons.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import CreateMindDialog from '../../../../dialogs/create-mind-dialog/create-mind-dialog';
import DeleteMindDialog from '../../../../dialogs/delete-mind-dialog/delete-mind-dialog';
import {SingleMindButtonsProps} from '../../../../../models/components-props';

const SingleMindButtons = (props: SingleMindButtonsProps) => {
    const {mind, canDialogBeOpen, pageId} = props;

    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleOpenAddDialog = () => {
        if (canDialogBeOpen) {
          console.log(canDialogBeOpen)
            setOpenAddDialog(true);
        }
      };
    
    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
      };

    const handleOpenDeleteDialog = () => {
        if (canDialogBeOpen) {
            setOpenDeleteDialog(true);
        }
      };
    
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
      };

    return (
        <>
            <button onClick={handleOpenDeleteDialog} className="floating-round-button add">
                <DeleteForeverIcon/>
            </button>

            <button onClick={handleOpenAddDialog} className="floating-round-button remove">
                 <AddIcon/>
            </button>

            <CreateMindDialog pageId={pageId}  open={openAddDialog} onClose={handleCloseAddDialog} parentId={mind.id}/> 
            <DeleteMindDialog pageId={pageId}  open={openDeleteDialog} onClose={handleCloseDeleteDialog} mindId={mind.id}/> 

        </>
    )
}

export default SingleMindButtons
