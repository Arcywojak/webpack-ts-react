import React, {useState, useContext} from 'react'
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {DeleteMindDialogProps, mindActionTypes} from '../../../models/mind.models';
import {MindContext} from '../../../contexts/mind.context';
import Button from '@material-ui/core/Button'; 

const DeleteMindDialog = (props: DeleteMindDialogProps) => {
    const {open, pageId, mindId, onClose} = props;
    const {mindPages, mindsDispatch} = useContext(MindContext);

    const handleClose = () => {
        onClose();
    }

    const handleSubmit = () => {
        const page = mindPages.find(mp => mp.id === pageId);
        const mind = page && page.minds.find(m => m.id === mindId);

        mindsDispatch({
            type: mindActionTypes.RemoveMind,
            pageId: pageId,
            mindId: mind && mind.id
        })

        handleClose();
    }


    return (
        <Dialog onClose={handleClose}  open={open}>
            <div className="dialog">
                <h5 className="dialog-smaller-title">Are you sure to delete the mind and all of its children?</h5>
                    <div className="buttons-wrapper">
                        <div>
                            <Button onClick={handleSubmit} variant="contained" color="primary" className="dialog-button">
                                Delete
                            </Button>
                        </div>   
                        <div>
                            <Button onClick={handleClose} variant="contained" className="dialog-button" >
                                Discard
                            </Button>
                        </div>          
                    </div>
            </div>
        </Dialog>
    )
}

export default DeleteMindDialog
