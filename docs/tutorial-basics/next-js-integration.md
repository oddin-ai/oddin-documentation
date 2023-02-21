---
sidebar_position: 6
---

# Next.Js integration

To place the tag in a Next.js application, in every relevant page, if not present, the 'next/script' component should be imported.

```jsx title="/pages/front.tsx"
import Script from 'next/script';
```

With the `<Script />` component as followed in the page.
(both can be implemented in pages/\_app.js or pages/\_app.tsx to include the tag in all pages, next.js version > 11 is needed to support this integration)

```jsx title="/pages/front.tsx"
<Script
  src={'//web.oddin.ai/api/campaign/otag.js?oid=########&h=1&cb=' + Date.now()}
/>
```

If a referral spot should also be rendered in the page, this `<div>` element should be added in the relevant place on the page.

```jsx title="/pages/front.tsx"
<div id='oddin-tag'></div>
```

:::tip Important

Don't forget to change the tag id after the oid url parameter
