import { IImageInterface } from "./i.image.interface";
import { IBlogCategoryInterface } from "app/Landing/interfaces/i.blog.category.interface";

export interface IBlogInterface {
    id: string;
    isActive: boolean;
    image: IImageInterface;
    blogCategory: IBlogCategoryInterface;
    translations: IBlogTranslationInterface[];
    translated?: IBlogTranslationInterface;
    createdAt?: string;
    updatedAt?: string;
}

export interface IBlogTranslationInterface {
    id: string;
    locale: string;
    name: string;
    content: string;
}
