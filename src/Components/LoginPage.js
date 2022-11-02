import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { useState } from "react";

const apiUrl = "https://a3wvmv8p9g.execute-api.us-east-1.amazonaws.com/";

const LoginPage = ({ setLoggedIn, setMessage, message }) => {
	const [emailInput, setEmailInput] = useState("");
	const [passInput, setPassInput] = useState("");
	const [OTPInput, setOTPInput] = useState("");

	const handleEmailChange = (event) => {
		setEmailInput(event.target.value);
		if (message) {
			setMessage("");
		}
	};

	const handlePassChange = (event) => {
		setPassInput(event.target.value);
	};

	const handleOTPChange = (event) => {
		setOTPInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (OTPInput) {
			const passwordResponse = axios.post(apiUrl + "get-email", {
				email: OTPInput,
			});
			passwordResponse
				.then((data) => {
					if (data.status === 200) {
						setMessage("Check your email for your OTP");
						setOTPInput("");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			const validationResponse = axios.post(apiUrl + "validate-password", {
				email: emailInput,
				password: passInput,
			});
			validationResponse
				.then((data) => {
					if (data.status === 200) {
						setLoggedIn(true);
						setMessage(`Welcome ${emailInput}`);
					}
					//validate data is good and put logged in
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<div>
			<Card
				style={{
					width: "30rem",
					padding: "20px",
					backgroundColor: "#055C9D",
					fontSize: ".9rem",
					marginBottom: "10px",
				}}
			>
				<Form onSubmit={handleSubmit}>
					<h4>CyberAlbum Login</h4>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							className="mb-2"
							value={emailInput}
							onChange={handleEmailChange}
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							className="mb-2"
							value={passInput}
							onChange={handlePassChange}
							placeholder="Password"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Retrieve a One Time Password</Form.Label>
						<Form.Control
							type="email"
							className="mb-2"
							value={OTPInput}
							aria-describedby="emailHelp"
							onChange={handleOTPChange}
							placeholder="Enter email"
						/>
					</Form.Group>
					<Button
						style={{ marginTop: "2%" }}
						type="submit"
						className="btn btn-primary"
					>
						Submit
					</Button>
					<Form.Group>
						<Form.Label className="mt-2" style={{ color: "white" }}>
							{message ? message : null}
						</Form.Label>
					</Form.Group>
				</Form>
			</Card>
		</div>
	);
};

export default LoginPage;
