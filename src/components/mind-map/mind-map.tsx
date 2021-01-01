import React, {useContext, useState} from 'react'
import './mind-map.scss';
import {MindContext} from '../../contexts/mind.context';
import ElementsHolder from './elements-holder/elements-holder';
import SideBar from './side-bar/side-bar';

const MindMap = () => {
    const {mindPages, mindsDispatch} = useContext(MindContext);
    const [currentPage, setCurrentPage] = useState(mindPages[0] || null);

    return (
        <div className="mind-map">
            <SideBar mindPages={mindPages} currentPageId={currentPage && currentPage.id} setCurrentPage={setCurrentPage}/>

            <ElementsHolder mindPage={currentPage} mindsDispatch={mindsDispatch} />           
        </div>
    )
}

export default MindMap
