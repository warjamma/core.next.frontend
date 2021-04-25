import { IImageInterface } from "./i.image.interface";

export interface IQuoteInterface {
    id: string;
    customerName: string;
    image: IImageInterface;
    translations?: IQuoteTranslationInterface[];
    translated?: IQuoteTranslationInterface;
}

export interface IQuoteTranslationInterface {
    id: string;
    locale: string;
    description: string;
}
