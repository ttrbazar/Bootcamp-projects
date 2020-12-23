import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button
				onClick={this.props.chooseColor}
				className={this.props.isLight ? "light-button" : "dark-button"}>
				Refresh
				{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;