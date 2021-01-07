import React from 'react'
import { ElementsHolderProps, Mind} from '../../../models/mind.models';
import SingleMind from './single-mind/single-mind';
import './elements-holder.scss';
import CreateMindButton from './create-mind-button/create-mind-button';

const MindMap = (props: ElementsHolderProps) => {

    let minds = props.mindPage && props.mindPage.minds;
    let id = props.mindPage && props.mindPage.id;

    const mindsDispatch = props.mindsDispatch;

    const drawLine = (mind: Mind) => {
        // we find parent for mind and draw line from PARENT to CHILD
        
        const {parentId} = mind;
        
        const parent = minds.find(m => parentId === m.id); 

        if(parent) {
            const x1ForLine = mind.averageMindDimenstionsInPx.width / 2;
            const y1ForLine = mind.averageMindDimenstionsInPx.height / 2;
            const x2ForLine = mind?.position.x - parent?.position.x
            const y2ForLine = mind?.position.y - parent?.position.y;

            const parentX = parent?.position.x + (parent.averageMindDimenstionsInPx.width / 2);
            const parentY = parent?.position.y + (parent.averageMindDimenstionsInPx.height / 2);

            const styles = {
                transform: `translate(${parentX}px, ${parentY}px)`,      
             }

            return (
                <svg className="svg-line" style={styles}>
                    <marker
                    id={`triangle-${mind.id}`}
                    viewBox="0 0 10 10" refX="45" refY="5" 
                    markerUnits="strokeWidth"
                    markerWidth="10" markerHeight="8"
                    orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                    </marker>
                    <line markerEnd={`url(#triangle-${mind.id})`} x1="0" y1="0" x2={`${x2ForLine}px`} y2={`${y2ForLine}px`}>

                    </line>
                </svg>
            )
        }
    }

    return (
        <div className="mind-map__elements-holder">
            {minds && minds.map(mind => {
                return (
                <React.Fragment key={mind.id}>
                <SingleMind pageId={id} mind={mind} mindDispatch={mindsDispatch} ></SingleMind>
                {<> {drawLine(mind)} </>}
                </React.Fragment>
                )
            })}

            {id ? (<CreateMindButton pageId={id}/>) : (null)}
            

        </div>
    )
}

export default MindMap
