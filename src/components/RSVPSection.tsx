import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "RSVP Received! 🌙",
      description: "We can't wait to celebrate with you! Insha'Allah.",
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-cream via-gold-light/20 to-cream">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-2xl">🌙</span>
            <div className="w-12 h-px bg-gold" />
          </motion.div>
          <h2 className="font-script text-4xl md:text-5xl text-emerald mb-2">
            Will You Join Us?
          </h2>
          <p className="font-display text-muted-foreground italic">
            Assalamu Alaikum - Please confirm your presence
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              className="bg-card rounded-2xl p-12 text-center shadow-romantic border border-gold/30"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <CheckCircle className="w-20 h-20 text-emerald mx-auto mb-6" />
              <h3 className="font-script text-3xl text-emerald mb-4">Alhamdulillah!</h3>
              <p className="font-body text-muted-foreground">
                We're so excited to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-12 shadow-romantic border border-gold/30">
              <div className="space-y-6">
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">Your Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-gold/30 focus:border-gold"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-gold/30 focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full h-10 rounded-md border border-gold/30 bg-background px-3"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm text-muted-foreground mb-2">Message (Optional)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-gold/30 focus:border-gold min-h-[80px]"
                    placeholder="Share your wishes..."
                  />
                </div>
                <Button type="submit" className="w-full h-12 gradient-gold text-foreground font-medium shadow-gold hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" />
                  Send RSVP
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
