
-- Create table for popup form collection
CREATE TABLE public.hero_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  interest TEXT
);

-- Add RLS for open (public/no auth) write-only form submissions
ALTER TABLE public.hero_leads ENABLE ROW LEVEL SECURITY;

-- Fixed: Use WITH CHECK for INSERT policy
CREATE POLICY "Anyone can insert leads" ON public.hero_leads
  FOR INSERT
  WITH CHECK (true);

-- Prevent reading unless admin
CREATE POLICY "No select for anon" ON public.hero_leads
  FOR SELECT
  USING (false);
