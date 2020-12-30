import React, {useState} from 'react'
import './single-mind-buttons.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import CreateMindDialog from '../../../../dialogs/create-mind-dialog/create-mind-dialog';
import {SingleMindButtonsProps} from '../../../../../models/mind.models'

const SingleMindButtons = (props: SingleMindButtonsProps) => {
    const {mind, canDialogBeOpen, pageId} = props;

    const [openAddDialog, setOpenAddDialog] = useState(false);

    const handleClickOpenAddDialog = () => {
        if (canDialogBeOpen) {
            setOpenAddDialog(true);
        }
      };
    
      const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
      };

    return (
        <>
            <button className="floating-round-button add">
                <DeleteForeverIcon/>
            </button>

            <button onClick={handleClickOpenAddDialog} className="floating-round-button remove">
                 <AddIcon/>
            </button>

            <CreateMindDialog pageId={pageId}  open={openAddDialog} onClose={handleCloseAddDialog} parentId={mind.id}/> 
        </>
    )
}

export default SingleMindButtons
