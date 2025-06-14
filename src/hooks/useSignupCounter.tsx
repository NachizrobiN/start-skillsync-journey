
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSignupCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCount = async () => {
    try {
      const { count: signupCount, error } = await supabase
        .from('waitlist_signups')
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error fetching signup count:', error);
        return;
      }

      setCount(signupCount || 0);
    } catch (error) {
      console.error('Error fetching signup count:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();

    // Set up real-time subscription to listen for new signups
    const channel = supabase
      .channel('waitlist-changes')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'waitlist_signups'
      }, () => {
        fetchCount();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, isLoading, refetch: fetchCount };
};
