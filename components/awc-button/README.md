## type - primary, dashed, text, default
<awc-button>default</awc-button>
<awc-button type="primary">primary</awc-button>
<awc-button type="dashed">dashed</awc-button>
<awc-button type="flat">flat</awc-button>

## Attribute - disabled loading icon
<awc-button disabled type="primary">disabled</awc-button>
<awc-button type="primary" loading>loading</awc-button>
<awc-button icon="user">icon</awc-button>

## Events
<awc-button onclick="onClick(event)" onfocus="onFocus(event)"
    onblur="onBlur(event)">Events
</awc-button>

## Use in JS
```js
    <script  type="module" src="index.js"></script>
    <awc-button>default</awc-button>
```

## Use in React
```js
    import 'awc-button';
    <awc-button>default</awc-button>
```
