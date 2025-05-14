export interface Brother {
	id: string
	name: string
	birthDate: Date
	age: number
	gallery?: boolean
	realName: string
	weight?: number
	height: number
	country: string
	countryName?: string
	versus: string | string[]
	guard?: string
	reach?: number
	socials: {
		twitch?: string
		instagram?: string
		twitter?: string
		youtube?: string
		tiktok?: string
	}
	clips?: Array<{
		text: string
		url: string
	}>
	workout?: {
		videoID: string
		thumbnail: string
		name: string
	}
	rotate?: boolean
	yearsElite?: number[]
}