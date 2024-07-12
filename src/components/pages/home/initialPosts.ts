import { IPost } from "../../../types";
import BorysJohnsonPhoto from '../../../img/Boris_Johnson.jpg'

export const initialPosts: IPost[] = [
	{
		author: {
			id: '176572',
			avatar: BorysJohnsonPhoto,
			name: 'Peace for Ukraine',
			isOnline: true
		},
		createdAt: new Date(),
		content: 'Thank you for your interest.  We are a loose collective of like-minded musicians, hoping that our supporters will join together to help ease the suffering in war-torn Ukraine.',
	}
]