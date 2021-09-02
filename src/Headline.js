import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Container = styled.div `
	width: 100%;
	height: 100%;
	background: ${props => props.theme.clrPrimary};
`;

const Content = styled.div `
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Title = styled.h1 `
	color: ${props => props.theme.clrSecondary};
	font-size: 2.5em;

	@media(min-width: 1500px) {
		font-size: 3.2em;
	}
`

const Subtitle = styled.p `
	color: ${props => props.theme.clrText};
	font-size: 1.1em;

	@media(min-width: 1500px) {
		font-size: 1.3em;
	}
`;

const Button = styled.a `
	position: absolute;
	bottom: 3rem;
	font-size: 2em;

	& svg {
	    color: ${props => props.theme.clrSecondary };
	}
`

function Headline(props) {
    return (
        <Container id="headline">
        	<Content>
        		<Title>Hi, I'm Santiago</Title>
        		<Subtitle>A self taught developer based in Buenos Aires</Subtitle>
        		<Button href="#about"><MdKeyboardArrowDown /></Button>
        	</Content>
        </Container>
    )
}

export default Headline