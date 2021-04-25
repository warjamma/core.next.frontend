import { IImageInterface } from "./i.image.interface";
import { IRoomTypeTranslationInterface } from "./i.room.type.interface";
import { IAmenityInterface } from "./i.amenity.interface";

export interface IBuildingInterface {
    id: string;
    isActive: boolean;
    address: string;
    email: string;
    hotline: string;
    name: string;
    slug: string;
    translations?: IBuildingTranslationInterface[];
    translated?: IBuildingTranslationInterface;
    amenities?: IBuildingAmenityInterface[];
    image?: IImageInterface;
    images?: IBuildingImageInterface[];
    roomTypes?: IBuildingRoomTypeInterface[];
}

export interface IBuildingTranslationInterface {
    id: string;
    locale: string;
    description: string;
    name: string;
}

export interface IBuildingRoomTypeInterface {
    id: string;
    position: number;
    translations: IRoomTypeTranslationInterface[];
    translated?: IRoomTypeTranslationInterface;
}

export interface IBuildingImageInterface {
    id: string;
    position: number;
    image: IImageInterface;
}

export interface IBuildingAmenityInterface {
    id: string;
    position: number;
    amenity: IAmenityInterface;
}
