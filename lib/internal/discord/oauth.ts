import { OAuth2ClientConfig } from "skyline-shines-webhook/deps.ts";
import {
  // createDiscordOAuthConfig,
  createHelpers,
} from "skyline-shines-webhook/deps.ts";
import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_OAUTH_REDIRECT_URI,
} from "skyline-shines-webhook/envs.ts";
import { kv } from "skyline-shines-webhook/lib/internal/kv/kv.ts";

// export const discordOAuthConfig = createDiscordOAuthConfig({
//   redirectUri: Deno.env.get("DISCORD_OAUTH_REDIRECT_URI")!,
//   scope: "webhook.incoming",
// });

export const tokenUri = "https://discord.com/api/oauth2/token";
export const authorizationEndpointUri = "https://discord.com/oauth2/authorize";
export const scopes = ["webhook.incoming"];

export async function handleDiscordOAuth(request: Request) {
  const { pathname } = new URL(request.url);
  console.log("request", request);
  console.log("kv", kv);
  switch (pathname) {
    case "/oauth/signin":
      return await signIn(request);
    case "/oauth/callback": {
      const { response } = await handleCallback(request);
      return response;
    }
    case "/oauth/signout":
      return await signOut(request);
    case "/test":
      return await getSessionId(request) === undefined
        ? new Response("Unauthorized", { status: 401 })
        : new Response("You are allowed");
    default:
      return new Response(null, { status: 404 });
  }
}

export const discordOAuthConfig: OAuth2ClientConfig = {
  clientId: DISCORD_CLIENT_ID,
  clientSecret: DISCORD_CLIENT_SECRET,
  authorizationEndpointUri: authorizationEndpointUri,
  tokenUri: tokenUri,
  redirectUri: DISCORD_OAUTH_REDIRECT_URI,
  defaults: { scope: scopes },
};

export const {
  signIn,
  handleCallback,
  getSessionId,
  signOut,
} = createHelpers(discordOAuthConfig);
