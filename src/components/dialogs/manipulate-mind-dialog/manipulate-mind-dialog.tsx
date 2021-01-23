import React, {useState, useContext, useEffect} from 'react';
import '../custom-dialog-styles.scss';
import Dialog from '@material-ui/core/Dialog';
import {Mind, mindActionTypes, Position, Dimensions, ColorStyle} from '../../../models/models';
import {ManipulateMindDialogProps} from '../../../models/components-props';
import {MindContext} from '../../../contexts/mind.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import { nanoid } from 'nanoid'   
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Radio from '@material-ui/core/Radio';
import {DEFAULT_COLOR_STYLE, COLOR_STYLES} from '../../../constants/colors_const';
import Checkbox from '@material-ui/core/Checkbox';
import { ManipulateMindAction } from '../../../models/enums';
import {LETTER_WIDTH, LETTER_HEIGHT, TOP_AND_BOTTOM_PADDING, MIN_BLOCK_WIDTH, MAX_BLOCK_WIDTH} from '../../../constants/mind_dimenstions_const';

const ManipulateMindDialog: React.FC<ManipulateMindDialogProps> = (props) => {
    const {onClose, open, parentId, pageId, manipulateMindAction, mind} = props;
    const [mindSentence, setMindSentence] = useState('');
    const [areColoursReversed, setAreColoursReversed] = useState(false);
    const [colorStyle, setColorStyle] = useState(JSON.stringify(DEFAULT_COLOR_STYLE));
    const {mindsDispatch} = useContext(MindContext);

    useEffect(() => {
        setMindSentence(manipulateMindAction === ManipulateMindAction.EditMind ? mind && mind.name || '' : '');
        setAreColoursReversed(manipulateMindAction === ManipulateMindAction.EditMind ? mind && mind.areColoursReversed || false : false);
    }, [manipulateMindAction])

    const getDialogTitle = () => {
        switch(manipulateMindAction) {
            case ManipulateMindAction.CreateMind:
                return "Creating new mind"
            case ManipulateMindAction.EditMind:
                return "Editing mind"
        }
    }

    const handleChangeSentence = (e: any) => {
        setMindSentence(e.target.value)
    };

    const handleColourReverseChange = (e: any) => {
        setAreColoursReversed(!areColoursReversed);
    }

    const handleChangeColor = (e:any) => {
        // value comes as a stringified json to prevent it to be [object object]
        setColorStyle(e.target.value);
    }

    const handleClose = () => {
        onClose()
    }

    const calculateAverageMindHeight = (text: string) => {
     const widthOfLetters = text.length * LETTER_WIDTH;
    
     return (Math.ceil(widthOfLetters / MAX_BLOCK_WIDTH)) * LETTER_HEIGHT + TOP_AND_BOTTOM_PADDING;
    }

    const calculateAverageMindWidth = (text: string) => {
        
        
        return Math.min(
            Math.max(MIN_BLOCK_WIDTH, Math.min(text.length * LETTER_WIDTH, MAX_BLOCK_WIDTH)),
            MAX_BLOCK_WIDTH
        )
    }

    const addMind = () => {
        const averageMindWidth = calculateAverageMindWidth(mindSentence);
        const averageMindHeight = calculateAverageMindHeight(mindSentence);

        const newMind = {
            id: nanoid(),
            pageId: pageId,
            parentId: parentId || null,
            name: mindSentence,
            position: {x: window.innerWidth/2 - averageMindWidth/2, y: window.innerHeight/2 - 80 - averageMindHeight/2} as Position,
            averageMindDimenstionsInPx: {width: averageMindWidth, height: averageMindHeight} as Dimensions,
            colorStyle: JSON.parse(colorStyle) as ColorStyle,
            areColoursReversed: areColoursReversed
        } as Mind;

        mindsDispatch({
            type: mindActionTypes.AddMind,
            mind: newMind,
            pageId: pageId
        });

        setMindSentence('');

        handleClose();
    }

    const editMind = () => {
        const newMind = mind;

        const averageMindWidth = calculateAverageMindWidth(mindSentence);
        const averageMindHeight = calculateAverageMindHeight(mindSentence);

        if (newMind) {
            newMind.name = mindSentence;
            newMind.colorStyle = JSON.parse(colorStyle) as ColorStyle;
            newMind.areColoursReversed = areColoursReversed
            newMind.averageMindDimenstionsInPx = {width: averageMindWidth, height: averageMindHeight} as Dimensions,

            mindsDispatch({
                type: mindActionTypes.UpdateMind,
                mind: newMind,
                pageId: pageId
            });
        }

        handleClose();
    }

    const handleSubmit = () => {
        switch(manipulateMindAction) {
            case ManipulateMindAction.CreateMind:
                addMind();
                break;
            case ManipulateMindAction.EditMind:
                editMind();
                break;
            default:
                break;
        }
    }


    return (
        <Dialog onClose={handleClose}  open={open}>
            <div className="dialog">
                <h3 className="dialog-title">{getDialogTitle()}</h3>
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

                    <div className="input-title with-input">
                       <h4>Color style</h4> 
                       <FormControlLabel
                        control={
                        <Checkbox
                            checked={areColoursReversed}
                            onChange={handleColourReverseChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Reverse colours"
                    />
                    </div>
                    <RadioGroup  aria-label="Color style" name="color" value={colorStyle} onChange={handleChangeColor}>
                        {
                            COLOR_STYLES.map(color => {

                                const colorStyles = {
                                    backgroundColor: areColoursReversed ? color.color : color.backgroundColor,
                                    color: areColoursReversed ? color.backgroundColor : color.color,
                                    borderColor: areColoursReversed ? color.color : color.borderColor
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

export default ManipulateMindDialog
