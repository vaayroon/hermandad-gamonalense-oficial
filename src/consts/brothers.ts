import { type Brother } from "@/types/Brother"

const addGetters = (brothers: Brother[]): Brother[] => {
	return brothers.map((b) => ({
		...b,
		get age() {
			return new Date(new Date().getTime() - this.birthDate.getTime()).getFullYear() - 1970
		},
		// El enemigo de mi enemigo es mi amigo
		get allies() {
			return brothers
				.filter(
					(ally) =>
						(Array.isArray(ally.versus)
							? ally.versus.every((opponent) => this.versus.includes(opponent))
							: false) && ally.id !== this.id
				)
				.map((ally) => ally.id)
		},
	}))
}

export const BROTHERS: Brother[] = addGetters([
	{
		id: "kevincondorromero",
		name: "Vaayroon",
		realName: "Bryan Kevin Condor Romero",
		birthDate: new Date(1996, 4, 12),
		height: 1.74,
		age: 28,
		weight: 86,
		country: "pe",
		versus: "panocondorlopez",
		guard: "Derecha",
		reach: 165,
		socials: {
			twitch: "https://twitch.tv/vaayroontv",
			instagram: "https://instagram.com/kevincr99",
			twitter: "https://twitter.com/kevinprincecr",
			youtube: "https://youtube.com/vaayroon",
			tiktok: "https://tiktok.com/@vaayroon",
		},
		clips: [
			{
				text: "They don not know me son",
				url: "",
			},
			{
				text: "Algunos personajes no van en la pelicula",
				url: "",
			},
		],
	},
	{
		id: "panocondorlopez",
		name: "Pequeño Tullico",
		realName: "Sthephano Condor Lopez",
		birthDate: new Date(2001, 9, 19),
		height: 1.75,
		age: 23,
		weight: 82,
		country: "pe",
		versus: "kevincondorromero",
		guard: "Derecha",
		reach: 165,
		socials: {
			twitch: "https://twitch.tv/vaayroontv",
			instagram: "https://instagram.com/kevincr99",
			twitter: "https://twitter.com/kevinprincecr",
			youtube: "https://youtube.com/vaayroon",
			tiktok: "https://tiktok.com/@vaayroon",
		},
		clips: [
			{
				text: "Cuanto mas grande el reto, mas grande la gloria",
				url: "",
			},
			{
				text: "Ganar, ganar, ganar y ganar",
				url: "",
			},
		],
	},
] as const)