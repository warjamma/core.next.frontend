import { IFaqInterface } from "./i.faq.interface";

export interface IFaqCategoryInterface {
    id: string;
    isActive: boolean;
    translations: IFaqCategoryTranslationInterface[];
    translated?: IFaqCategoryTranslationInterface;
    faqs: IFaqInterface[];
}

export interface IFaqCategoryTranslationInterface {
    id: string;
    locale: string;
    name: string;
}
