// Source:
// https://github.com/acmcsufoss/lc-dailies/blob/main/lib/discord/webhook.ts

import type { RESTPostAPIWebhookWithTokenJSONBody } from "skyline-shines-webhook/deps.ts";

/**
 * ExecuteWebhookOptions are the options for a webhook message.
 */
export interface ExecuteWebhookOptions {
  /**
   * url is the webhook url.
   */
  url: string;

  /**
   * data is the webhook data.
   */
  data: RESTPostAPIWebhookWithTokenJSONBody;
}

/**
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export function executeWebhook(o: ExecuteWebhookOptions) {
  return fetch(o.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(o.data),
  });
}
