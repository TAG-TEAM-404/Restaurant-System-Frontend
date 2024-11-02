export interface IItem {
  id?: number;
  name: string;
  category: string;
  imageSrc: string;
  price: number;
  status: string;
  hasOffer?: boolean;
  quantity?: number;
}
