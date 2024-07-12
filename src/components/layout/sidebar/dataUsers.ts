import { IUser } from "../../../types";
import NazariiDzhamanPhoto from "../../../img/Nazarii_Dzhaman.jpg";
import BrendanEichPhoto from "../../../img/Brendan_Eich.jpg";
import BillGatesPhoto from "../../../img/Bill_Gates.jpg";
import SolomonHykesPhoto from '../../../img/Solomon_Hykes.jpg';

export const users: IUser[] = [
	{
		id: '45366',
		avatar: NazariiDzhamanPhoto,
		name: "Nazarii Dzhaman",
		isOnline: true,
	},
	{
		id: '84740',
		avatar: BrendanEichPhoto,
		name: "Brendan Eich",
		isOnline: false,
	},
	{
		id: '49647',
		avatar: BillGatesPhoto,
		name: "Bill Gates",
		isOnline: true,
	},
	{
		id: '94638',
		avatar: SolomonHykesPhoto,
		name: "Solomon Hykes",
		isOnline: false,
	},
];