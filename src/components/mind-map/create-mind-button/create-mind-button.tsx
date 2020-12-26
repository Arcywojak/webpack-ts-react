import React, {useState} from 'react'
import './create-mind-button.scss'; 
import CreateMindDialog from '../../shared/create-mind-dialog/create-mind-dialog';
import { Mind } from '../../../models/mind.models';
import Snackbar from '@material-ui/core/Snackbar';

const CreateMindButton = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);


    const handleClickOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = (wasItemAdded?: boolean) => {
        if (wasItemAdded) {
            setOpenSnackbar(true);
        }
        setOpenDialog(false);
      };

      const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
      };

    return (
        <>
        <div className="create-mind-button" onClick={handleClickOpenDialog}>
            <div className="plus-vertical-line"></div>
            <div className="plus-horizontal-line"></div>
        </div>

        <CreateMindDialog  open={openDialog} onClose={handleCloseDialog} />

        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="New mind created successfully!"
      />
         </>
    )
}

export default CreateMindButton
