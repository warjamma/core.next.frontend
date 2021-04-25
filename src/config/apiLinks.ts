export const RESOURCE_BUILDING_NAME = "building";
export const RESOURCE_ROOM_TYPE_NAME = "roomType";
export const RESOURCE_APPOINTMENT_NAME = "appointment";
export const RESOURCE_QUOTE_NAME = "quote";
export const RESOURCE_BLOG_NAME = "blog";
export const RESOURCE_BLOG_CATEGORY_NAME = "blogCategory";
export const RESOURCE_FAQ_NAME = "faq";
export const RESOURCE_FAQ_CATEGORY_NAME = "faqCategory";
export const RESOURCE_CONTACT_NAME = "contact";

const apiLinks = {
    [RESOURCE_BUILDING_NAME]: {
        findAll: `${RESOURCE_BUILDING_NAME}/findAll`,
        findOne: `${RESOURCE_BUILDING_NAME}/findOne`,
        findRoomTypes: `${RESOURCE_BUILDING_NAME}/findRoomTypes`,
        findById: `${RESOURCE_BUILDING_NAME}/:id`,
        create: `${RESOURCE_BUILDING_NAME}`,
        edit: `${RESOURCE_BUILDING_NAME}/:id`,
        delete: `${RESOURCE_BUILDING_NAME}/:id`,
    },
    [RESOURCE_ROOM_TYPE_NAME]: {
        findAll: `${RESOURCE_ROOM_TYPE_NAME}/findAll`,
        findOne: `${RESOURCE_ROOM_TYPE_NAME}/findOne`,
        findById: `${RESOURCE_ROOM_TYPE_NAME}/:id`,
        findOthers: `${RESOURCE_ROOM_TYPE_NAME}/findOthers/:id`,
        findAvailableHomePage: `${RESOURCE_ROOM_TYPE_NAME}/findAvailableHomePage`,
        findAvailableForRentPage: `${RESOURCE_ROOM_TYPE_NAME}/findAvailableForRentPage`,
        create: `${RESOURCE_ROOM_TYPE_NAME}`,
        edit: `${RESOURCE_ROOM_TYPE_NAME}/:id`,
        delete: `${RESOURCE_ROOM_TYPE_NAME}/:id`,
    },
    [RESOURCE_APPOINTMENT_NAME]: {
        findAll: `${RESOURCE_APPOINTMENT_NAME}/findAll`,
        findOne: `${RESOURCE_APPOINTMENT_NAME}/findOne`,
        getMinimumStays: `${RESOURCE_APPOINTMENT_NAME}/getMinimumStays`,
        findById: `${RESOURCE_APPOINTMENT_NAME}/:id`,
        create: `${RESOURCE_APPOINTMENT_NAME}`,
        edit: `${RESOURCE_APPOINTMENT_NAME}/:id`,
        delete: `${RESOURCE_APPOINTMENT_NAME}/:id`,
    },
    [RESOURCE_QUOTE_NAME]: {
        findAll: `${RESOURCE_QUOTE_NAME}/findAll`,
        findOne: `${RESOURCE_QUOTE_NAME}/findOne`,
        findById: `${RESOURCE_QUOTE_NAME}/:id`,
        create: `${RESOURCE_QUOTE_NAME}`,
        edit: `${RESOURCE_QUOTE_NAME}/:id`,
        delete: `${RESOURCE_QUOTE_NAME}/:id`,
    },
    [RESOURCE_BLOG_CATEGORY_NAME]: {
        findAll: `${RESOURCE_BLOG_NAME}/${RESOURCE_BLOG_CATEGORY_NAME}/findAll`,
    },
    [RESOURCE_BLOG_NAME]: {
        findAll: `${RESOURCE_BLOG_NAME}/${RESOURCE_BLOG_NAME}/findAll`,
        findById: `${RESOURCE_BLOG_NAME}/${RESOURCE_BLOG_NAME}/:id`,
        findOthers: `${RESOURCE_BLOG_NAME}/${RESOURCE_BLOG_NAME}/findOthers/:id`,
    },
    [RESOURCE_FAQ_CATEGORY_NAME]: {
        findAll: `${RESOURCE_FAQ_NAME}/${RESOURCE_FAQ_CATEGORY_NAME}/findAll`,
    },
    [RESOURCE_CONTACT_NAME]: {
        create: `${RESOURCE_CONTACT_NAME}`,
    },
};
export default apiLinks;
