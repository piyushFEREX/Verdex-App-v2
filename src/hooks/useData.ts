import { useState, useEffect } from 'react';
import type { Career, Domain, Question } from '../data';
import { 
  fetchAllCareers, 
  fetchCareersByDomain, 
  fetchCareersWithSearch 
} from '../services';

/**
 * Custom hook for fetching careers with loading state
 */
export function useCareers(domain?: Domain, searchQuery?: string) {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadCareers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data: Career[];
        if (searchQuery || domain) {
          data = await fetchCareersWithSearch({ domain, query: searchQuery });
        } else {
          data = await fetchAllCareers();
        }
        
        setCareers(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load careers'));
      } finally {
        setLoading(false);
      }
    };

    loadCareers();
  }, [domain, searchQuery]);

  return { careers, loading, error };
}

/**
 * Custom hook for fetching questions with loading state
 */
export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { fetchQuestions } = await import('../services');
        const data = await fetchQuestions();
        
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load questions'));
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  return { questions, loading, error };
}

/**
 * Hook for local storage persistence
 * Useful for saving progress
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
}
