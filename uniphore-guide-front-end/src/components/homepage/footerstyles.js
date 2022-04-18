import styled from "styled-components";

export const Box = styled.div`
	padding: 60px 10px;
	background: #181818;
	bottom: 0;
	width: 100%;

	img {
		width: 110px;
		justify-content: center;
		align-items: center;
		margin-bottom: 45px;
	}

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 10px auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 13px;
	text-decoration: none;

	&:hover {
		color: #d40f7d;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 15px;
	color: #fff;
	margin-bottom: 45px;
	font-weight: bold;
`;
