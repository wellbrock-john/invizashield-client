import config from "../config";
import TokenService from "./token-service";

const AuthApiService = {
	postUser(user) {
		return fetch(`${config.API_ENDPOINT}/users`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postLogin(user) {
		return fetch(`${config.API_ENDPOINT}/auth/login`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postVehicle(vehicle) {
		return fetch(`${config.API_ENDPOINT}/vehicles`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json",
				"content-type": "application/json",
			},
			body: JSON.stringify(vehicle),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},

	deleteVehicle(id) {
		return fetch(`${config.API_ENDPOINT}/vehicles/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then((res) => {
				if (!res.ok) return res.json().then((error) => Promise.reject(error));
			})
			.catch((error) => {
				console.error(error);
			});
	},

	putVehicle(vehicle, id) {
		return fetch(`${config.API_ENDPOINT}/vehicles/${id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json",
				"content-type": "application/json",
			},
			body: JSON.stringify(vehicle, id),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},

	putUser(user, id) {
		return fetch(`${config.API_ENDPOINT}/users/${id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json; charset=UTF-8",
				"content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(user, id),
		}).then((res) => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.ok;
		});
	},

	refreshToken() {
		return fetch(`${config.API_ENDPOINT}/auth/login`, {
			method: "PUT",
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
};

export default AuthApiService;
