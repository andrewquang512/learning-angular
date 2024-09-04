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
