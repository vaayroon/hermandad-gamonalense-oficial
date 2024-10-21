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
		height: 1.75,
		age: 28,
		weight: 86,
		country: "es",
		versus: "plex",
		guard: "Derecha",
		reach: 165,
		socials: {
			twitch: "https://twitch.tv/vaayroontv",
			instagram: "https://instagram.com/kevincr99",
			twitter: "https://twitter.com/kevinprincecr",
			youtube: "https://youtube.com/vaayroon",
			tiktok: "https://tiktok.com/@vaayroon",
		},
		workout: {
			videoID: "A_EDoq70XqY",
			thumbnail: "/boxers/workoutThumbnails/el-mariana.webp",
			name: "Vaayroon",
		},
		clips: [
			{
				text: "El combate lo verá mi madre. Voy a ir con todo, voy a ganar",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=W6h8FwdZR6NlmJ08&amp;clip=UgkxZSsrfj0sR_gZ802CbVtT2F9SKtj1OxKW&amp;clipt=ENnv5AUY8eTlBQ",
			},
			{
				text: "Cuanto más alto, más fácil va a ser que le entre un gancho",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=AAnuIiM4FcI4uFLu&amp;clip=Ugkx-2lQ3J2MyKiOppp0UnGVO2APKh-r4cnS&amp;clipt=EMSw5wUY3KXoBQ",
			},
		],
	},
] as const)