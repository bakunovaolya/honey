import React, {Component} from 'react';
import './modal.css';
import ReactDOM from "react-dom";

class Modal extends Component {

	render() {
		return ReactDOM.createPortal(
			<div className='modal'>
				<div className='modalContent'>
					<div className='modalHeader'>
						<span className='closeModal' onClick={this.props.onClose}>
							x
						</span>
					</div>
					<form className='formOrder'>
						<input type='text' className='customerName' placeholder='Введите имя'/>
						<input type='text' className='customerTelephone' placeholder='Телефон'/>
						<input type='text' className='customerEmail' placeholder='Email'/>
						<input type='text' className='customerComment' placeholder='Комментарий'/>
						<button type='submit' className='buttonOrder'>Отправить</button>
					</form>

				{this.props.children}
				</div>
			</div>,
			document.getElementById('portal')
		);
	}
}




export default Modal;
