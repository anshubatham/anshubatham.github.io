# PyLearn website

A static, dependency-free website for PyLearn. It includes the landing page (`index.html`) and a deliberately editable privacy-policy draft (`privacy-policy.html`).

## Publish checklist

1. Edit and legally review `privacy-policy.html`; complete every `CONFIRM BEFORE PUBLISHING` item and remove the `noindex` meta tag only when it is ready for public indexing.
2. Confirm the production application ID. `com.allenhousebusinessschool.pyloom` is intentionally retained as an unverified reference in the draft and is not presented as PyLearn’s final identifier.
3. Confirm institutional names, roles, recognition language, and authorization before publishing the acknowledgements.
4. Update the email links in `index.html` only after the privacy/support route is approved.

## Hosting

Upload the contents of this folder to the root directory of any static host, such as GitHub Pages, Netlify, Cloudflare Pages, Firebase Hosting, or a conventional web server. No build process is needed.

If your public domain is `https://example.com`, the final privacy policy address will be:

`https://example.com/privacy-policy.html`

If the host supports clean URLs, you may configure a rewrite from `/privacy-policy` to `/privacy-policy.html`, then use `https://example.com/privacy-policy` in the app store listing. Add that exact final URL to the Android Play Console’s Privacy Policy field only after the policy has been validated and published.
