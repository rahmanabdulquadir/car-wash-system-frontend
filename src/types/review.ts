import { TUser } from "./user";

export interface IReview {
  _id: string;
  user: TUser;
  comment: string;
  rating: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}