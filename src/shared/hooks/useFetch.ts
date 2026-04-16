import {useEffect, useState} from "react";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {signal: controller.signal});
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const json: T = await response.json();
                setData(json);
            } catch (error) {
                if (error instanceof Error) {
                    if (error.name === 'AbortError') return;
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        void fetchData();

        return () => controller.abort();
    }, [url]);

    return {data, loading, error};
};