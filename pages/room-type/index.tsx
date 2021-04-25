import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "@components";
import { RoomType } from "./components";
import { fGetRoomTypesRequestSaga } from "../../src/services/room-type.service";
import { IRoomTypeInterface } from "@interfaces/i.room.type.interface";

export interface IProps {
    data: {
        data: IRoomTypeInterface[];
    };
}

const RoomTypePage: NextPage = ({ data }): IProps => {
    console.log("client side");
    console.log(data?.data?.data);
    return (
        <Layout>
            <NextSeo title="Title here" description="Short description here." />
            {data &&
                data.data &&
                data.data.data.map((item: IRoomTypeInterface) => (
                    <RoomType key={item.id} item={item} />
                ))}
        </Layout>
    );
};

export async function getStaticProps(): Promise<{ props: IProps }> {
    const data = await fGetRoomTypesRequestSaga({ skip: 0, take: 10 });
    return {
        props: {
            data,
        },
    };
}

export default RoomTypePage;
