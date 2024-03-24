import { fetchShinesFeed } from './lib/skylineshines/mod.ts';

async function main() {
  console.log("hi Deno");

  const feed = await fetchShinesFeed();

  console.log(feed);
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await main();
}