---
sidebar_position: 3
---

# The tag integration

Oddin’s tags are provided from oddin’s team or can be copied directly from the Tag setting section on the dashboard by clicking on “Show Tag”:

![Tag settings](/img/tag-settings-01.png)

## Example tag

```js title="sample tag"
<script type="text/javascript">
    window.oddinData = window.oddinData || [];
    function otag() { oddinData.push(arguments);}
    otag('ts', new Date());
    otag('oid', '########');
    otag('w', '1');
    otag('h', '1');
    otag('oddin-tag', 'oddin-tag');
</script>
<script async src="https://cdn.oddin.ai/scripts/load_tag.01.min.js"></script>
```

:::tip Important

Don't forget to change the tag id after the oid url parameter
