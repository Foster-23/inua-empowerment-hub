import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Inua Youth Initiative" },
      { name: "description", content: "Get in touch with Inua Youth Initiative in Kenya." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", organization: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await getErrorMessage(response);
        throw new Error(errorText);
      }

      setStatusMessage("Message sent successfully! We'll be in touch soon.");
      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", organization: "", message: "" });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Failed to send message.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = async (response: Response) => {
    try {
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const data = await response.json();
        return (data?.message as string) || "Failed to send message.";
      } else {
        return await response.text();
      }
    } catch {
      return "Failed to send message.";
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Questions, ideas or partnership interest? Connect with Inua Youth Initiative."
      />

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            {[
              { icon: MapPin, title: "Location", body: "Kenya" },
              { icon: Phone, title: "Call or WhatsApp", body: "0741 726 573", href: "tel:+254741726573" },
              { icon: Mail, title: "Message us", body: "Connect through our Facebook page." },
            ].map(({ icon: Icon, title, body, href }) => (
              <div key={title} className="flex gap-5">
                <div className="size-12 shrink-0 grid place-items-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-brand-navy/40">{title}</h3>
                  {href ? (
                    <a href={href} className="mt-1 inline-block font-bold hover:text-brand-green transition-colors">{body}</a>
                  ) : (
                    <p className="mt-1 font-bold">{body}</p>
                  )}
                </div>
              </div>
            ))}
            <a href="https://www.facebook.com/share/p/17TxKcGZ4H/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-brand-green">
              <Facebook className="h-4 w-4" /> Follow us on Facebook
            </a>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 md:p-10 rounded-lg bg-brand-surface space-y-5">
            <h3 className="text-2xl font-extrabold">Message the Initiative</h3>
            <p className="text-muted-foreground">The online contact form is not available yet. Please reach us through Facebook; this form does not collect or send your details.</p>
            <fieldset disabled className="space-y-5 opacity-60">
            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <Field
                label="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <Field
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Field
              label="Organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            />
            <div>
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest font-bold text-brand-navy/60">Message</label>
              <textarea
                id="contact-message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 w-full px-5 py-3 rounded-xl border border-brand-navy/10 bg-background focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              />
            </div>
            <Button
              type="submit"
              disabled
              className="w-full md:w-auto px-8 py-4 bg-brand-green text-primary-foreground rounded-full font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Online form unavailable
            </Button>
            {statusMessage && (
              <div
                className={`rounded-2xl px-4 py-3 text-sm ${
                  isSuccess ? "bg-brand-green/10 text-brand-green" : "bg-destructive/10 text-destructive"
                }`}
              >
                {statusMessage}
              </div>
            )}
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", value, onChange }: { label: string; type?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <label htmlFor={`contact-${label.replaceAll(" ", "-")}`} className="text-xs uppercase tracking-widest font-bold text-brand-navy/60">{label}</label>
      <input
        id={`contact-${label.replaceAll(" ", "-")}`}
        type={type}
        value={value || ""}
        onChange={onChange}
        className="mt-2 w-full px-5 py-3 rounded-xl border border-brand-navy/10 bg-background focus:outline-none focus:ring-2 focus:ring-brand-green/30"
      />
    </div>
  );
}
