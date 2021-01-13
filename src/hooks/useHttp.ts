import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (
      url: string,
      method: string = "POST",
      body: object | string | null = null,
      headers: HeadersInit = { accept: "application/json" }
    ) => {
      setLoading(true);
      try {
        if (body) body = JSON.stringify(body);
  
        const options: RequestInit = { method, body, headers };
        const response = await fetch(url, options);
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error("Something went wrong during fetching data");
        }
        
        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }, [])

  return { loading, request };
};
