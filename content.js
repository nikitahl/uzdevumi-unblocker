(function() {
  'use strict';

  const processed = new WeakSet();

  function unlockElement(placeholder) {
    const container = placeholder.parentElement;
    const oldIframe = container?.querySelector('iframe[data-cookieblock-src]');

    if (!oldIframe || processed.has(oldIframe)) return;

    const src = oldIframe.getAttribute('data-cookieblock-src');
    if (!src) return;

    // Remove the placeholder entirely
    if (placeholder) placeholder.remove();

    // Mark old iframe as processed BEFORE removing (WeakSet holds a ref until GC, fine either way)
    processed.add(oldIframe);

    // Create a fresh iframe, copying useful attributes from the old one
    const newIframe = document.createElement('iframe');
    newIframe.src = src;

    // Copy layout-critical attributes so sizing/styling carries over
    for (const attr of oldIframe.attributes) {
      if (['src', 'srcdoc', 'sandbox', 'style'].includes(attr.name.toLowerCase())) continue;
      newIframe.setAttribute(attr.name, attr.value);
    }

    // Explicit styles — skip the site's "hidden" state
    newIframe.style.display = 'block';
    newIframe.style.width = '100%';
    newIframe.style.height = oldIframe.style.height || '400px';

    // Replace old with new
    oldIframe.replaceWith(newIframe);

    console.log('[Uzdevumi Unlocker] Fresh iframe injected:', src.substring(0, 60) + '...');
  }

  // Watch for containers appearing in the DOM
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node.classList?.contains('blocked-iframe-placeholder')) {
          unlockElement(node);
        } else {
          node.querySelectorAll?.('.blocked-iframe-placeholder').forEach(unlockElement);
        }
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  function init () {
    document.querySelectorAll('.blocked-iframe-placeholder').forEach(unlockElement);
    console.log('[Uzdevumi Unlocker] Active');
  }

  document.addEventListener('DOMContentLoaded', init, false);

})();