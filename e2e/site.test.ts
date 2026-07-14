import { expect, test } from '@playwright/test';

test('Startseite zeigt Hero und Sprechzeiten', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toContainText('Medizin mit Ruhe');
	await expect(page.getByLabel('Sprechzeiten')).toBeVisible();
	await expect(page).toHaveTitle(/Praxis Dr\. Bergmann/);
});

test('Navigation führt zu allen Seiten', async ({ page }) => {
	const routes: [string, RegExp][] = [
		['/leistungen', /Unsere Leistungen/],
		['/praxis', /Ein Ort zum Durchatmen/],
		['/team', /Menschen, die sich kümmern/],
		['/kontakt', /So erreichen Sie uns/],
		['/impressum', /Impressum/],
		['/datenschutz', /Datenschutz/]
	];
	for (const [path, heading] of routes) {
		await page.goto(path);
		await expect(page.locator('h1')).toContainText(heading);
	}
});

test('Impressum enthält die gesetzlich erforderlichen Angaben', async ({ page }) => {
	await page.goto('/impressum');
	await expect(page.getByText('Ärztekammer Hamburg').first()).toBeVisible();
	await expect(page.getByText('§ 5 TMG')).toBeVisible();
});

test('Footer verlinkt Impressum und Datenschutz', async ({ page }) => {
	await page.goto('/');
	const footer = page.locator('footer');
	await expect(footer.getByRole('link', { name: 'Impressum' })).toBeVisible();
	await expect(footer.getByRole('link', { name: 'Datenschutz' })).toBeVisible();
});
