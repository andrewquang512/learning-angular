bootstrapApplication bootstraps ( loads/ starts) an instance of an Angular application and renders a standalone component as the application's root component unit

To generate component: we can use
```
ng generate component <component name>
```

### Note on Property Binding

For example, <img [src]="someSrc"> binds the src property of the underlying HTMLImageElement DOM object to the value stored in someSrc

Whilst it might look like you're binding the src attribute of the <img> tag, you're actually NOT doing that. Instead, property binding really targets the underlying DOM object property (in this case a property that's also called src) and binds that.

For example, when binding ARIA attributes, you can't target an underlying DOM object property.

Since "Property Binding" wants to target properties. use `Attribute Binding` - bind the respective HTML attribute instead of DOM property
```html
<div 
  role="progressbar" 
  [attr.aria-valuenow]="currentVal" 
  [attr.aria-valuemax]="maxVal">...</div>
```

Angular's change detection mechanism is based on library is zone.js

There are 2 approaches for updating state
option 1: relying on zonejs
option 2: using signals to notify Angular about value changes and required UI updates

signals are trackable data containers - signal is an object that stores a value. Angular manages subscriptions to the signal to get notified about value changes - able to update the UI that needs updating

Computed signals are both lazily evaluated and memoized
`imagePath`'s derivation function does not run to calculate its value until the first time you read `imagePath`. The calculated value is then cached, and if you read `imagePath` again, it will return the cached value without recalculating.

If you then change `seletecUser`, Angular knows that `imagePath`'s cached value is no longer valid, and the next time you read `imagePath` its new value will be calculated.

As a result, you can safely perform computationally expensive derivations in computed signals, such as filtering arrays.
