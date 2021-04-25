export interface IFaqInterface {
    id: string;
    isActive: boolean;
    translations: IIFaqTranslationInterface[];
    translated?: IIFaqTranslationInterface;
    createdAt?: string;
}

export interface IIFaqTranslationInterface {
    id: string;
    locale: string;
    name: string;
    content: string;
}
