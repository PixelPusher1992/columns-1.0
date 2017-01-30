# columns-1.0
All you need is to use .makeColumns() method on flex element. After that all child elemens will create columns inside parent element.

## Require:
- JQuery
- at least `elementHeigt` argument (without height it will be only one flex column)

## Main arguments:
- `elementHeight` - height of flex element, 
- `justify` - css 'justify-content' property,
- `hr.hrAvail` - object, adding separator between columns.
```
.makeColumns(elementHeight, justify, hr)
```

#### Example:
```
$('.js_columns').makeColumns(300, "space-around", {
        hrAvail: true
});
```

## hr properties:
- `hr.hrAvail` - adding separator
- `hr.hrHeight` - separator height
- `hr.hrWidth` - separator width
- `hr.hrRadius` - separator property 'border-radius'
- `hr.hrColor` - separator color
- `hr.hrMargin` - horisontal margin between separator and nearby columns
- `hr.hrBorder` - object, use to create dashed or dotted separator.

## hrBorder properties:
- `hr.hrBorder.borderSize` - size of border-separator
- `hr.hrBorder.borderStyle` - 'border-style' property of separator
- `hr.hrBorder.borderColor` - 'border-color' property of separator

## Example of full properties use:
```
$('.js_columns').makeColumns(300, "space-around", {
        hrAvail: true,
        hrColor: "green",
        hrWidth: 2,
        hrRadius: 20,
        hrMargin: 10,
        hrHeight: 280,
        hrBorder: {
            borderSize: 5,
            borderStyle: "dashed",
            borderColor: "red"
        }
});
```

# features:
- hrBorderColor has a higher priority than hrColor.
