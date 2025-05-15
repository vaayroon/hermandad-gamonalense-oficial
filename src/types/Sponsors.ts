type SponsorId =
	| "huayucachi"
	| "celebraperu"
	| "notiwanka"
	| "bandazapatitosblancos"

type SponsorName =
	| "Municipalidad Huayucachi"
	| "Celebra Perú"
	| "NotiWanka"
	| "Banda Zapatitos Blancos"

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