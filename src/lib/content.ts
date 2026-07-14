// Central content loader. All site content lives in `/content` as JSON/MD and is
// edited through Sveltia CMS. Because the site is fully prerendered, we import the
// files statically at build time — a content change triggers a rebuild.
import { marked } from 'marked';

import generalJson from '../../content/settings/general.json';
import socialJson from '../../content/settings/social.json';
import startseiteJson from '../../content/pages/startseite.json';
import leistungenJson from '../../content/pages/leistungen.json';
import praxisJson from '../../content/pages/praxis.json';
import teamJson from '../../content/pages/team.json';
import kontaktJson from '../../content/pages/kontakt.json';
import impressumRaw from '../../content/legal/impressum.md?raw';
import datenschutzRaw from '../../content/legal/datenschutz.md?raw';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type Sprechzeit = { tage: string; von: string; bis: string; hinweis: string };

export type General = {
	praxisName: string;
	claim: string;
	adresse: { strasse: string; plz: string; stadt: string };
	telefon: string;
	fax: string;
	email: string;
	sprechzeiten: Sprechzeit[];
	terminLink: string;
	notdienstHinweis: string;
	seo: { titleSuffix: string; description: string; ogImage: string };
};

export type SocialPlattform =
	| 'instagram'
	| 'facebook'
	| 'linkedin'
	| 'youtube'
	| 'whatsapp'
	| 'jameda'
	| 'doctolib';

export type Social = { links: { plattform: SocialPlattform; url: string }[] };

export type LegalPage = { titel: string; html: string };

// ---------------------------------------------------------------------------
// Markdown helper
// ---------------------------------------------------------------------------
marked.setOptions({ gfm: true, breaks: false });

/** Split simple YAML front matter (only `key: value` lines) from a markdown body. */
function parseMarkdown(raw: string): LegalPage {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	let titel = '';
	let body = raw;
	if (match) {
		const front = match[1];
		body = match[2];
		const titelMatch = front.match(/^titel:\s*(.+)$/m);
		if (titelMatch) titel = titelMatch[1].trim();
	}
	return { titel, html: marked.parse(body.trim()) as string };
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------
export const general = generalJson as General;
export const social = socialJson as Social;
export const startseite = startseiteJson;
export const leistungen = leistungenJson;
export const praxis = praxisJson;
export const team = teamJson;
export const kontakt = kontaktJson;
export const impressum = parseMarkdown(impressumRaw);
export const datenschutz = parseMarkdown(datenschutzRaw);
