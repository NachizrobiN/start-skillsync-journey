
import React from 'react';
import { useSignupCounter } from '@/hooks/useSignupCounter';
import { Users } from 'lucide-react';

const SignupCounter = () => {
  const { count, isLoading } = useSignupCounter();

  return (
    <div className="flex items-center justify-center space-x-2 text-purple-300 mt-6">
      <Users className="h-5 w-5" />
      <span className="text-lg">
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <>
            <span className="font-bold text-white">{count.toLocaleString()}</span>
            {count === 1 ? ' person has' : ' people have'} joined the waitlist
          </>
        )}
      </span>
    </div>
  );
};

export default SignupCounter;
