export const phoneRegExp = /^[0-9]*$/;
export const VALIDATION_FORM_VARIANTS = {
    fullName: {
        min: 2,
        max: 30,
    },
    phoneNumber: {
        min: 10,
        max: 13,
    },
    content: {
        min: 50,
        max: 500,
    },
};
export const EMAIL_REG_EXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const NUMBER_REG_EXP = /^\d+$/;
