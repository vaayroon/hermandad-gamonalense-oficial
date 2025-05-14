type SponsorId =
	| "huayucachi"
	| "celebraperu"
	| "notiwanka"

type SponsorName =
	| "Municipalidad Huayucachi"
	| "Celebra Perú"
	| "NotiWanka"

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