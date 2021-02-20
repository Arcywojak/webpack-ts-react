import React, {useState} from 'react'
import {Position} from '../../../../models/models';
import {MindActionTypes} from '../../../../models/enums';
import {SingleMindProps} from '../../../../models/components-props';
import './single-mind.scss';
import SingleMindButtons from './single-mind-buttons/single-mind-buttons';

const SingleMind = (props: SingleMindProps) => {

    const {scaleRate, mind, pageId, mindDispatch} = props;

    const [blockPosition, setBlockPosition] = useState(mind.position);
    const [positionBeforeMove, setPositionBeforeMove] = useState(blockPosition);
    const [mousePositionWithinBlock, setMousePositionWithinBlock] = useState({x:0,y:0} as Position);
    const [canMindBeMoved, setCanMindBeMoved] = useState(false);
    const [canDialogBeOpen, setCanDialogBeOpen] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleMouseMove = (e: any) => {

        let mouseX: number = 0;
        let mouseY: number = 0;

        // e.touches decects if we are on touch-sensitive device
        // If we are, then me we must use other properties than in the mouse events
        if(e.touches) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        if (!canMindBeMoved || isDialogOpen) {
            return;
        }

        setBlockPosition({
            x: (mouseX*(1/scaleRate) - mousePositionWithinBlock.x),
            y: (mouseY*(1/scaleRate) - mousePositionWithinBlock.y)
        });

        let updatedMind = mind;
        updatedMind.position = blockPosition;

        mindDispatch({
            type: MindActionTypes.UpdateMind,
            mind: updatedMind,
            pageId: pageId,
            shouldSavingBePrevented: true
        })
    }

    const activateMovingMind = (e: any) => {
        let mouseX: number;
        let mouseY: number;

        // e.touches decects if we are on touch-sensitive device
        // If we are, then me we must use other properties than in the mouse events
        if (e.touches) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        
        setCanMindBeMoved(true);

        const parentDistanceFromTheTopY = e.currentTarget.parentNode.parentNode.getBoundingClientRect().top

        setMousePositionWithinBlock({
            x: (mouseX - e.currentTarget.getBoundingClientRect().left)*(1/scaleRate),
            y: (mouseY + parentDistanceFromTheTopY - e.currentTarget.getBoundingClientRect().top)*(1/scaleRate)
         });
    }

    const deactivateMovingMind = () => {
        setCanMindBeMoved(false);

        // If user moves the mind i suppose that the he does not want to open some dialog 
        if ( positionBeforeMove === blockPosition ) {
            setCanDialogBeOpen(true);
        } else {
            setPositionBeforeMove(blockPosition);
            setCanDialogBeOpen(false);

            mindDispatch({
                type: MindActionTypes.UpdateMind,
                mind: mind,
                pageId: pageId
            });
        }
    }

    const styles = {
        transform: `translate(${blockPosition.x}px, ${blockPosition.y}px)`,
        backgroundColor: mind.areColoursReversed ? mind.colorStyle.color : mind.colorStyle.backgroundColor,
        color: mind.areColoursReversed ? mind.colorStyle.backgroundColor : mind.colorStyle.color,
        borderColor: mind.areColoursReversed ? mind.colorStyle.backgroundColor : mind.colorStyle.borderColor,
    }

    return (
        <>
            <div 
            className="mind"
            style={styles} 
            onMouseMove={handleMouseMove} 
            onMouseUp={deactivateMovingMind}  
            onMouseDown={activateMovingMind} 
            onMouseLeave={deactivateMovingMind}
            
            onTouchStart={activateMovingMind}
            onTouchEnd={deactivateMovingMind}
            onTouchMove={handleMouseMove}
            >
                <p className="mind__paragraph">{mind.name}</p>

                <SingleMindButtons canDialogBeOpen={canDialogBeOpen} setIsDialogOpen={setIsDialogOpen} mind={mind} pageId={pageId}/>

            </div>
        </>
    )
}

export default SingleMind
