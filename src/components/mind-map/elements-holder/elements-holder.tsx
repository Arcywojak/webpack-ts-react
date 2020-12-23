import React from 'react'
import {Mind, MindAction, MindContextValue} from '../../../models/mind.models';
import SingleMind from './single-mind/single-mind';
import './elements-holder.scss';

const MindMap = (mindContextVal: MindContextValue) => {

    const minds = mindContextVal.minds;
    const mindsDispatch = mindContextVal.mindsDispatch;

    return (
        <div className="mind-map__elements-holder">
            {minds.map(mind => {
                return (<SingleMind mind={mind} mindDispatch={mindsDispatch} key={mind.id}></SingleMind>)
            })}
        </div>
    )
}

export default MindMap
