import React, {useState} from 'react'
import {mindActionTypes, Position, SingleMindProperties} from '../../../../models/mind.models';
import './single-mind.scss';
import SingleMindButtons from './single-mind-buttons/single-mind-buttons';

const SingleMind = (props: SingleMindProperties) => {

    const {mind, pageId, mindDispatch} = props;

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
            x: (mouseX*1.25 - mousePositionWithinBlock.x),
            y: (mouseY*1.25 - mousePositionWithinBlock.y)
        });

        let updatedMind = mind;
        updatedMind.position = blockPosition;

        mindDispatch({
            type: mindActionTypes.UpdateMind,
            mind: updatedMind,
            pageId: pageId
        })
    }

    const activateMovingMind = (e: any) => {
        setCanMindBeMoved(true);

        const parentDistanceFromTheTopY = e.currentTarget.parentNode.getBoundingClientRect().top

        setMousePositionWithinBlock({
            x: (e.clientX - e.currentTarget.getBoundingClientRect().left)*1.25,
            y: (e.clientY + parentDistanceFromTheTopY - e.currentTarget.getBoundingClientRect().top)*1.25
         });
    }

    const deactivateMovingMind = () => {
        setCanMindBeMoved(false);

        if ( positionBeforeMove === blockPosition ) {
            setCanDialogBeOpen(true);
        } else {
            setPositionBeforeMove(blockPosition);
            setCanDialogBeOpen(false);
        }
    }

    return (
        <>
            <div 
            className="mind"
            style={{transform: `translate(${blockPosition.x}px, ${blockPosition.y}px)`}} 
            onMouseMove={handleMouseMove} 
            onMouseUp={deactivateMovingMind}  
            onMouseDown={activateMovingMind} 
            onMouseLeave={deactivateMovingMind}>
                <p className="mind__paragraph">{props.mind.name}</p>

                <SingleMindButtons canDialogBeOpen={canDialogBeOpen} mind={mind} pageId={pageId}/>

            </div>


        {/*    <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message="New mind created successfully!"
        />*/}
        </>
    )
}

export default SingleMind
