
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

    // Create a unique channel name to avoid conflicts
    const channelName = `waitlist-changes-${Math.random().toString(36).substr(2, 9)}`;
    
    // Set up real-time subscription to listen for new signups
    const channel = supabase
      .channel(channelName)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'waitlist_signups'
      }, () => {
        console.log('New signup detected, refetching count...');
        fetchCount();
      })
      .subscribe();

    return () => {
      console.log('Cleaning up subscription...');
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, isLoading, refetch: fetchCount };
};
