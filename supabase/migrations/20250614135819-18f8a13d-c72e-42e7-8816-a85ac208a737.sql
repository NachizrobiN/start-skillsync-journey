
-- Create a table for waitlist signups
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to protect user data
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT (for public signups)
CREATE POLICY "Anyone can sign up for waitlist" 
  ON public.waitlist_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows public counting (for the counter display)
CREATE POLICY "Anyone can count signups" 
  ON public.waitlist_signups 
  FOR SELECT 
  USING (true);
