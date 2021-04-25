import React from "react";
import Cookies from "js-cookie";

export function setCookie(
    cname: string,
    cvalue = {},
    exDays?: number,
    path = "/",
) {
    Cookies.set(cname, cvalue, { expires: exDays, path });
}

export function getCookie(cname) {
    return Cookies.get(cname);
}

export function removeCookie(cname, path = "/") {
    try {
        Cookies.remove(cname, { path });
    } catch (error) {
        console.log("removeCookie error:", error);
    }
}

export const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
