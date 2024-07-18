export interface IProduct {
  id: number;
  name: string;
  category: string;
  brand: string;
  imageURL: string;
  description: string;
  status: string;
  rating: number;
  originalPrice: number;
  discount: number;
  updatedPrice: number;
  section?: string;
  colors?: string[];
  images?: string[];
}
