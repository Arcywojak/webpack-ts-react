import React, {EventHandler, useState} from 'react'
import {Mind, MindContextValue, Position, SingleMindProperties} from '../../../../models/mind.models';
import './single-minds.scss';

const SingleMind: React.FC<SingleMindProperties> = (props) => {

    const [blockPosition, setBlockPosition] = useState(props.mind.position);
    const [mousePositionWithinBlock, setMousePositionWithinBlock] = useState({x:0,y:0} as Position);
    const [isMindToMove, setIsMindToMove] = useState(false);

    const handleMouseMove = (e: any) => {
        e.preventDefault();

        if (!isMindToMove) {
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
        setIsMindToMove(true);

        const parentDistanceFromTheTopY = e.currentTarget.parentNode.getBoundingClientRect().top

        setMousePositionWithinBlock({
            x: e.clientX - e.currentTarget.getBoundingClientRect().left,
            y: e.clientY + parentDistanceFromTheTopY - e.currentTarget.getBoundingClientRect().top
         });
    }

    const toggleMovingMind = () => {
        setIsMindToMove(false);
    }

    return (
        <div 
         className="mind"
         style={{transform: `translate(${blockPosition.x}px, ${blockPosition.y}px)`}} 
         onMouseMove={handleMouseMove} 
         onMouseUp={toggleMovingMind}  
         onMouseDown={activateMovingMind} 
         onMouseLeave={toggleMovingMind}>
            <p className="mind__paragraph">{props.mind.name}</p>
        </div>
    )
}

export default SingleMind
