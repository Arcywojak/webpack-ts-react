import React from 'react'
import { ElementsHolderProps} from '../../../models/mind.models';
import SingleMind from './single-mind/single-mind';
import './elements-holder.scss';
import CreateMindButton from './create-mind-button/create-mind-button';

const MindMap = (props: ElementsHolderProps) => {

    let minds = props.mindPage && props.mindPage.minds;
    let id = props.mindPage && props.mindPage.id;

    console.log(props)
    const mindsDispatch = props.mindsDispatch;

    return (
        <div className="mind-map__elements-holder">
            {minds && minds.map(mind => {
                return (<SingleMind pageId={id} mind={mind} mindDispatch={mindsDispatch} key={mind.id}></SingleMind>)
            })}

            {id ? (<CreateMindButton pageId={id}/>) : (null)}
            

        </div>
    )
}

export default MindMap
