import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export async function getSection(lang: Lang, name: string) {
  const entry = await getEntry('sections', `${lang}/${name}`);
  if (!entry) throw new Error(`Missing content: src/content/sections/${lang}/${name}.md`);
  return entry;
}

export async function getPage(lang: Lang, name: string) {
  const entry = await getEntry('pages', `${lang}/${name}`);
  if (!entry) throw new Error(`Missing content: src/content/pages/${lang}/${name}.md`);
  return entry;
}

export async function getTreatments(lang: Lang) {
  const all = await getCollection('treatments', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getClinicText(lang: Lang) {
  const all = await getCollection('clinics', (e) => e.id.startsWith(`${lang}/`));
  const order = ['brondby', 'nykobing'];
  return all.sort((a, b) => order.indexOf(a.data.clinic) - order.indexOf(b.data.clinic));
}
