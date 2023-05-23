import { getUserData } from "../services/serverRequisitions.auth";
import { useState, useEffect } from "react";

export default function Auth({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const asyncWrapper = async () => {
            try {
                // const token = localStorage.getItem("token");

                // if (!token) {
                // throw new Error("Token not found");
                // }

                // const config = { headers: { Authorization: `Bearer ${token}` } };
                const userData = await getUserData();
                // const userData = await getUserData(config);

                // console.log("returns:",userData)
                const { name, id: userId } = userData;

                localStorage.setItem("name", name);
                localStorage.setItem("userId", userId);

                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        asyncWrapper();
    }, [isAuthenticated, isLoading]);

    if (isLoading) {
        // Show loading spinner or component while verifying the token
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        // Show appropriate UI for unauthenticated state
        return <div>Unauthorized access!</div>;
    }

    return <>{children}</>;
}