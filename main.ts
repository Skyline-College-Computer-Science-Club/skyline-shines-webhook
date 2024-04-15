import { handleDiscordOAuth } from "skyline-shines-webhook/lib/internal/discord/oauth.ts";
import { PORT } from "skyline-shines-webhook/envs.ts";

async function main() {
  console.log("hi Deno");

  Deno.serve({ port: PORT }, handleDiscordOAuth);
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await main();
}
