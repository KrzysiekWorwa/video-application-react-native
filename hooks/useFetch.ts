import { useEffect, useState } from "react";

export function useFetch<T = any>(fetcher: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      try {
        const result = await fetcher();
        if (mounted) setData(result);
      } catch (e) {
        setError("Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, loading, error };
}
