import React, {useContext} from 'react'
import {MindContext} from '../../contexts/mind.context';
import ElementsHolder from './elements-holder/elements-holder';
import {Mind} from '../../models/mind.models';

const MindMap = () => {


    const {minds, mindsDispatch} = useContext(MindContext);

    return (
        <div>
            <canvas  width="100px" height="100px" className="mind-map__canvas">

            </canvas>
            
            <ElementsHolder minds={minds} mindsDispatch={mindsDispatch} />
           
        </div>
    )
}

export default MindMap
