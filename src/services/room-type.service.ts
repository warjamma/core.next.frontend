import { AxiosGet } from "../utils/axios/axiosGet";
import apiLinks, { RESOURCE_ROOM_TYPE_NAME } from "../config/apiLinks";
import { AxiosPost } from "../utils/axios/axiosPost";

export function fGetRoomTypesRequestSaga(request) {
    return AxiosPost(
        apiLinks[RESOURCE_ROOM_TYPE_NAME].findAvailableForRentPage,
        request,
    );
}
export function fFindRoomTypeByIdRequestSaga(id: string) {
    return AxiosGet(
        apiLinks[RESOURCE_ROOM_TYPE_NAME].findById.replace(":id", id),
    );
}

export function fFindOthersRoomTypeByIdRequestSaga(id: string) {
    return AxiosGet(
        apiLinks[RESOURCE_ROOM_TYPE_NAME].findOthers.replace(":id", id),
    );
}
