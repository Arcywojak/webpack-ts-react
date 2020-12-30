import '../custom-dialog-styles.scss';
import React, {useState, useContext} from 'react'
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {CreateMindMapDialogProps , mindActionTypes, Position, MindPage} from '../../../models/mind.models';
import {MindContext} from '../../../contexts/mind.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { nanoid } from 'nanoid'    

const CreateMindPageDialog = (props: CreateMindMapDialogProps) => {
    const {onClose, open} = props;
    const [mindSentence, setMindSentence] = useState('');
    const {mindsDispatch} = useContext(MindContext);

    const handleChange = (e: any) => {
        setMindSentence(e.target.value)
    }

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = () => {

        const newMindPage = {
            id: nanoid(),
            name: mindSentence,
            minds: []
        } as MindPage

        mindsDispatch({
            type: mindActionTypes.AddMindPage,
            mindPage: newMindPage
        });

        setMindSentence('');

        handleClose();
    }


    return (
        <Dialog onClose={handleClose}  open={open}>
            <div className="dialog">
                <h3 className="dialog-title">Creating new mind map</h3>
                <form>
                    <TextField 
                    required 
                    id="standard-basic" 
                    label="Mind sentece"  
                    className="text-field" 
                    multiline
                    rowsMax={4}
                    value={mindSentence}
                    onChange={handleChange}/>

                    <div className="buttons-wrapper">
                        <div>
                            <Button onClick={handleSubmit} variant="contained" disabled={mindSentence.length === 0 ? true : false} color="primary" className="dialog-button">
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

export default CreateMindPageDialog
