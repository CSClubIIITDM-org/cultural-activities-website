let isLazysizesImported = false;

/**
 * @param {HTMLImageElement} node
 */
export function lazy(node) {
	const srcVal = node.src;
	node.src = '';
	node.dataset.src = srcVal;

	node.classList.add('lazyload');

	if (!isLazysizesImported) {
		import('lazysizes');
		isLazysizesImported = true;
	}

	return { destroy() {} };
}
