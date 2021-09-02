import React from 'react';
import styled from 'styled-components';
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

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
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.clrText};

	@media(max-width: 720px) {
		width: 75%;
	}
`;

const SectionTitle = styled.h2 `
	width: 100%;
	text-align: left;
	font-size: 1.5em;

	@media(min-width: 1500px) {
		font-size: 1.8em;
	}
`;

const Text = styled.p `
	width: 100%;
	text-align: center;
	font-size: 1em;

	@media(min-width: 1500px) {
		font-size: 1.2em;
	}
`;

const Link = styled.a `
	text-decoration: none;
	color: ${props => props.theme.clrPrimary};
	cursor: pointer;
`;

const SocialList = styled.ul `
	width: 100%;
	text-align: center;
`;

const SocialItem = styled.li `
	display: inline-block;
	margin: 0.5em;
	margin-top: 0;

	& svg {
		color: ${props => props.theme.clrPrimary};
		font-size: 20px;
		vertical-align: bottom;
	}
`;

const SocialLink = styled.a `
	font-size: 0.8em;
	color: ${props => props.theme.clrText};
	text-decoration: none;
	transition: .3s;

	@media(min-width: 1500px) {
		font-size: 1em;
	}

	&:hover {
		color: ${props => props.theme.clrPrimary};
	}
`

const Address = styled.p `
	padding-top: 3rem;
`

function Contact() {
    return (
        <Container id="contact">
			<Content>
				<Title>Contact me</Title>
				<Row>
					<Col>
						<SectionTitle>Get in touch</SectionTitle>
						<Text>
							<Link href="mailto:sssessarego72@gmail.com">ssessarego72@gmail.com</Link>&nbsp;or&nbsp; 
							<Link href="tel:+541170197297">+54 11 7019-7297</Link>
						</Text>
						<SectionTitle>Or find me in Social Media</SectionTitle>
						<SocialList>
							<SocialItem>
								<AiOutlineGithub />&nbsp;
								<SocialLink href="https://github.com/nuwandaa" target="_blank">Github</SocialLink>
							</SocialItem>
							<SocialItem>
								<AiOutlineLinkedin />&nbsp;
								<SocialLink href="#" target="_blank">Linkedin</SocialLink>
							</SocialItem>
							<SocialItem>
								<AiOutlineTwitter />&nbsp;
								<SocialLink href="https://twitter.com/SantiagoSessar1" target="_blank">Twitter</SocialLink>
							</SocialItem>
							<SocialItem>
								<AiOutlineInstagram/>&nbsp;
								<SocialLink href="https://instagram.com/santisessarego" target="_blank">Instagram</SocialLink>
							</SocialItem>
						</SocialList>
					</Col>
				</Row>
				<Row>
					<Col>
						<Address>
							<Link>Bicentenary Avenue, Merlo, Buenos Aires, Argentina</Link>
						</Address>
					</Col>
				</Row>
			</Content>
		</Container>
    )
}

export default Contact