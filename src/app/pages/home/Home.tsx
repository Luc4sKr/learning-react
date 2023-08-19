import { HelloWorld } from "../../shared/components/helloWorld/HelloWorld";
import { Message }  from "../../shared/components/message/Message";

import Button from '@mui/material/Button';

import { useState } from "react";

export const Home = () => {
    var [clicks, setClicks] = useState(0);

	return (
		<div>
			<HelloWorld />
			<Message name="Lucas"/>
			<Button
			onClick={() => { setClicks(clicks += 1) }}
			variant="contained">Clicks: {clicks}</Button>
		</div>
	);
}