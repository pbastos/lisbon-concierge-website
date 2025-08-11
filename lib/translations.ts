export const translations = {
  en: {
    // Header
    nav: {
      home: "HOME",
      services: "OUR SERVICES",
      properties: "OUR PROPERTIES",
      blog: "BLOG",
      about: "ABOUT",
      contact: "CONTACT"
    },
    
    // Hero
    hero: {
      title: "We help you take care of your",
      highlight: "house and guests"
    },
    
    // Services
    services: {
      title: "Your premium solution for Lisbon",
      subtitle: "We help home owners that want to rent their beautiful houses in Lisbon but don't have the possibility to receive their guests. Renting a house is hard work - but don't worry, we can handle this for you.",
      meetGreet: {
        title: "Meet and Greet",
        description: "Personal welcome service for your guests with key handover and property orientation"
      },
      cleaning: {
        title: "Cleaning and Preparation",
        description: "Professional cleaning service between stays to ensure your property is always guest-ready"
      },
      keyManagement: {
        title: "Key Management",
        description: "Secure key handling and coordination for seamless guest check-ins and check-outs"
      },
      propertyCare: {
        title: "Property Care",
        description: "Regular property maintenance and monitoring to keep your investment in perfect condition"
      },
      guestSupport: {
        title: "Guest Support",
        description: "Ongoing assistance and support for your guests throughout their stay in Lisbon"
      },
      propertyManagement: {
        title: "Property Management",
        description: "Complete property oversight including maintenance coordination and guest communication"
      }
    },
    
    // About
    about: {
      title: "About The Lisbon Concierge",
      description1: "We are Lisbon's dedicated short-term rental management service, specializing in taking care of your property and your guests so you don't have to worry about the day-to-day operations.",
      description2: "Whether you live far from your property or simply don't have the time to manage guest arrivals, cleaning, and property maintenance, we provide a comprehensive solution that ensures your guests have an exceptional experience while protecting your investment.",
      description3: "Our local expertise and personal approach mean your property is in trusted hands, and your guests receive the warm Portuguese hospitality they expect when visiting our beautiful city.",
      promise: "Our Promise",
      quote: {
        line1: "Genuine",
        line2: "Portuguese",
        line3: "hospitality",
        line4: "delivered by locals",
        line5: "who call Lisbon",
        line6: "home"
      }
    },
    
    // Contact
    contact: {
      title: "Ready to get started?",
      subtitle: "Contact us today to learn how we can help you maximize your property's potential.",
      callUs: "Call Us",
      emailUs: "Email Us",
      visitUs: "Visit Us",
      ctaTitle: "Ready to transform your property investment?",
      ctaSubtitle: "Let's discuss how our professional management services can help you achieve maximum returns with minimum effort."
    },
    
    // Footer
    footer: {
      description: "Professional short-term rental management in Lisbon. We take care of your property and guests so you can focus on what matters most.",
      quickLinks: "QUICK LINKS",
      contact: "CONTACT",
      rights: "All rights reserved."
    }
  },
  
  pt: {
    // Header
    nav: {
      home: "INÍCIO",
      services: "NOSSOS SERVIÇOS",
      properties: "NOSSAS PROPRIEDADES",
      blog: "BLOG",
      about: "SOBRE",
      contact: "CONTATO"
    },
    
    // Hero
    hero: {
      title: "Nós cuidamos da sua",
      highlight: "casa e dos seus hóspedes"
    },
    
    // Services
    services: {
      title: "A sua solução premium em Lisboa",
      subtitle: "Ajudamos proprietários que querem alugar as suas belas casas em Lisboa mas não têm a possibilidade de receber os seus hóspedes. Alugar uma casa dá muito trabalho - mas não se preocupe, nós tratamos disso por si.",
      meetGreet: {
        title: "Receção de Hóspedes",
        description: "Serviço de boas-vindas pessoal para os seus hóspedes com entrega de chaves e orientação sobre a propriedade"
      },
      cleaning: {
        title: "Limpeza e Preparação",
        description: "Serviço de limpeza profissional entre estadias para garantir que a sua propriedade está sempre pronta para hóspedes"
      },
      keyManagement: {
        title: "Gestão de Chaves",
        description: "Manuseio seguro de chaves e coordenação para check-ins e check-outs sem problemas"
      },
      propertyCare: {
        title: "Cuidado da Propriedade",
        description: "Manutenção regular e monitorização da propriedade para manter o seu investimento em perfeitas condições"
      },
      guestSupport: {
        title: "Apoio aos Hóspedes",
        description: "Assistência e apoio contínuo aos seus hóspedes durante toda a estadia em Lisboa"
      },
      propertyManagement: {
        title: "Gestão de Propriedades",
        description: "Supervisão completa da propriedade incluindo coordenação de manutenção e comunicação com hóspedes"
      }
    },
    
    // About
    about: {
      title: "Sobre The Lisbon Concierge",
      description1: "Somos o serviço dedicado de gestão de aluguer de curta duração em Lisboa, especializados em cuidar da sua propriedade e dos seus hóspedes para que não tenha de se preocupar com as operações do dia-a-dia.",
      description2: "Quer viva longe da sua propriedade ou simplesmente não tenha tempo para gerir chegadas de hóspedes, limpeza e manutenção da propriedade, oferecemos uma solução completa que garante que os seus hóspedes têm uma experiência excecional enquanto protege o seu investimento.",
      description3: "A nossa experiência local e abordagem pessoal significam que a sua propriedade está em mãos de confiança, e os seus hóspedes recebem a calorosa hospitalidade portuguesa que esperam ao visitar a nossa bela cidade.",
      promise: "Nossa Promessa",
      quote: {
        line1: "Genuína",
        line2: "hospitalidade",
        line3: "portuguesa",
        line4: "oferecida por locais",
        line5: "que chamam Lisboa",
        line6: "de casa"
      }
    },
    
    // Contact
    contact: {
      title: "Pronto para começar?",
      subtitle: "Contacte-nos hoje para saber como podemos ajudá-lo a maximizar o potencial da sua propriedade.",
      callUs: "Ligue-nos",
      emailUs: "Envie Email",
      visitUs: "Visite-nos",
      ctaTitle: "Pronto para transformar o seu investimento imobiliário?",
      ctaSubtitle: "Vamos discutir como os nossos serviços de gestão profissional podem ajudá-lo a obter o máximo retorno com o mínimo esforço."
    },
    
    // Footer
    footer: {
      description: "Gestão profissional de aluguer de curta duração em Lisboa. Cuidamos da sua propriedade e dos hóspedes para que possa focar-se no que é mais importante.",
      quickLinks: "LINKS RÁPIDOS",
      contact: "CONTATO",
      rights: "Todos os direitos reservados."
    }
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en