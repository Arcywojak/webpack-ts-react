import React, {useState, useContext} from 'react'
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {CreateMindDialogProps, Mind, mindActionTypes, Position, Dimensions} from '../../../models/mind.models';
import {MindContext} from '../../../contexts/mind.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { nanoid } from 'nanoid'    

const CreateMindDialog: React.FC<CreateMindDialogProps> = (props) => {
    const {onClose, open, parentId, pageId} = props;
    const [mindSentence, setMindSentence] = useState('');
    const {mindsDispatch} = useContext(MindContext);

    const handleChange = (e: any) => {
        setMindSentence(e.target.value)
    }

    const handleClose = () => {
        onClose()
    }

    const letterWidth = 9.61;
    const letterHeight = 21;
    const leftAndRightPadding = 16;
    const topAndBottomPadding = 20
    const minBlockWidth = 130 + leftAndRightPadding;
    const maxBlockWidth = 330 + leftAndRightPadding;

    const calculateAverageMindHeight = (text: string) => {
     const widthOfLetters = text.length * letterWidth;
    
     return (Math.ceil(widthOfLetters / maxBlockWidth)) * letterHeight + topAndBottomPadding;
    }

    const calculateAverageMindWidth = (text: string) => {
        
        
        return Math.max(minBlockWidth, Math.min(text.length * letterWidth, maxBlockWidth));
    }

    const handleSubmit = () => {

        const averageMindWidth = calculateAverageMindWidth(mindSentence);
        const averageMindHeight = calculateAverageMindHeight(mindSentence);

        const newMind = {
            id: nanoid(),
            pageId: pageId,
            parentId: parentId || null,
            name: mindSentence,
            position: {x: 200, y: 200} as Position,
            averageMindDimenstionsInPx: {width: averageMindWidth, height: averageMindHeight} as Dimensions
        } as Mind;

        mindsDispatch({
            type: mindActionTypes.AddMind,
            mind: newMind,
            pageId: pageId
        });

        setMindSentence('');

        handleClose();
    }


    return (
        <Dialog onClose={handleClose}  open={open}>
            <div className="dialog">
                <h3 className="dialog-title">Creating new mind</h3>
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

export default CreateMindDialog
