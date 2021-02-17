import React, {useContext, useState} from 'react'
import './mind-map.scss';
import {MindContext} from '../../contexts/mind.context';
import ElementsHolder from './elements-holder/elements-holder';
import SideBar from './side-bar/side-bar';
import ScaleSlider from './scale-slider/scale-slider';
import {MindPage} from '../../models/models';

const MindMap = () => {
    const {mindPages, mindsDispatch} = useContext(MindContext);
    const [currentPage, setCurrentPage] = useState(mindPages[0] || null);
    const [scaleRate, setScaleRate] = useState(1);

    return (
        <div className="mind-map">
            <SideBar mindPages={mindPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

            <ElementsHolder scaleRate={scaleRate} mindPage={currentPage} mindsDispatch={mindsDispatch} /> 

            <ScaleSlider scaleRate={scaleRate} setScaleRate={setScaleRate} />         
        </div>
    )
}

export default MindMap
