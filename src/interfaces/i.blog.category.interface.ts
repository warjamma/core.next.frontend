export interface IBlogCategoryInterface {
    id: string;
    isActive: boolean;
    translations: IBlogCategoryTranslationInterface[];
    translated?: IBlogCategoryTranslationInterface;
}

export interface IBlogCategoryTranslationInterface {
    id: string;
    locale: string;
    name: string;
}
