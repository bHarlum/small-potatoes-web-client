
export interface BaseItem {
  title: string,
  description: string,
}

export interface Item extends BaseItem {
  scores: Record<string, number>,
  id: string,
}

export type NewRoomPayload = {
  owner: string;
  items: BaseItem[];
}

export type NewRoomResponse = {
  id: string;
}

export type GetRoomPayload = {
  id: string;
}

export type GetRoomResponse = {
  id: string;
  items: Item[];
  currentItem: number;
  owner: string;
  ownerId: string;
}

export type EstimatePayload = {
   estimation: number;
   userId: string;
   roomId: string;
}

export type EstimateResponse = void