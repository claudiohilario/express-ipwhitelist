# express-ipwhitelist
Middleware to express to filter ip by white list

# Usage Example

```js
app.use(ipWhiteList([
    '::1',
    '127.0.0.1'
]))

```
