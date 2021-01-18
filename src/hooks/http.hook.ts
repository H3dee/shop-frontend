import { useCallback, useEffect, useRef, useState } from "react";

export const useHttp = <T extends unknown = any>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const isMounted = useRef(true)

  const request = useCallback(async (
      url: string,
      method: string = "POST",
      body: object | string | null = null,
      headers: HeadersInit = { accept: "application/json" }
    ) => {
      if(!isMounted.current) return
      setLoading(true);
      try {
        if (body) body = JSON.stringify(body);
  
        const options: RequestInit = { method, body, headers };
        const response = await fetch(url, options);
        const data: T = await response.json();
  
        if (!response.ok) {
          throw new Error("Something went wrong during fetching data");
        }
        
        if(!isMounted.current) return;
        setLoading(false);
        return data;
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }, [])

    useEffect(() => {
      isMounted.current = true
      return () => {
        isMounted.current = false
      }
    })

  return { loading, request };
};
