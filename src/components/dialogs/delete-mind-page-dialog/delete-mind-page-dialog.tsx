import '../custom-dialog-styles.scss';
import React, {useContext} from 'react'
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {mindActionTypes} from '../../../models/models';
import {DeleteMindMapDialogProps} from '../../../models/components-props';
import {MindContext} from '../../../contexts/mind.context';
import Button from '@material-ui/core/Button'; 

const DeleteMindPageDialog = (props: DeleteMindMapDialogProps) => {
    const {onClose, open, mindPage} = props;
    const {mindsDispatch} = useContext(MindContext);

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = () => {
        mindsDispatch({
            type: mindActionTypes.RemoveMindPage,
            pageId: mindPage.id
        });

        handleClose();
    }


    return (
        <Dialog onClose={handleClose}  open={open}>
            <div className="dialog">
                <h3 className="dialog-title">Are you sure to delete mind page called <i></i></h3>
                <form>
                    <div className="buttons-wrapper">
                        <div>
                            <Button onClick={handleSubmit} variant="contained" color="primary" className="dialog-button">
                                Save
                            </Button>
                        </div>   
                        <div>
                            <Button onClick={handleClose} variant="contained" className="dialog-button" >
                                Discard
                            </Button>
                        </div>          
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default DeleteMindPageDialog
