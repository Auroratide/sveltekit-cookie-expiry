# SvelteKit Cookie Expiry

This repo demonstrates an issue with the **Netlify Adapter** for SvelteKit when setting expiry on cookies.

The `/feedme` endpoints set a cookie called "flavor" with an expiry. On local environment, this works without issue, and you can observe the results with the browser's developer tools. When deployed to Netlify, the cookie is split at the date's comma, resulting in a session cookie that cannot be unset naturally.
