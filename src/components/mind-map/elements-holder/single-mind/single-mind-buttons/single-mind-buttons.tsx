import React, {useState} from 'react'
import './single-mind-buttons.scss'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import ManipulateMindDialog from '../../../../dialogs/manipulate-mind-dialog/manipulate-mind-dialog';
import DeleteMindDialog from '../../../../dialogs/delete-mind-dialog/delete-mind-dialog';
import EditIcon from '@material-ui/icons/Edit';
import {SingleMindButtonsProps} from '../../../../../models/components-props';
import {ManipulateMindAction} from '../../../../../models/enums';

const SingleMindButtons = (props: SingleMindButtonsProps) => {
    const {mind, canDialogBeOpen, pageId, setIsDialogOpen} = props;

    const [openAddDialog, setOpenManipulateDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [mindAction, setMindAction] = useState(ManipulateMindAction.CreateMind);

    const handleOpenManipulateDialog = (action: ManipulateMindAction) => {
        if (canDialogBeOpen) {
          setMindAction(action);
          setIsDialogOpen(true);
          setOpenManipulateDialog(true);
        }
      };
    
    const handleCloseManipulateDialog = () => {
        setIsDialogOpen(false);
        setOpenManipulateDialog(false);
      };

    const handleOpenDeleteDialog = () => {
        if (canDialogBeOpen) {
            setIsDialogOpen(true);
            setOpenDeleteDialog(true);
        }
      };
    
    const handleCloseDeleteDialog = () => {
        setIsDialogOpen(false);
        setOpenDeleteDialog(false);
      };

    const stylesForIconWrapper = {
      backgroundColor: mind.areColoursReversed ? mind.colorStyle.color : mind.colorStyle.backgroundColor,
      borderColor: mind.areColoursReversed ? mind.colorStyle.backgroundColor : mind.colorStyle.color,
      fill: mind.areColoursReversed ? mind.colorStyle.backgroundColor : mind.colorStyle.color
    }

    const iconFill = {
      fill: mind.areColoursReversed ? mind.colorStyle.backgroundColor : mind.colorStyle.color
    }

    return (
        <>
            <button onClick={handleOpenDeleteDialog} className="floating-round-button remove" style={stylesForIconWrapper}>
                <DeleteForeverIcon   style={iconFill}/>
            </button>

            <button onClick={() => {handleOpenManipulateDialog(ManipulateMindAction.EditMind)}} className="floating-round-button edit" style={stylesForIconWrapper}>
                <EditIcon style={iconFill}/>
            </button>

            <button onClick={() => {handleOpenManipulateDialog(ManipulateMindAction.CreateMind)}} className="floating-round-button add" style={stylesForIconWrapper}>
                 <AddIcon style={iconFill}/>
            </button>

            <ManipulateMindDialog pageId={pageId} manipulateMindAction={mindAction} mind={mind}  open={openAddDialog} onClose={handleCloseManipulateDialog} parentId={mind.id}/> 
            <DeleteMindDialog pageId={pageId}  open={openDeleteDialog} onClose={handleCloseDeleteDialog} mindId={mind.id}/> 

        </>
    )
}

export default SingleMindButtons
