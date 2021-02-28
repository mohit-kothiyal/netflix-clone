import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
	const [signIn, setSignIn] = useState(false);
	const emailValCheck = () => {
		let email = document.getElementById('emailInput').value;
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email
		)
			? (document.getElementById('emailError').style.display = 'none')
			: (document.getElementById('emailError').style.display = 'block');
	};

	const isEmpty = () => {
		let email = document.getElementById('emailInput').value;
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email
		)
			? setSignIn(true)
			: (document.getElementById('emailError').style.display = 'block');
	};

	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
					className="loginScreen__logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>
				<button className="loginScreen__button" onClick={() => isEmpty()}>
					Sign In
				</button>
				<div className="loginScreen__gradient" />
			</div>
			<div className="loginScreen__body">
				{signIn ? (
					<SignUpScreen email={document.getElementById('emailInput')} />
				) : (
					<>
						<h1>Unlimited movies, TV shows and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className="loginScreen__input">
							<form>
								<input
									id="emailInput"
									type="email"
									placeholder="Email Address"
									onChange={() => emailValCheck()}
								/>

								<button
									type="submit"
									onClick={() => isEmpty()}
									className="loginScreen__getStarted"
								>
									Get Started
								</button>
								<div
									id="emailError"
									className="inputError"
									data-uia="field-email+error"
									style={{ display: 'none' }}
								>
									Email is required.
								</div>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;
