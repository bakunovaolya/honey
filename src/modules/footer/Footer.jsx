import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className='footerWrapper'>
				<div className='footer'>© Натуральный мед</div>

			</div>
		);
	}
}

export default Footer;
