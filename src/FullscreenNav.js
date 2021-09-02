import React from 'react';
import styled from 'styled-components';

const Container = styled.aside `
`;

const Section = styled.div `
	top: 0;
	bottom: 0;
  	position: absolute;
  	z-index: 5;

  	&.active {
		transform: translateY(0%);
		transform: translateX(0%);
	}
`;

const Left = styled(Section)
`
	display: none;
	width: 40%;
	left: 0;
	/*background-color: #ff5964;*/
	background-color: ${props=>props.theme.clrPrimary};
	-webkit-transform: translateY(-100%);
	-moz-transform: translateY(-100%);
	-ms-transform: translateY(-100%);
	-o-transform: translateY(-100%);
	transform: translateY(-100%);
	transition: transform 0.4s ease-in-out;

	@media (min-width: 992px) {
		display: block;
	}
`;

const Content = styled.div `
	margin-top: 150px;
	padding: 0 40px;
	position: relative;
	color: white;
	text-align: center;
`;

const Text = styled.p ``;
const Button = styled.button `
	display: inline-block;
	background-image: none;
	border: none;
	background-color: transparent;
	padding-bottom: 7px;
	position: relative;
	cursor: pointer;
	font-size: 20px;
	color: white;
	padding: 7px 50px;
	border: 2px solid white;
`;

const Right = styled(Section)
`
	position: fixed;
	width: 100%;
	right: 0;
	/*background-color: #38618c;*/
	background-color: ${props=>props.theme.clrSecondary};
	-webkit-transform: translateX(100%);
	-moz-transform: translateX(100%);
	-ms-transform: translateX(100%);
	-o-transform: translateX(100%);
	transform: translateX(100%);
	transition: transform 0.4s ease-in-out;

	@media (min-width: 992px) {
		width: 60%;
	}
`;

const List = styled.ul `
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: 150px;
	text-align: left;
	padding-left: 50px;
`;

const ListItem = styled.li `
	margin-bottom: 20px;
`;

const Link = styled.a `
	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		background-color: ${props=>props.theme.clrPrimary};
		left: 0;
		right: 0;
		height: 3px;
		border-radius: 3px;
	}

	&:before {
		border-radius: 3px;
		content: "";
		position: absolute;
		bottom: 0;
		background-color: #fff;
		left: 0;
		height: 3px;
		z-index: 1;
		width: 50%;
		-webkit-transition: transform 0.2s ease-in-out;
		-o-transition: transform 0.2s ease-in-out;
		transition: transform 0.2s ease-in-out;
	}

	&:hover:before {
		-webkit-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		transform: translateX(100%);
	}

	padding-bottom: 7px;
	color: #fff;
	text-decoration: none;
	font-size: 30px;
	position: relative;
	font-weight: 500;
`;

export default function FullscreenNav(props) {

    const toggleNav = () => props.setExpand(!props.expand);

    return (
        <Container onClick={toggleNav}>
			<Left className={props.expand ? 'active': ''}>
				<Content>
					<Text>(write an inspiring quote here)</Text>
					<Button>Santiago Sessarego</Button>
				</Content>
			</Left>
			<Right className={props.expand ? 'active': ''}>
				<List>
					<ListItem><Link href="#headline">Home</Link></ListItem>
					<ListItem><Link href="#about">About</Link></ListItem>
					<ListItem><Link href="#projects">Projects</Link></ListItem>
					<ListItem><Link href="#contact">Contact</Link></ListItem>
				</List>
			</Right >
		</Container>
    )
}