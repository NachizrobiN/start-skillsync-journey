
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type LeadFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function LeadForm({ open, onOpenChange }: LeadFormProps) {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("hero_leads").insert([form]);
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong!", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We've received your details.", variant: "success" });
    setForm({ name: "", email: "", company: "", interest: "" });
    setTimeout(() => onOpenChange(false), 900);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl p-6 animate-scale-in">
        <DialogHeader>
          <DialogTitle className="mb-2">Request Early Demo</DialogTitle>
          <DialogDescription className="mb-2">
            Fill out your details – get early access and updates.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required value={form.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" required value={form.email} type="email" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" value={form.company} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="interest">What interests you?</Label>
            <Textarea id="interest" name="interest" value={form.interest} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full" disabled={loading || !form.name || !form.email}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
