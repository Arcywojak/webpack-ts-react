import React, {useState, useContext} from 'react'
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {Mind, mindActionTypes, Position, Dimensions, ColorStyle} from '../../../models/models';
import {CreateMindDialogProps} from '../../../models/components-props';
import {MindContext} from '../../../contexts/mind.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { nanoid } from 'nanoid'   
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Radio from '@material-ui/core/Radio';
import {DEFAULT_COLOR_STYLE, COLOR_STYLES} from '../../../constants/colors_const';

const CreateMindDialog: React.FC<CreateMindDialogProps> = (props) => {
    const {onClose, open, parentId, pageId} = props;
    const [mindSentence, setMindSentence] = useState('');
    const [colorStyle, setColorStyle] = useState(JSON.stringify(DEFAULT_COLOR_STYLE));
    const {mindsDispatch} = useContext(MindContext);

    const handleChangeSentence = (e: any) => {
        setMindSentence(e.target.value)
    }

    const handleChangeColor = (e:any) => {
        // value comes as a stringified json to prevent it to be [object object]
        setColorStyle(e.target.value);
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
            position: {x: window.innerWidth/2 - averageMindWidth/2, y: window.innerHeight/2 - 80 - averageMindHeight/2} as Position,
            averageMindDimenstionsInPx: {width: averageMindWidth, height: averageMindHeight} as Dimensions,
            colorStyle: JSON.parse(colorStyle) as ColorStyle
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
                    onChange={handleChangeSentence}/>

                    <h4 className="input-title">
                        Color style
                    </h4>
                    <RadioGroup  aria-label="Color style" name="color" value={colorStyle} onChange={handleChangeColor}>
                        {
                            COLOR_STYLES.map(color => {

                                const colorStyles = {
                                    backgroundColor: color.backgroundColor,
                                    color: color.color,
                                    borderColor: color.borderColor
                                }

                                return (
                                    <div key={color.colorStyleId} className="colors-radio-input">
                                        <FormControlLabel  value={JSON.stringify(color)} control={<Radio color="primary" />} label={''} />
                                        <div style={colorStyles} className="color-style-appearance">
                                             abc
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </RadioGroup>

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
