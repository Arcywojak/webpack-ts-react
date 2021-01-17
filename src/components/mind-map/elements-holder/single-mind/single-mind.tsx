import React, {useState} from 'react'
import {mindActionTypes, Position} from '../../../../models/models';
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

    const handleMouseMove = (e: any) => {
        e.preventDefault();

        if (!canMindBeMoved) {
            return;
        }

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setBlockPosition({
            x: (mouseX*(1/scaleRate) - mousePositionWithinBlock.x),
            y: (mouseY*(1/scaleRate) - mousePositionWithinBlock.y)
        });

        let updatedMind = mind;
        updatedMind.position = blockPosition;

        mindDispatch({
            type: mindActionTypes.UpdateMind,
            mind: updatedMind,
            pageId: pageId,
            shouldSavingBePrevented: true
        })
    }

    const activateMovingMind = (e: any) => {
        setCanMindBeMoved(true);

        const parentDistanceFromTheTopY = e.currentTarget.parentNode.getBoundingClientRect().top

        setMousePositionWithinBlock({
            x: (e.clientX - e.currentTarget.getBoundingClientRect().left)*(1/scaleRate),
            y: (e.clientY + parentDistanceFromTheTopY - e.currentTarget.getBoundingClientRect().top)*(1/scaleRate)
         });
    }

    const deactivateMovingMind = () => {
        setCanMindBeMoved(false);

        if ( positionBeforeMove === blockPosition ) {
            setCanDialogBeOpen(true);
        } else {
            setPositionBeforeMove(blockPosition);
            setCanDialogBeOpen(false);

            mindDispatch({
                type: mindActionTypes.UpdateMind,
                mind: mind,
                pageId: pageId
            });
        }
    }

    const styles = {
        transform: `translate(${blockPosition.x}px, ${blockPosition.y}px)`,
        backgroundColor: mind.colorStyle.backgroundColor,
        color: mind.colorStyle.color,
        borderColor: mind.colorStyle.borderColor
    }

    return (
        <>
            <div 
            className="mind"
            style={styles} 
            onMouseMove={handleMouseMove} 
            onMouseUp={deactivateMovingMind}  
            onMouseDown={activateMovingMind} 
            onMouseLeave={deactivateMovingMind}>
                <p className="mind__paragraph">{mind.name}</p>

                <SingleMindButtons canDialogBeOpen={canDialogBeOpen} mind={mind} pageId={pageId}/>

            </div>
        </>
    )
}

export default SingleMind
