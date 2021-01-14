import React, { Component } from "react";
import ReactPlayer from "react-player";
import carzmedicsLogo from "../../components/images/Logo/z-logo-1_1.png";
import "./ServicesRoute.css";

export default class ServicesRoute extends Component {
	render() {
		return (
			<section className="ServicesRoute" id="Route">
				<div>
					<h2 className="greeting">{"Products & Services"}</h2>
				</div>
				<div className="arch-div">
					<h3>
						<a
							className="xpel-link"
							href="https://www.xpel.com/shop/paint-protection-film"
						>
							{" "}
							XPEL Ultimate
						</a>
					</h3>
					<h5>Paint Protection Film (clear bra)</h5>
					<div className="services-div">
						<p className="vid-description">
							Installation <i className="fas fa-long-arrow-alt-down" />
						</p>
						<ReactPlayer
							url="https://youtu.be/6cvhsxaDyAE"
							width="260px"
							height="260px"
						/>
						<br />
						<p className="vid-description">
							Removal <i className="fas fa-long-arrow-alt-down" />
						</p>
						<ReactPlayer
							url="https://youtu.be/f4bM9I-ajII"
							width="260px"
							height="260px"
						/>
					</div>
					<br />
					<h3 style={{ margin: "2rem" }}>
						We do it right, so that you won't know it's there until it's doing
						it's job.
					</h3>
				</div>
				<div className="arch-div">
					<h3 className="cp-h3">CeramicPro</h3>
					<h5>
						Installation by:
						<br />
						<br />
						<a className="carzmedics-link" href="https://www.carzmedics.com/">
							<img
								src={carzmedicsLogo}
								alt="Ceramic Coating Ohio | Ceramic Pro Cincinnati | Paint Protection"
							/>
						</a>
					</h5>
					<div className="services-div">
						<p className="vid-description">
							How it will look <i className="fas fa-long-arrow-alt-down" />
						</p>
						<ReactPlayer
							url="https://youtu.be/Qnp-UeTge0Q"
							width="260px"
							height="260px"
						/>
					</div>
				</div>
			</section>
		);
	}
}
