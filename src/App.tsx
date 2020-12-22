import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MindMap from './components/mind-map/mind-map';
import MindContextProvider from './contexts/mind.context';
import './styles.scss';

export default function App()
{
    return (
        <>
        <MindContextProvider>
            <Header/>
                <MindMap/>
            <Footer/>
        </MindContextProvider>
        </>
    )
}