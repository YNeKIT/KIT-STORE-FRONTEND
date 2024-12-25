export interface IMainStatistics {
	id: number
	name: string
	value: number
}

export interface IMonthSales {
	date: string
	value: number
}

export interface IlastUsers {
	id: string
	name: string
	email: string
	picture: string
	total: number
}

export interface IMiddleStatistics {
	monthlySales: IMonthSales[]
	lastUsers: IlastUsers[]
}
