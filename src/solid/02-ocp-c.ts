// import axios from "axios";

export class HttpClient {
	// with axios
	// async get(url: string) {
	// 	const { data, status } = await axios.get(url);
	// 	return { data, status };
	// }

	async get(url: string) {
		const response = await fetch(url);

		const data = response.json();
		const status = response.status;

		return { data, status };
	}
}
