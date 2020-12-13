import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './components/home-page/gome-page'
import './styles.scss';

export default function App()
{
    return (
        <>
            <Header/>
            <HomePage/>
            <Footer/>
        </>
    )
}