import { useState, useCallback } from "react";

export interface RequestConfig {
  url: string;
  method: "GET" | "POST";
  headers: Record<string, string>;
  body: Object | null;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, applyData: (data: Object) => void) => {
      setIsLoading(true);

      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method,
          headers: requestConfig.headers,
          body:
            requestConfig.body == null
              ? null
              : JSON.stringify(requestConfig.body),
        });
        console.log(response);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
