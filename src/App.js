import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { AiOutlineArrowUp } from 'react-icons/ai';

import themes from './themes';

import FullscreenNav from './FullscreenNav';
import Navbar from './Navbar';
import Headline from './Headline';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const Container = styled.div `
    background: ${props => props.theme.clrPrimary};
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
`;

const ScrollTopBtn = styled.button `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
    background: white;
    z-index: 99; 
    padding: .25em;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        color: ${props => props.theme.clrPrimary};
        font-size: 20px;
    }

    &:hover {
        box-shadow: none;
    }
`;


function App() {

    const [theme, setTheme] = useState('lightblue');
    const [fixedBtn, setFixedBtn] = useState('false');
    const [fullscreenNav, setFullscreenNav] = useState(false);

    const checkScroll = () => {
        if (window.pageYOffset > 300) {
            setFixedBtn(true);
        } else {
            setFixedBtn(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
    });

    return (
        <ThemeProvider theme={themes[theme]}>
            <Container>
                <FullscreenNav expand={fullscreenNav} setExpand={setFullscreenNav} />
                <Navbar expand={fullscreenNav} setExpand={setFullscreenNav} />
                <Headline />
                <About />
                <Projects />
                <Contact />
                { fixedBtn ? <ScrollTopBtn onClick={scrollToTop}><AiOutlineArrowUp/></ScrollTopBtn> : null}
            </Container>
        </ThemeProvider>
    );
}

export default App;