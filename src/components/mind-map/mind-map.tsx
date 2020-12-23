import React, {useContext} from 'react'
import './mind-map.scss';
import {MindContext} from '../../contexts/mind.context';
import ElementsHolder from './elements-holder/elements-holder';
import {Mind} from '../../models/mind.models';

const MindMap = () => {


    const {minds, mindsDispatch} = useContext(MindContext);

    console.log(minds)

    return (
        <div className="mind-map">
            <canvas  width="100px" height="100px" className="mind-map__canvas">

            </canvas>
            
            <ElementsHolder minds={minds} mindsDispatch={mindsDispatch} />
           
        </div>
    )
}

export default MindMap
