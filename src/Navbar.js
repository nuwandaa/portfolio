import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

const Wrapper = styled.div `
	width: 100%;
	height: 100%;
	background: transparent;
`;

const Container = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	z-index: 99;
	transition: .3s;
	width: calc(100% - 10rem);
	min-height: 3rem;
	position: fixed;
	top: 0;
	background: transparent;

	&.sticky {
		background: ${props=>props.theme.clrSecondary};
		opacity: 0.95;
	}

`;

const Logo = styled.div `
`;

const LogoLink = styled.a `
	font-weight: 700;
	font-size: 1.1em;
	letter-spacing: 2px;
	text-decoration: none;
	color: ${props=>props.theme.clrPrimary};

	@media(min-width: 1500px) {
		font-size: 1.3em;
	}
`;

const List = styled.ul `
	list-style: none;

	@media(max-width: 1024px) {
		display: none;
	}
`

const ListItem = styled.li `
	display: inline;
	margin-left: 2rem;
`;

const Link = styled.a `
	text-decoration: none;
	color: ${props=>props.theme.clrText};
	padding: 10px 12px;
	border-radius: 5px;
	border: 1px solid transparent;

	font-size: 1em;

	@media(min-width: 1500px) {
		font-size: 1.1em;
	}

	&:hover {
		border: 1px solid ${props=>props.theme.clrText};
	}
`;

const MenuBtn = styled.button `

	display: none;
	border: 1px solid white;
	border-radius: 5px;
	padding: 10px 16px;
	color: white;
	background: transparent;
	transition: .3s;

	&:hover {
		background: white;
		color: ${props => props.theme.clrSecondary};
		border: 1px solid ${props => props.theme.clrPrimary};
	}

	@media(max-width: 1024px) {
		display: block;
	}
`;

function Navbar(props) {

    const [sticky, setSticky] = useState(false);

    const checkScroll = () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    const toggleNav = () => props.setExpand(!props.expand);

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
    });

    return (
        <Wrapper>
        <Container className={sticky ? 'sticky' : ''}>
			<Logo>
				<LogoLink href="#">Santiago Sessarego</LogoLink>
			</Logo>
			<List>
				{/*<ListItem><Link href="#">Home</Link></ListItem>*/}
				<ListItem><Link href="#about">About</Link></ListItem>
				<ListItem><Link href="#projects">Projects</Link></ListItem>
				<ListItem><Link href="#contact">Contact</Link></ListItem>
			</List>
			<MenuBtn onClick={toggleNav}><AiOutlineMenu /></MenuBtn>
		</Container>
		</Wrapper>
    )
}

export default Navbar