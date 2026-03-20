import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [spaceType, setSpaceType] = useState("");
  const [projectContext, setProjectContext] = useState("");
  const { toast } = useToast();

  const spaceTypes = [
    t("Private residence", "Résidence privée"),
    t("Rental property", "Bien locatif"),
    t("Hotel / Hospitality", "Hôtel / Hébergement"),
    t("Office / Commercial", "Bureau / Commercial"),
    t("Other", "Autre"),
  ];

  const projectContexts = [
    t("New construction", "Construction neuve"),
    t("Renovation / Upgrade", "Rénovation / Mise à niveau"),
    t("Replacement of existing locks", "Remplacement de serrures existantes"),
    t("Exploring options", "Exploration des options"),
  ];

  const totalSteps = 3;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      spaceType,
      projectContext,
    };

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: payload,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error('Email send error:', err);
      toast({
        title: t("Error", "Erreur"),
        description: t(
          "Failed to send your enquiry. Please try again or email us directly.",
          "Échec de l'envoi de votre demande. Veuillez réessayer ou nous contacter directement par email."
        ),
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const canAdvance = () => {
    if (step === 0) return spaceType !== "";
    if (step === 1) return projectContext !== "";
    return true;
  };

  const stepLabels = [
    t("Type of space", "Type d'espace"),
    t("Project context", "Contexte du projet"),
    t("Contact details", "Coordonnées"),
  ];

  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-silver-accent mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-heading font-bold text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("Begin the Conversation", "Commencez la conversation")}
          </motion.h1>
          <motion.p
            className="text-lg text-chrome-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              "This helps us recommend the right solution for your environment.",
              "Cela nous aide à recommander la solution adaptée à votre environnement."
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-charcoal">
        <div className="container mx-auto px-6 max-w-2xl">
          {submitted ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-deep flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-silver-accent" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-ivory mb-3">
                {t("Enquiry Received", "Demande reçue")}
              </h2>
              <p className="text-chrome-light">
                {t(
                  "We will review your message and respond within two business days.",
                  "Nous examinerons votre message et répondrons sous deux jours ouvrables."
                )}
              </p>
            </motion.div>
          ) : (
            <div>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between mb-3">
                  {stepLabels.map((label, i) => (
                    <span
                      key={label}
                      className={`text-xs tracking-wide uppercase transition-colors duration-300 ${
                        i <= step ? "text-silver-accent" : "text-chrome/30"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <Progress
                  value={progress}
                  className="h-[2px] bg-chrome/10 [&>div]:bg-gradient-to-r [&>div]:from-silver-accent [&>div]:to-silver-glow"
                />
                <p className="text-[11px] text-chrome/40 mt-3 text-center">
                  {t("No obligation — guidance only.", "Sans engagement — à titre indicatif.")}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-xl font-heading font-medium text-ivory mb-2">
                      {t("What type of space is this for?", "Quel type d'espace est concerné ?")}
                    </h3>
                    <p className="text-sm text-chrome/50 mb-8">
                      {t("This helps us recommend the right solution.", "Cela nous aide à recommander la bonne solution.")}
                    </p>
                    <div className="grid gap-3">
                      {spaceTypes.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSpaceType(opt)}
                          className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-light ${
                            spaceType === opt
                              ? "border-silver-accent/60 bg-silver-accent/10 text-ivory"
                              : "border-chrome/15 bg-deep/50 text-chrome-light hover:border-silver-accent/30 hover:bg-silver-accent/5"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-xl font-heading font-medium text-ivory mb-2">
                      {t("Tell us about the project.", "Parlez-nous du projet.")}
                    </h3>
                    <p className="text-sm text-chrome/50 mb-8">
                      {t(
                        "Understanding your context helps us provide better guidance.",
                        "Comprendre votre contexte nous aide à mieux vous guider."
                      )}
                    </p>
                    <div className="grid gap-3">
                      {projectContexts.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setProjectContext(opt)}
                          className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-light ${
                            projectContext === opt
                              ? "border-silver-accent/60 bg-silver-accent/10 text-ivory"
                              : "border-chrome/15 bg-deep/50 text-chrome-light hover:border-silver-accent/30 hover:bg-silver-accent/5"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-xl font-heading font-medium text-ivory mb-2">
                      {t("How can we reach you?", "Comment pouvons-nous vous contacter ?")}
                    </h3>
                    <p className="text-sm text-chrome/50 mb-8">
                      {t(
                        "We typically respond within two business days.",
                        "Nous répondons généralement sous deux jours ouvrables."
                      )}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-ivory/80 mb-2">
                            {t("Full Name *", "Nom complet *")}
                          </label>
                          <input
                            id="name"
                            name="name"
                            required
                            maxLength={100}
                            className="w-full px-4 py-3 rounded-lg border border-chrome/15 bg-deep/50 text-ivory placeholder:text-chrome/30 focus:outline-none focus:ring-1 focus:ring-silver-accent/40 focus:border-silver-accent/40 transition-all duration-300"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-ivory/80 mb-2">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={255}
                            className="w-full px-4 py-3 rounded-lg border border-chrome/15 bg-deep/50 text-ivory placeholder:text-chrome/30 focus:outline-none focus:ring-1 focus:ring-silver-accent/40 focus:border-silver-accent/40 transition-all duration-300"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-ivory/80 mb-2">
                          {t("Company / Organisation", "Entreprise / Organisation")}
                        </label>
                        <input
                          id="company"
                          name="company"
                          maxLength={150}
                          className="w-full px-4 py-3 rounded-lg border border-chrome/15 bg-deep/50 text-ivory placeholder:text-chrome/30 focus:outline-none focus:ring-1 focus:ring-silver-accent/40 focus:border-silver-accent/40 transition-all duration-300"
                          placeholder="Acme Properties Ltd"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-ivory/80 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          maxLength={2000}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-chrome/15 bg-deep/50 text-ivory placeholder:text-chrome/30 focus:outline-none focus:ring-1 focus:ring-silver-accent/40 focus:border-silver-accent/40 resize-none transition-all duration-300"
                          placeholder={t(
                            "Describe your project, requirements, or questions...",
                            "Décrivez votre projet, vos besoins ou vos questions..."
                          )}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-ivory font-semibold hover:brightness-110 transition-all w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                          <>
                            {t("Sending...", "Envoi en cours...")}
                            <Loader2 className="w-5 h-5 animate-spin" />
                          </>
                        ) : (
                          <>
                            {t("Submit Enquiry", "Envoyer la demande")}
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                       <p className="text-xs text-chrome/40 text-center">
                        {t("Or contact us directly at", "Ou contactez-nous directement à")}{" "}
                        <a
                          href="mailto:contact@koraglobalsystems.com"
                          className="text-silver-accent hover:underline"
                        >
                          contact@koraglobalsystems.com
                        </a>
                      </p>
                      <p className="text-[10px] text-chrome/30 text-center mt-3">
                        {t(
                          "Hardware product — no absolute security guarantee. Information provided for guidance only.",
                          "Produit matériel — aucune garantie de sécurité absolue. Informations fournies à titre indicatif uniquement."
                        )}
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {!submitted && (
                <div className="flex justify-between mt-10">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    className={`inline-flex items-center gap-2 text-sm text-chrome/50 hover:text-chrome-light transition-colors duration-300 ${
                      step === 0 ? "invisible" : ""
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t("Back", "Retour")}
                  </button>
                  {step < 2 && (
                    <button
                      onClick={() => canAdvance() && setStep(step + 1)}
                      disabled={!canAdvance()}
                      className="inline-flex items-center gap-2 text-sm text-silver-accent hover:text-silver-glow transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {t("Continue", "Continuer")}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
