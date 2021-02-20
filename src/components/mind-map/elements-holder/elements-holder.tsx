import React from 'react'
import {ElementsHolderProps} from '../../../models/components-props';
import SingleMind from './single-mind/single-mind';
import './elements-holder.scss';
import CreateMindButton from './create-mind-button/create-mind-button';
import LineBetweenMinds from './line-between-minds/line-between-minds';
import NoMindPageSelectedMessage from './no-mind-page-selected-message/no-mind-page-selected-message';

const MindMap = (props: ElementsHolderProps) => {

    let minds = props.mindPage && props.mindPage.minds;
    let id = props.mindPage && props.mindPage.id;

    const {scaleRate, mindsDispatch} = props;

    const stylesAccordingToScaleRate = {
        width: `${100 * 1/scaleRate}%`,
        height:`${100 * 1/scaleRate}%`,
        transform: `scale(${scaleRate})`
    }

    return (
        <div className="mind-map__elements-holder" style={stylesAccordingToScaleRate}>
            {minds && minds.map(mind => {
                return (
                <React.Fragment key={mind.id}>
                    <SingleMind scaleRate={scaleRate} pageId={id} mind={mind} mindDispatch={mindsDispatch} ></SingleMind>
                    <LineBetweenMinds mindTo={mind} mindFrom={minds.find(parent => parent.id === mind.parentId)}/>
                </React.Fragment>
                )
            })}

            {id ? (<CreateMindButton pageId={id}/>) : (<NoMindPageSelectedMessage/>)}
            

        </div>
    )
}

export default MindMap
