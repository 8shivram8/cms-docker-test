import { useEffect, useState } from "react";

export const BACKEND_URL = "https://api.acolead.com/crm-backend/api";
// export const BACKEND_URL = "http://localhost:4104/crm-backend/api";

const useCheckLicensePaymentStatusQuery = ({ cpId, merchantOrderId, open }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isUninitialized, setIsUninitialized] = useState(true);

    useEffect(() => {
        if (!cpId || !merchantOrderId || !open) return;

        const controller = new AbortController();

        const fetchStatus = async () => {
            try {
                setIsUninitialized(false);

                if (!data) {
                    setIsLoading(true);
                } else {
                    setIsFetching(true);
                }

                const response = await fetch(
                    `${BACKEND_URL}/v1/auth/status?cpId${cpId}&merchantOrderId=${merchantOrderId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error(error);
                }
            } finally {
                setIsLoading(false);
                setIsFetching(false);
            }
        };

        fetchStatus();

        return () => controller.abort();
    }, [merchantOrderId, open]);

    return {
        data,
        isUninitialized,
        isLoading,
        isFetching,
    };
};

export const cpcrmApiSlice = {
    useCheckLicensePaymentStatusQuery,
};