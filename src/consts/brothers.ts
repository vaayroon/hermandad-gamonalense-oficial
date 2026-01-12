import { type Brother } from "@/types/Brother"

const calculateAge = (birthDate: Date): number => {
	const today = new Date()
	let age = today.getFullYear() - birthDate.getFullYear()
	const monthDifference = today.getMonth() - birthDate.getMonth()
	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDate.getDate())
	) {
		age--
	}
	return age
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
  return brothers.map((b) => {
    const { birthDate } = b
    return {
      ...b,
      get age() {
        return calculateAge(birthDate)
      },
      get allies() {
        // ...existing logic...
        return BROTHERS.filter((ally) => isAlly(ally, b))
      }
    }
  })
}

export const BROTHERS: Brother[] = addGetters([
	{
		id: "kevincondorromero",
		name: "Vaayroon",
		realName: "Bryan Kevin Cóndor Romero",
		birthDate: new Date(1996, 3, 12),
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
		birthDate: new Date(2001, 8, 19),
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
	},
	{
		id: "diegocondorlopez",
		name: "Tuyico",
		realName: "Diego Cóndor Lopez",
		birthDate: new Date(1994, 7, 28),
		height: 1.73,
		age: 30,
		weight: 80,
		country: "pe",
		versus: "kevincondorromero",
		guard: "Derecha",
		reach: 162,
		socials: {
			twitch: "https://www.facebook.com/diegoo.condorlopez",
			instagram: "https://instagram.com/diegocl94",
			twitter: "https://www.facebook.com/diegoo.condorlopez",
			youtube: "https://www.facebook.com/diegoo.condorlopez",
			tiktok: "https://tiktok.com/@diegocl94",
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