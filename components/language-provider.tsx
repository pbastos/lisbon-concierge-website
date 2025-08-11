"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.about": "About",
    "nav.properties": "Properties",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Your Premium Solution for Lisbon",
    "hero.subtitle":
      "Professional short-term rental management services. We take care of your property and guests so you can focus on what matters most.",
    "hero.cta": "Get Started Today",
    "hero.learn-more": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive property management solutions tailored for Lisbon's short-term rental market",
    "services.guest-management": "Guest Management",
    "services.guest-management-desc": "Professional guest communication, check-in/out coordination, and 24/7 support",
    "services.cleaning": "Cleaning & Maintenance",
    "services.cleaning-desc": "Professional cleaning between stays and regular property maintenance",
    "services.pricing": "Dynamic Pricing",
    "services.pricing-desc": "Optimize your revenue with data-driven pricing strategies",
    "services.marketing": "Marketing & Listing",
    "services.marketing-desc": "Professional photography and optimized listings across all major platforms",

    // About
    "about.title": "About The Lisbon Concierge",
    "about.content":
      "We are Lisbon's premier short-term rental management company, dedicated to maximizing your property's potential while providing exceptional guest experiences. With years of local expertise and a passion for hospitality, we handle every aspect of your rental business.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to maximize your property's potential? Get in touch with us today.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.description": "Professional short-term rental management in Lisbon",
    "footer.quick-links": "Quick Links",
    "footer.services-list": "Services",
    "footer.contact-info": "Contact Info",
    "footer.rights": "All rights reserved.",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.services": "Nossos Serviços",
    "nav.about": "Sobre",
    "nav.properties": "Propriedades",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "A Sua Solução Premium para Lisboa",
    "hero.subtitle":
      "Serviços profissionais de gestão de alojamento local. Cuidamos da sua propriedade e hóspedes para que se possa focar no que mais importa.",
    "hero.cta": "Comece Hoje",
    "hero.learn-more": "Saber Mais",

    // Services
    "services.title": "Nossos Serviços",
    "services.subtitle":
      "Soluções completas de gestão de propriedades adaptadas ao mercado de alojamento local de Lisboa",
    "services.guest-management": "Gestão de Hóspedes",
    "services.guest-management-desc":
      "Comunicação profissional com hóspedes, coordenação de check-in/out e suporte 24/7",
    "services.cleaning": "Limpeza e Manutenção",
    "services.cleaning-desc": "Limpeza profissional entre estadias e manutenção regular da propriedade",
    "services.pricing": "Preços Dinâmicos",
    "services.pricing-desc": "Otimize a sua receita com estratégias de preços baseadas em dados",
    "services.marketing": "Marketing e Anúncios",
    "services.marketing-desc": "Fotografia profissional e anúncios otimizados em todas as principais plataformas",

    // About
    "about.title": "Sobre The Lisbon Concierge",
    "about.content":
      "Somos a principal empresa de gestão de alojamento local de Lisboa, dedicada a maximizar o potencial da sua propriedade enquanto proporcionamos experiências excecionais aos hóspedes. Com anos de experiência local e paixão pela hospitalidade, tratamos de todos os aspetos do seu negócio de aluguer.",

    // Contact
    "contact.title": "Contacte-nos",
    "contact.subtitle": "Pronto para maximizar o potencial da sua propriedade? Entre em contacto connosco hoje.",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.address": "Morada",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",

    // Footer
    "footer.description": "Gestão profissional de alojamento local em Lisboa",
    "footer.quick-links": "Links Rápidos",
    "footer.services-list": "Serviços",
    "footer.contact-info": "Informações de Contacto",
    "footer.rights": "Todos os direitos reservados.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
