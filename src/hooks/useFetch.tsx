import { useState, useEffect } from "react";

interface State<T> {
  loading: boolean;
  data: T | undefined;
  error: string | undefined;
  fetchData: () => void;
}

export const useFetch = <T,>(url?: string): State<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();

  const fetchData = () => {
    if (!url) return;
    setLoading(true);
    setData(undefined);
    setError(undefined);
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Server error");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data, error, fetchData };
};
