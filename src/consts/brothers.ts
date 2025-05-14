import { type Brother } from "@/types/Brother"

const calculateAge = (birthDate: Date): number => {
	return new Date(new Date().getTime() - birthDate.getTime()).getFullYear() - 1970
}

const isAlly = (ally: Brother, currentBrother: Brother): boolean => {
	if (!Array.isArray(ally.versus)) {
		return false
	}
	
	return ally.versus.every((opponent) => 
		currentBrother.versus.includes(opponent)
	) && ally.id !== currentBrother.id
}

const addGetters = (brothers: Brother[]): Brother[] => {
	return brothers.map((b) => ({
		...b,
		get age() {
			return calculateAge(this.birthDate)
		},
		get allies() {
			return brothers
				.filter(ally => isAlly(ally, this))
				.map(ally => ally.id)
		}
	}))
}

export const BROTHERS: Brother[] = addGetters([
	{
		id: "kevincondorromero",
		name: "Vaayroon",
		realName: "Bryan Kevin Cóndor Romero",
		birthDate: new Date(1996, 4, 12),
		height: 1.74,
		age: 28,
		weight: 86,
		country: "pe",
		versus: "panocondorlopez",
		guard: "Derecha",
		reach: 164,
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
		yearsElite: [],
	},
	{
		id: "panocondorlopez",
		name: "Pequeño Tuyico",
		realName: "Sthephano Cóndor Lopez",
		birthDate: new Date(2001, 9, 19),
		height: 1.75,
		age: 23,
		weight: 82,
		country: "pe",
		versus: "kevincondorromero",
		guard: "Derecha",
		reach: 165,
		socials: {
			twitch: "https://www.facebook.com/sthephano.condor",
			instagram: "https://instagram.com/tefano01",
			twitter: "https://www.facebook.com/sthephano.condor",
			youtube: "https://www.facebook.com/sthephano.condor",
			tiktok: "https://tiktok.com/@sthephanocl",
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
		yearsElite: [],
	}
] as const)