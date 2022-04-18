import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./../homepage/footerstyles";

const Footer = () => {
	return (
		<Box>
			<Container>
				<img
					src={require("./../../../static/assets/uniphore-wavy-icon1.svg")}
				/>
				<Row>
					<Column>
						<Heading>Products</Heading>
						<FooterLink
							href="https://www.uniphore.com/x-platform/"
							target="_blank"
						>
							X Platform
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/u-self-serve/"
							target="_blank"
						>
							U-Self Serve
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/u-trust/"
							target="_blank"
						>
							U-Trust
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/u-assist/"
							target="_blank"
						>
							U-Assist
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/u-analyze/"
							target="_blank"
						>
							U-Analyze
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/q-for-sales/"
							target="_blank"
						>
							Q for Sales
						</FooterLink>
					</Column>

					<Column>
						<Heading>Company</Heading>
						<FooterLink
							href="https://www.uniphore.com/"
							target="_blank"
						>
							Company Home
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/partners/"
							target="_blank"
						>
							Partners
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/support/"
							target="_blank"
						>
							Contact Support
						</FooterLink>
					</Column>

					<Column>
						<Heading>Information</Heading>
						<FooterLink
							href="https://www.uniphore.com/insights/"
							target="_blank"
						>
							Resources
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/blog/"
							target="_blank"
						>
							Blog
						</FooterLink>
						<FooterLink
							href="https://www.uniphore.com/security/"
							target="_blank"
						>
							Security
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
