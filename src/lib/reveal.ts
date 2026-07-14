/**
 * `use:reveal` — subtle fade + slide-up when the element scrolls into view.
 * Honours `prefers-reduced-motion`: reduced-motion users see the element
 * immediately with no transform.
 */
export function reveal(node: HTMLElement, delay = 0) {
	const reduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduced || typeof IntersectionObserver === 'undefined') {
		node.style.opacity = '1';
		return;
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(16px)';
	node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
