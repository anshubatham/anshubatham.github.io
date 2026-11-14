# Raja Rani Chor Sipahi website

A dependency-light, mobile-first static marketing site for **Raja Rani Chor Sipahi** by **EassyCode**. It is ready for Firebase Hosting or any static host.

## Add the supplied images

The upload paths referenced in the request were unavailable in this workspace. Before publishing, follow [`public/assets/README.md`](public/assets/README.md) to add the logo and all ten gameplay screenshots. The homepage intentionally references these required files so missing uploads are caught by the validation command.

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run check`. It should report no missing local links after assets are copied.
4. Run `npm start`, then open the shown local address.

## Deploy to Firebase Hosting

1. Create or select a Firebase project in the [Firebase console](https://console.firebase.google.com/).
2. Install the Firebase CLI: `npm install --global firebase-tools`.
3. Sign in: `firebase login`.
4. Copy `.firebaserc.example` to `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with the exact Firebase project ID. Do not commit `.firebaserc` if it is project-specific.
5. Confirm the asset files are in `public/assets/` and run `npm run check`.
6. Deploy: `firebase deploy --only hosting`.

Firebase will print the live Hosting URL. For another static provider, upload the contents of `public/` as the site root and configure `privacy.html` as a normal static page.

## Pre-publication privacy checklist

`public/privacy.html` includes the policy text supplied in the referenced chat; it is not legal advice. Before publishing, verify every claim against the app build, all embedded SDKs, Google Play Data safety disclosures, intended audience, data retention, and applicable law. In particular, confirm or remove its statements about AdMob, Firebase Realtime Database, Google Play Games Services, online play, advertising IDs, diagnostics, and children’s data.

The Google Play links target `com.eassycode.rajaranichorsipahi`.
