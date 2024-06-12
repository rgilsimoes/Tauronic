/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

const useTauriApi = (
  tauriApiFn: () => Promise<any>,
  dependencies = []
): { result: any; error: Error | null; loading: boolean } => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Track whether the component is still mounted

    const executeAsyncFunction = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await tauriApiFn();
        if (isMounted) {
          setResult(response);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    executeAsyncFunction();

    // Cleanup function to update the isMounted flag
    return (): void => {
      isMounted = false;
    };
  }, dependencies); // Re-run the effect if any dependency changes

  return { result, error, loading };
};

export default useTauriApi;
