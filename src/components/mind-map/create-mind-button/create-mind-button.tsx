import React, {useState} from 'react'
import './create-mind-button.scss'; 
import CreateMindDialog from '../../shared/create-mind-dialog/create-mind-dialog';
import { Mind } from '../../../models/mind.models';

const CreateMindButton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value?: Mind) => {
        if(value){
            console.log("MIND CREATED")
        }
        setOpen(false);
      };

    return (
        <>
        <div className="create-mind-button" onClick={handleClickOpen}>
            <div className="plus-vertical-line"></div>
            <div className="plus-horizontal-line"></div>
        </div>

        <CreateMindDialog  open={open} onClose={handleClose} />
        </>
    )
}

export default CreateMindButton
