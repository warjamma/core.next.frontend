import React, { ReactNode } from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

type Props = {
    children?: ReactNode;
};

export const Layout = ({ children }): Props => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
