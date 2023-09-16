import { useState } from "react"
import { Button } from "@mui/material";
import { HelloWorld } from "../../shared/components/helloWorld/HelloWorld";

import "./style.css";

export const Home = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
		setClicks(clicks + 1);
	}

	return (
		<>
			<div className="top-container">
				<HelloWorld />
				<Button variant="contained" onClick={handleClick}>
					Clicks: {clicks}
				</Button>
			</div>
		</>
	);
}