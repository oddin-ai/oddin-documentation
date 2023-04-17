---
sidebar_position: 2
---

Oddin’s tags are provided from oddin’s team or can be copied directly from the Tag setting section on the dashboard by clicking on “Show Tag”:

![Tag settings](/img/tag-settings-01.png)

The tag should be shown as followed, and can be copied:

![Tag code](/img/tag-code-02.png)

## Example tag

```js title="sample tag"
<script type="text/javascript">
   (function(){
      var e=document.createElement('script');
      e.async=true; e.type='text/javascript';
      e.src=document.location.protocol + "//web.oddin.ai/api/campaign/otag.js&oid=<ADVERTISER_KEY>&w=1&h=1&cb=’+Date.now()’;
      var me = document.getElementsByTagName('script')[0];
      me.parentNode.insertBefore(e, me);
   })();
</script>
```

:::tip Important

Don't forget to change the tag id after the oid url parameter
