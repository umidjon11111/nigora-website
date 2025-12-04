import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useCallback } from "react";

const Contact = () => {
  const { t } = useTranslation();

  const botToken = "8071924850:AAGLUt-Di2Mo9cM18YxKfUMb6nIiPVDWYqM";
  const chatId = "6052648076";

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const name = e.target["contact-name"].value;
      const email = e.target["contact-email"].value;
      const message = e.target["contact-message"].value;

      const text = `
📩 *Yangi Murojaat*
━━━━━━━━━━━━━━
👤 *Ism:* ${name}
📧 *Email:* ${email}
💬 *Xabar:* ${message}
━━━━━━━━━━━━━━
    `;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      })
        .then(() => {
          alert(t("contact.alert.success"));
          e.target.reset();
        })
        .catch(() => {
          alert(t("contact.alert.error"));
        });
    },
    [t]
  );

  return (
    <section id="contact" className="py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT — Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                  {t("contact.title")}
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.info.phone")}
                      </p>
                      <p className="font-body text-muted-foreground">
                        +998 99-702-22-20
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-foreground">
                        {t("contact.info.email")}
                      </p>
                      <p className="font-body text-muted-foreground">
                        nigora925@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>

                    <div className="w-full">
                      <p className="font-body font-medium text-foreground">
                        {t("contact.info.location")}
                      </p>
                      <p className="font-body text-muted-foreground mb-3">
                        Bukhara, Uzbekistan
                      </p>

                      <iframe
                        src="https://www.google.com/maps?q=39.776635,64.443083&hl=uz&z=16&output=embed"
                        width="100%"
                        height="300"
                        loading="lazy"
                        className="rounded-xl border-none shadow-card"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div
              className="bg-card rounded-2xl shadow-card p-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-name"
                    className="font-body text-base font-medium"
                  >
                    {t("contact.form.name")}
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder={t("contact.form.placeholder.name")}
                    className="h-12 rounded-xl border-2 font-body"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="font-body text-base font-medium"
                  >
                    {t("contact.form.email")}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={t("contact.form.placeholder.email")}
                    className="h-12 rounded-xl border-2 font-body"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-message"
                    className="font-body text-base font-medium"
                  >
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    className="rounded-xl border-2 font-body resize-none"
                    required
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-gold text-white shadow-elegant hover:scale-105 transition-smooth text-base py-6 rounded-xl"
                >
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
