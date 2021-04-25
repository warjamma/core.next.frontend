import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "lodash";
import { fGetRoomTypesRequestSaga } from "../../../services/room-type.service";
import { IBuildingInterface } from "@interfaces/i.building.interface";
import { IRoomTypeInterface } from "@interfaces/i.room.type.interface";
import { IQuoteInterface } from "@interfaces/i.quote.interface";

interface IRoomTypes {
    isLoading: boolean;
    dtoBuilding: IBuildingInterface | null;
    dtoRoomTypes: IRoomTypeInterface[];
    dtoQuotes: IQuoteInterface[];
}

const initialState: IRoomTypes = {
    isLoading: false,
    dtoBuilding: null,
    dtoRoomTypes: [],
    dtoQuotes: [],
};

const roomTypeSlice = createSlice({
    name: "room-type",
    initialState,
    reducers: {
        clearData: () => initialState,
        showLoading(state, action: PayloadAction<boolean>) {
            set(state, "isLoading", action.payload);
        },
        setDtoBuilding(
            state,
            action: PayloadAction<IBuildingInterface | null>,
        ) {
            set(state, "dtoBuilding", action.payload);
        },
        setDtoRoomTypes(state, action: PayloadAction<IRoomTypeInterface[]>) {
            set(state, "dtoRoomTypes", action.payload);
        },
        setDtoQuotes(state, action: PayloadAction<IQuoteInterface[]>) {
            set(state, "dtoQuotes", action.payload);
        },
    },
});

export const { actions } = roomTypeSlice;
