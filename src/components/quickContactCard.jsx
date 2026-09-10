import { useState } from 'react';
import BentoCard from './bentoCard';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function QuickContactCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ email: '', message: '' });
    }
  };

  return (
    <BentoCard colSpan="md:col-span-2 lg:col-span-1" className="flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">Let's Connect</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Have a project in mind? Send a direct message.
        </p>
      </div>

      {submitted ? (
        <div className="my-auto rounded-xl bg-emerald-500/10 p-4 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          ✓ Message sent! I'll get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <Input
            type="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-xs"
          />
          <Textarea
            required
            rows={2}
            placeholder="Your Message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="text-xs resize-none"
          />
          <Button type="submit" className="w-full text-xs font-semibold" size="sm">
            Send Message
          </Button>
        </form>
      )}
    </BentoCard>
  );
}