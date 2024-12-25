import { IUser } from './user.interface'

export interface IReview {
	id: string
	createdAt: string
	text: string
	raiting: number
	user: IUser
}

export interface IReviewInput extends Pick<IReview, 'raiting' | 'text'> {}
