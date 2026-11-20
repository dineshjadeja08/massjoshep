import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// In a real production app, you'd load these from the /locales/ folder via i18next-http-backend
const resources = {
  global: {
    translation: {
      currency: "USD ($)",
      region: "Global",
      startProject: "Start a Project",
      salesContact: "hello@velunosofttech.com"
    }
  },
  uk: {
    translation: {
      currency: "GBP (£)",
      region: "United Kingdom",
      startProject: "Start a Project (UK)",
      salesContact: "uk-sales@velunosofttech.com"
    }
  },
  uae: {
    translation: {
      currency: "AED (د.إ)",
      region: "United Arab Emirates",
      startProject: "Start a Project (MENA)",
      salesContact: "mena-sales@velunosofttech.com"
    }
  },
  au: {
    translation: {
      currency: "AUD ($)",
      region: "Australia",
      startProject: "Start a Project (AU)",
      salesContact: "au-sales@velunosofttech.com"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "global", // default language/region
    fallbackLng: "global",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
