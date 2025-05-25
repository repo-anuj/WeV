import { useUser } from "@clerk/nextjs";
import React from "react";

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children}: Props) => {
    const { user } = useUser();
    return <div>{children}</div>
}

export default Layout;