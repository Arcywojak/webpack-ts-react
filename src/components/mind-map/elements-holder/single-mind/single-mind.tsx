import React, {EventHandler, useState} from 'react'
import {Mind, mindActionTypes, MindContextValue, Position, SingleMindProperties} from '../../../../models/mind.models';
import { mindReducer } from '../../../../reducers/mind.reducer';
import './single-minds.scss';

const SingleMind: React.FC<SingleMindProperties> = (props) => {

    const {mind, mindDispatch} = props;

    const [blockPosition, setBlockPosition] = useState(mind.position);
    const [mousePositionWithinBlock, setMousePositionWithinBlock] = useState({x:0,y:0} as Position);
    const [canMindBeMoved, setCanMindBeMoved] = useState(false);

    const handleMouseMove = (e: any) => {
        e.preventDefault();

        if (!canMindBeMoved) {
            return;
        }

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setBlockPosition({
            x: mouseX - mousePositionWithinBlock.x,
            y: mouseY - mousePositionWithinBlock.y
        });
    }

    const activateMovingMind = (e: any) => {
        setCanMindBeMoved(true);

        const parentDistanceFromTheTopY = e.currentTarget.parentNode.getBoundingClientRect().top

        setMousePositionWithinBlock({
            x: e.clientX - e.currentTarget.getBoundingClientRect().left,
            y: e.clientY + parentDistanceFromTheTopY - e.currentTarget.getBoundingClientRect().top
         });
    }

    const deactivateMovingMind = () => {
        setCanMindBeMoved(false);

        if (mind.position.x === blockPosition.x && mind.position.y === blockPosition.y) {
            return;
        }

        let updatedMind = mind;
        updatedMind.position = blockPosition;

        mindDispatch({
            type: mindActionTypes.UpdateItem,
            mind: updatedMind
        })
    }

    return (
        <div 
         className="mind"
         style={{transform: `translate(${blockPosition.x}px, ${blockPosition.y}px)`}} 
         onMouseMove={handleMouseMove} 
         onMouseUp={deactivateMovingMind}  
         onMouseDown={activateMovingMind} 
         onMouseLeave={deactivateMovingMind}>
            <p className="mind__paragraph">{props.mind.name}</p>
        </div>
    )
}

export default SingleMind
