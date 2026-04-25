
export interface RoomFields {
  category: string;
  bedType: string;
  adults: number;
  children: number;
  squareType: number;

  number: number;

  name_ru: string;
  name_en: string;

  description_ru: string;
  description_en: string;

  numberOfBeds: number;

  price: number;

  historicalImage: string;
  
  air_conditioner?: boolean;
  bad?: boolean;
  bath?: boolean;
  bath_with_shower?: boolean;
  bathrobe?: boolean;
  dressing_table?: boolean;
  kettle?: boolean;
  slippers?: boolean;
  table_lamp?: boolean;
  telephone?: boolean;
  tv?: boolean;
  wifi?: boolean;
  armchair?: boolean;
  mini_bar?: boolean;
  electric_power?: boolean;
  shower?: boolean;

  beRoomType: string;
}

export interface Room {
  model: string;
  pk: number;
  fields: RoomFields;
}
const PAGE_SIZE = 4

export interface BookingInfo {
  adults:   number
  children: number
  start:    string|null
  end:      string|null
  roomId?:   number
}