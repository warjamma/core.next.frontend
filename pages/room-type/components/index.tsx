import React from "react";
import { Container } from "react-bootstrap";
import { IRoomTypeInterface } from "@interfaces/i.room.type.interface";

export const RoomType: React.FC = ({
    item,
}): {
    item: IRoomTypeInterface;
} => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: "#282c34" }}
        >
            <Container>
                <h1 data-test="main-heading" className="display-2 text-white">
                    {item.name}
                </h1>
                <p className="lead text-white">
                    <img src={item?.image?.path} />
                </p>
            </Container>
        </div>
    );
};
