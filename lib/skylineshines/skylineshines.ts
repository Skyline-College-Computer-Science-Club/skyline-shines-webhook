import { load, parseRss } from "../../deps.ts";

const env = await load();

export async function fetchShinesFeed() {
    const response = await fetch(env["SOURCE_RSS_FEED_URL"],);

    const xml = await response.text();
    const feed = await parseRss(xml);

    return feed;
}