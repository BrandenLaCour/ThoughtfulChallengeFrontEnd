import { useState } from "react";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import "./App.css";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [message, setMessage] = useState("");

	return (
		<div className="App-header">
			{loggedIn ? (
				<LandingPage message={message} />
			) : (
				<LoginPage
					message={message}
					setMessage={setMessage}
					setLoggedIn={setLoggedIn}
				/>
			)}
		</div>
	);
}

export default App;
