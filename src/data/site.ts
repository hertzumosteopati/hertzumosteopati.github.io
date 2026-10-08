// Hard facts, shared by both languages. Copy lives in src/content/.

export const EASYME_URL = 'https://ezme.io/c/X6l/oaqf';

export const site = {
  name: 'Hertzum Osteopati',
  cvr: '36257008',
};

export const anne = {
  name: 'Anne Hertzum',
  mobile: '36 20 89 98',
  mobileHref: 'tel:+4536208998',
  email: 'info@hertzumosteopati.dk',
  facebook: 'https://www.facebook.com/people/Hertzum-Osteopati/61556889272882/',
};

export type ClinicKey = 'brondby' | 'nykobing';

export interface Clinic {
  key: ClinicKey;
  name: string;
  street: string;
  postalCode: string;
  town: string;
  /** One line with a middle dot between street and town, as the ClinicCard expects. */
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  websiteLabel: string;
  contactUrl?: string;
  maps: string;
  booking: { kind: 'online' | 'phone'; href: string };
  tone: 'siv' | 'sand';
}

export const clinics: Record<ClinicKey, Clinic> = {
  brondby: {
    key: 'brondby',
    name: 'Brøndby Manuel Klinik',
    street: 'Vestre Gade 6D, st. th.',
    postalCode: '2605',
    town: 'Brøndby',
    address: 'Vestre Gade 6D, st. th. · 2605 Brøndby',
    phone: '93 97 00 79',
    phoneHref: 'tel:+4593970079',
    email: 'info@hertzumosteopati.dk',
    website: 'https://manuelklinik.dk/',
    websiteLabel: 'manuelklinik.dk',
    maps: 'https://maps.app.goo.gl/bbCUzzQKeV9y3xGdA',
    booking: { kind: 'online', href: EASYME_URL },
    tone: 'siv',
  },
  nykobing: {
    key: 'nykobing',
    name: 'Manuel Medicinsk Klinik',
    street: 'Oddenvej 78',
    postalCode: '4500',
    town: 'Nykøbing Sjælland',
    address: 'Oddenvej 78 · 4500 Nykøbing Sjælland',
    phone: '59 31 10 05',
    phoneHref: 'tel:+4559311005',
    email: 'manuelmedicinskklinik@live.dk',
    website: 'https://manuelmedicinsklinik.dk/',
    websiteLabel: 'manuelmedicinsklinik.dk',
    contactUrl: 'https://manuelmedicinsklinik.dk/kontakt/',
    maps: 'https://www.google.com/maps/search/?api=1&query=Oddenvej%2078%2C%204500%20Nyk%C3%B8bing%20Sj%C3%A6lland',
    booking: { kind: 'phone', href: 'tel:+4559311005' },
    tone: 'sand',
  },
};

/** Brøndby prices from the EasyMe booking. The service names are in src/content/sections/{lang}/prices.md. */
export const brondbyPrices: Record<string, string> = {
  'osteo-first-adult': '750 kr.',
  'osteo-followup-adult': '750 kr.',
  'osteo-first-child': '650 kr.',
  'osteo-followup-child': '650 kr.',
  'physio-first': '515 kr.',
  'physio-followup': '515 kr.',
};
