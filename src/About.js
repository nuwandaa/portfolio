import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Container = styled.div `
	width: 100%;
	height: 100%;
	background: ${props => props.theme.clrSecondary};
	padding-bottom: 6rem;
	position: relative;
`;

const Content = styled.div `
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Title = styled.h1 `
	color: ${props => props.theme.clrPrimary};
	font-size: 2.5em;
	padding: 4rem 0;

	@media(min-width: 1500px) {
		font-size: 3em;
	}
`

const Row = styled.div `
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	@media(max-width: 720px) {
		flex-direction: column;
	}
`;

const Col = styled.div `
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 40%;
	justify-content: flex-start;
	align-items: center;
	margin: 2rem 0;

	@media(max-width: 720px) {
		width: 75%;
	}
`;

const Image = styled.img `
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 2rem;
	border: 2px solid ${props => props.theme.clrPrimary};
`;

const ButtonsContainer = styled.div `
	width: 50%;
	display: flex;
	justify-content: space-around;
	margin-top: 2rem;

	@media(max-width: 1200px) {
		width: 100%;
	}
`;

const Button = styled.button `
	border: 1px solid ${props => props.theme.clrPrimary};
	background-color: ${props => props.theme.clrPrimary};
	color: ${props => props.theme.clrSecondary};
	padding: 6px 12px;
	font-size: 16px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;

	@media(min-width: 1500px) {
		font-size: 18px;
	}

	&:hover {
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		color: white;
	}
`;

const ButtonSecondary = styled(Button)
`	color: ${props => props.theme.clrPrimary};
	background-color: transparent;
	transition: 0.3s;

	&:hover {
		background-color: ${props => props.theme.clrPrimary};
		color: ${props => props.theme.clrSecondary};
	}
`;


const Text = styled.p `
	color: ${props => props.theme.clrText};
	font-size: 1em;

	@media(min-width: 1500px) {
		font-size: 1.1em;
	}
`;

const Span = styled.span `
	color: ${props => props.theme.clrPrimary};
`;

const Link = styled.a `
	text-decoration: none;
	color: ${props => props.theme.clrPrimary};
	cursor: pointer;
`;

const TitleSecondary = styled.h2 `
	color: ${props => props.theme.clrPrimary};
	font-size: 2em;
	width: 100%;
	text-align: center;
`;

const List = styled.ul `

	column-count: 2;

	@media(max-width: 300px) {
		column-count: 1;
	}

`;

const ListItem = styled.li `
	list-style: none;
	color: ${props => props.theme.clrPrimary};
	font-size: 1.3em;
	line-height: 2;
	cursor: pointer;
	letter-spacing: 3px;
	transition: 0.3s;

	@media(min-width: 1500px) {
		font-size: 1.5em;
	}

	&:hover {
		color: ${props => props.theme.clrText}
	}
`;

const DownButton = styled.a `
	position: absolute;
	bottom: 2rem;
	font-size: 2em;

	& svg {
    color: ${props => props.theme.clrPrimary };
}
`
const BarList = styled.div `
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Bar = styled.div `
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	// @media(max - width: 1024 px) {
        // 	flex-direction: column;
        // }

        // @media(max-width: 720px) {
        // 	flex-direction: row;
        // }
`;

const BarTitle = styled.h5 `
	color: ${props => props.theme.clrText};
	width: 20%;

	font-size: 0.9em;

	@media(min-width: 1500px) {
		font-size: 1em;
	}

	@media(max-width: 1024px) {
		width: 25%;
	}
`;

const BarContainer = styled.div `
	background: rgba(255,255,255,0.1);
	justify-content: flex-start;
	border-radius: 100px;
	align-items: center;
	position: relative;
	padding: 0 5px;
	display: flex;
	height: 20px;
	width: 60%;

`;

const BarProgress = styled.span `
	box-shadow: 0 10px 40px -10px #fff;
	border-radius: 100px;
	background: ${props => props.theme.clrPrimary};
	height: 10px;
	width: ${props => props.value}%;
`;

function About() {
    return (
        <Container id="about">
			<Content>
				<Title>About Me</Title>
				<Row>
					<Col style={{'margin-bottom': 'auto'}}>
						<Image src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"></Image>
						<Text>
							I am an 18 year old self-taught developer with a passion
							for computer science, software development, and the world of technology.
							I am specialized in both <Span>frontend</Span> and <Span>backend web development</Span> , 
							thus being able to create from simple and aesthetic websites to building stable, scalable and efficient web applications.
							Being a <Span>hard-worker</Span>, <Span>dedicated</Span> and <Span>sociable</Span>, 
							I am looking for a challenge and willing to do my best to help you expand your business.
						</Text>
						<Text>So, if you want to reach more people with your entrepreneurship or have your own professional
						and attractive website, do not hesitate to <Link href="#contact">contact me!</Link></Text>
						<ButtonsContainer>
							<Button>See more</Button>
							<ButtonSecondary>Get resume/cv</ButtonSecondary>
						</ButtonsContainer>
					</Col>
					<Col>
						<TitleSecondary>Technologies I use</TitleSecondary>
						<List>
							<ListItem>Django</ListItem>
							<ListItem>NodeJs</ListItem>
							<ListItem>SQL</ListItem>
							<ListItem>Angular</ListItem>
							<ListItem>React</ListItem>
							<ListItem>MongoDB</ListItem>
							<ListItem>Git</ListItem>
							<ListItem>Laravel</ListItem>
						</List>
						<TitleSecondary>Programming Skills</TitleSecondary>
						<BarList>
							<Bar>
								<BarTitle>Python</BarTitle>
								<BarContainer>
									<BarProgress value={80}></BarProgress>
								</BarContainer>
							</Bar>
							<Bar>
								<BarTitle>Html & CSS</BarTitle>
								<BarContainer>
									<BarProgress value={90}></BarProgress>
								</BarContainer>
							</Bar>
							<Bar>
								<BarTitle>Javascript</BarTitle>
								<BarContainer>
									<BarProgress value={60}></BarProgress>
								</BarContainer>
							</Bar>
							<Bar>
								<BarTitle>C</BarTitle>
								<BarContainer>
									<BarProgress value={30}></BarProgress>
								</BarContainer>
							</Bar>
						</BarList>
					</Col>
				</Row>
				<DownButton href="#projects"><MdKeyboardArrowDown /></DownButton>
			</Content>
		</Container>
    )
}

export default About