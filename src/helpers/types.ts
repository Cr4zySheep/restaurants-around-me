export interface Position {
  lat: number;
  lng: number;
}

export enum Status {
  PENDING,
  DONE,
  ERROR,
}

export interface Place {
  title: string;
  id: string;
  position: Position;
  categories: Array<{ id: string; name: string }>;
  distance: number;
  address: {
    label: string;
  };
  foodTypes?: Array<{ id: string; name: string }>;
  openingHours?: Array<{ isOpen: boolean; text: string[] }>;
}
