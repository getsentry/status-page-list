# Status Page List

[![npm version](https://img.shields.io/npm/v/@sentry/status-page-list.svg)](https://www.npmjs.com/package/@sentry/status-page-list)

This page is a list of public status pages for various cloud services exposed as a JavaScript library.

Big thank you to [Awesome status pages](https://github.com/ivbeg/awesome-status-pages) and it's creator [Ivan Begtin](https://github.com/ivbeg) for helping provide the initial list of status pages.

If you know of a status page that is not listed here, please open an issue or a pull request. Please also make sure to update [Awesome status pages](https://github.com/ivbeg/awesome-status-pages) as well!

## Usage

To access status page info, you can import a `xxxStatusInfo` import from `@sentry/status-page-list`.

```js
import { sentryStatusInfo } from "@sentry/status-page-list";

const {
  // Sentry
  name,
  // ["sentry.io", "*.sentry.io"]
  domains,
  // "https://status.sentry.io/"
  statusPageUrl,
  // true
  isOperational,
} = sentryStatusInfo;
```

### domainToStatusPageUrls

If you want to map a domain (like `sentry.io`) to it's status page, you can use the `domainToStatusPageUrls` exported object.

```js
import { domainToStatusPageUrls } from "@sentry/status-page-list";

const sentryStatusPageLink = domainToStatusPageUrls["sentry.io"];
// also accepts glob URLs
const sentryStatusPageLink = domainToStatusPageUrls["*.sentry.io"];
```

Since `domainToStatusPageUrls` can get large, we recommend lazy loading it with `await import` or similar.

## Contributing

This project requires yarn v1 and Node.js v20 or higher to run. We recommend configuring your Node version with [Volta](https://volta.sh/).

New status page entries can be added by adding a new entry to `src/data` folder. You can use the `yarn generate:data` CLI helper to add entries via the command line. You can look at the [Sentry entry](./src/data/sentry.ts) as an example.

After adding a new status entry run `yarn generate` to update the codegen files.
