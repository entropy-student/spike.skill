try {
  await import('./prepare-cards.mjs');
} catch (err) {
  const msg = String(err?.message || err);
  if (msg.includes('patch produced no change: title-demote-to-label')) {
    console.log('title-demote-to-label already uses content props and was skinned by the global token pass; continuing.');
  } else {
    throw err;
  }
}
