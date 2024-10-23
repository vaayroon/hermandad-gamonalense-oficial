type SponsorId =
	| "huayucachi"

type SponsorName =
	| "Municipalidad Huayucachi"

export interface Sponsors {
	id: SponsorId
	name: SponsorName
	url: string
	logo: {
		name?: string
		width: number
		height: number
	}
}