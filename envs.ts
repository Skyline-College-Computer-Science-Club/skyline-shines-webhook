import { load } from "skyline-shines-webhook/deps.ts";

await load({ export: true });

// Leave default port at 8080
export const PORT = parseInt(Deno.env.get("PORT") || "8080");

export const DISCORD_CLIENT_ID = Deno.env.get("DISCORD_CLIENT_ID")!;

export const DISCORD_CLIENT_SECRET = Deno.env.get("DISCORD_CLIENT_SECRET")!;

export const DISCORD_OAUTH_REDIRECT_URI = Deno.env.get(
  "DISCORD_OAUTH_REDIRECT_URI",
)!;

// export const DISCORD_WEBHOOK_URL = Deno.env.get("DISCORD_WEBHOOK_URL")!;
