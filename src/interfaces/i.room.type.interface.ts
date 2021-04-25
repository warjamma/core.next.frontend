import { IImageInterface } from "./i.image.interface";
import { IBuildingInterface } from "./i.building.interface";

export interface IRoomTypeInterface {
    id: string;
    isActive: boolean;
    name: string;
    size: string;
    pricePerMonth: string;
    pricePerNight: string;
    building: IBuildingInterface;
    image: IImageInterface;
    images: IRoomTypeImageInterface[];
    translations: IRoomTypeTranslationInterface[];
    translated?: IRoomTypeTranslationInterface;
    createdAt?: string;
    updatedAt?: string;
}

export interface IRoomTypeTranslationInterface {
    id: string;
    locale: string;
    description: string;
}

export interface IRoomTypeImageInterface {
    id: string;
    position: number;
    image: IImageInterface;
}
