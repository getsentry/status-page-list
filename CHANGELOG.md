# Changelog

## 0.2.0

This release adds entries for AirGateway, Algolia, Appveyor, Automattic/Wordpress, Braze, Contentstack, CircleCI, ClearBit, ClickUp, Fly.io, Fullstory, Google Play, Incident.io, Klarna, LaunchDarkly, Linear, LinkedIn, Mapbox, Mixpanel, New Relic, NextRoll, Optimizely, PagerDuty, Pendo, Plausible, Qualtrics, Sanity, Segment, Shortcut, and Travis CI.

This release improves the entries for Atlassian, Codecov, Dropbox, GitHub, Google Ads, Google Cloud, PayPal, Sentry, and Zendesk.

- feat: Add more entries (#15)
- feat: Expand adobe domains (#14)
- feat: Add more entries (#13)

## 0.1.0

This release adds entries for Intercom, Riot Games, Snowflake, Twitch, and GibPotato and fixes tree-shaking by setting `sideEffects` false in `package.json`. It also removes the `isOperational` field in favour of `isServiceDefunct`.

- [BREAKING] feat: Use `isServiceDefunct` instead of `isOperational` (#7)
- feat: Add status.gibpotato.app (#4)
- feat: Add more entries (#5)
- feat: Disable side effects (#6)
- fix: Make atlassian not defunct (#9)

## 0.0.1

This is the first release of `@sentry/status-page-list`. It contains status page entries for the following services:

```
adobe.ts               cloudflare.ts          google_ads.ts          microsoft_cloud.ts     shopify.ts
akamai.ts              codecov.ts             google_cloud.ts        mongodb_cloud.ts       skype.ts
alibaba_cloud.ts       coinbase.ts            google_workspace.ts    netlify.ts             slack.ts
amazon_web_services.ts crowdin.ts             grammarly.ts           npm.ts                 sony_playstation.ts
amplitude.ts           datadog.ts             heroku.ts              okta.ts                square.ts
apple_developer.ts     datadog_eu.ts          hibob.ts               openai.ts              stripe.ts
appsflyer.ts           deno.ts                hubspot.ts             oracle_cloud.ts        sumsub.ts
asana.ts               designmodo.ts          index.ts               paypal.ts              tailscale.ts
atlassian.ts           digitalocean.ts        jitterbit.ts           pinterest.ts           taskade.ts
auth0.ts               discord.ts             lattice.ts             reddit.ts              udemy.ts
azure.ts               dropbox.ts             linode.ts              repetiti.ts            vercel.ts
bamboohr.ts            fastly.ts              lucid.ts               revolut.ts             xero.ts
box.ts                 github.ts              mailchimp.ts           salesforce.ts          zendesk.ts
clickhouse_cloud.ts    gitlab.ts              meta.ts                sentry.ts              zoom.ts
```
