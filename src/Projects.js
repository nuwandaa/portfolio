import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
	width: 100%;
	height: 100%;
	background: ${props => props.theme.clrPrimary};
	padding-bottom: 8rem;
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
	color: ${props => props.theme.clrSecondary};
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

	@media(max-width: 1200px) {
		flex-direction: column;
	}
`;

const Col = styled.div `
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 40%;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	&:nth-child(even) {
		flex-direction: row-reverse;
	}

	@media(max-width: 1200px) {
		width: 75%;
		flex-direction: column !important;
	}

`;

const ColLeft = styled.div `
	width: 50%;

	@media(max-width: 1200px) {
		width: 100%;
		text-align: center;
	}
`;

const ColRight = styled.div `
	width: 50%;
	margin-top: 2.5rem;
	@media(max-width: 1200px) {
		width: 100%;
		text-align: center;
	}
`;

const ProjectTitle = styled.h2 `
	color: ${props=>props.theme.clrSecondary};
	font-size: 1.5em;

	@media(min-width: 1500px) {
		font-size: 1.7em;
	}
`;

const ProjectDescription = styled.p `
	color: ${props=>props.theme.clrText};
	font-size: 0.9em;

	@media(min-width: 1500px) {
		font-size: 1.1em;
	}
`;

const Uses = styled.p `
	font-size: 0.8em;
	width: 100%;
	font-weight: bolder;
	color: ${props=>props.theme.clrSecondary};
	text-align: left;
	margin-bottom: 2rem;

	@media(min-width: 1500px) {
		font-size: 1em;
	}

	@media(max-width: 1200px) {
		text-align: center;
	}
`;

const ProjectLink = styled.a `
	border: 1px solid ${props => props.theme.clrSecondary};
	background-color: transparent;
	color: ${props => props.theme.clrSecondary};
	padding: 6px 12px;
	font-size: 1em;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;
	text-decoration: none;

	@media(min-width: 1500px) {
		font-size: 1.1em;
	}

	&:hover {
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		background-color: ${props => props.theme.clrSecondary};
		color: ${props => props.theme.clrPrimary};
	}
`
const ProjectImage = styled.div `
	width: 200px;
	height: 150px;
	border: 5px solid ${props => props.theme.clrSecondary};
	border-radius: 10px;
	background: url("${props => props.url}") no-repeat top center;
	background-size: cover;
	margin: 0 auto;

	@media(max-width: 1200px) {
		width: 300px;
	}
`;

const MoreBtn = styled.a `	
	border: 1px solid ${props => props.theme.clrSecondary};
	background-color: ${props => props.theme.clrSecondary};
	color: ${props => props.theme.clrPrimary};
	padding: 6px 12px;
	font-size: 1em;
	border-radius: 5px;
	cursor: pointer;
	position: absolute;
	transition: .3s;
	bottom: 3rem;

	@media(min-width: 1500px) {
		font-size: 1.1em;
	}

	&:hover {
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		color: ${props=>props.theme.clrText};
	}
`;

function Projects() {
    return (
        <Container id="projects">
			<Content>
				<Title>Projects</Title>
				<Row>
					<Col>
						<ColLeft>
							<ProjectTitle>Algo - Pathfinding Visualizer</ProjectTitle>
							<ProjectDescription>
							A graphical pathfinder implementing algorithms like A* or Dijkstra's coded in Javascript
							</ProjectDescription>
							<Uses>Uses: React - Javascript - CSS</Uses>
							<ProjectLink href="https://nuwandaa.github.io/algos/" target="_blank">View Project</ProjectLink>
						</ColLeft>
						<ColRight>
							<ProjectImage url="./assets/img/Algo Path Search Visualizer - Santiago Sessarego.png"></ProjectImage>
						</ColRight>
					</Col>
					<Col>
						<ColLeft>
							<ProjectTitle>Tattoo Shop</ProjectTitle>
							<ProjectDescription>
							Full responsive minimalistic website with light and dark mode for a tattoo company 
							</ProjectDescription>
							<Uses>Uses: React - NodeJs(Express) - MongoDB</Uses>
							<ProjectLink href="https://nuwandaa.github.io/tattoo/" target="_blank">View Project</ProjectLink>
						</ColLeft>
						<ColRight>
							<ProjectImage url="./assets/img/Tattoo Shop - Santiago Sessarego.png"></ProjectImage>
						</ColRight>
					</Col>
				</Row>
				<Row>
					<Col>
						<ColLeft>
							<ProjectTitle>Lykos Blog</ProjectTitle>
							<ProjectDescription>
							Colaborative blog with a complete user authentication system and CRUD database implementation
							</ProjectDescription>
							<Uses>Uses: Django - Python - SQLite</Uses>
							<ProjectLink>View Project</ProjectLink>
						</ColLeft>
						<ColRight>
							<ProjectImage url="./assets/img/Lykos Blog - Santiago Sessarego.jpg"></ProjectImage>
						</ColRight>
					</Col>
					<Col>
						<ColLeft>
							<ProjectTitle>Tennis Coach Portfolio</ProjectTitle>
							<ProjectDescription>
							A beautiful responsive portfolio made with AngularJs to a tennis coach
							</ProjectDescription>
							<Uses>Uses: Angular - Django - MySQL</Uses>
							<ProjectLink>View Project</ProjectLink>
						</ColLeft>
						<ColRight>
							<ProjectImage url="./assets/img/Tennis Coach Portfolio - Santiago Sessarego.png"></ProjectImage>
						</ColRight>
					</Col>
				</Row>
				<MoreBtn>More Projects</MoreBtn>
			</Content>
		</Container>
    )
}

export default Projects