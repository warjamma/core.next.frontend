import { IImageInterface } from "./i.image.interface";

export interface IAmenityInterface {
    id: string;
    isActive: boolean;
    image: IImageInterface;
    translations: IAmenityTranslationInterface[];
    translated?: IAmenityTranslationInterface;
}

export interface IAmenityTranslationInterface {
    id: string;
    locale: string;
    description: string;
    name: string;
}
