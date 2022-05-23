import axios from "axios";
import React, { useState } from "react";
import * as S from "./style";

function Input() {
	const [value, setValue] = useState(true);
	const [url, setUrl] = useState("");
	const [urlCurta, setUrlCurta] = useState("sd");
	const [vazioAlert, setVazioAlert] = useState({
		opacidade: "0",
		top: "50px",
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUrl(e.target.value);
	}

	function handleEncurtar() {
		if (url === "") {
			setVazioAlert({
				opacidade: "1",
				top: "10px",
			});

			setTimeout(() => {
				setVazioAlert({
					opacidade: "0",
					top: "50px",
				});
			}, 4000);
			return;
		}
		setValue(false);

		handleApi();
	}


	async function handleApi() {
		const { data } =  await axios.post("http://localhost:5000/shorten", {
			originURL: url,
		});
        setUrlCurta(data.shortURL);
    }


	return (
		<S.Form>
			<input
				type="text"
				placeholder="Cole sua URL"
				onChange={(e) => handleChange(e)}
			/>
			{value ? (
				<p style={{ opacity: 0 }}>a</p>
			) : (
				<p>
					<strong>URL Curta:</strong>{" "}
					<a  target="_blank" href={urlCurta}>{urlCurta}</a>
				</p>
			)}

			<button onClick={() => handleEncurtar()}>
				{value ? "Encurtar URL" : "Copiar URL curta"}
			</button>

			<S.Box
				textOpacity={vazioAlert.opacidade}
				marginTop={vazioAlert.top}
			>
				O campo de URL está vazio
			</S.Box>
		</S.Form>
	);
}

export default Input;
