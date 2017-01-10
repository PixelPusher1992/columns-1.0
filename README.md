# columns-1.0
All you need is to use .makeColumns() method on flex element. After that all child elemens will create columns inside parent element.

# main arguments:
.makeColumns(elementHeight, justify, hr)
elementHeight - height of flex element, 
justify - css 'justify-content' property,
hr - object, adding separator between columns.
Example:
$('.js_columns').makeColumns(300, "space-around", {
        hrAvail: true
});

# hr properties:
hrAvail - adding separator
hrHeight - separator height
hrWidth - separator width
hrRadius - separator property 'border-radius'
hrColor - separator color
hrMargin - horisontal margin between separator and nearby columns
hrBorder - object, use to create dashed or dotted separator.

# hrBorder properties:
hrBorderSize - size of border-separator
hrBorderStyle - 'border-style' property of separator
hrBorderColor - 'border-color' property of separator

#Exampe of full properties use:
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

#features:
- hrBorderColor has a higher priority than hrColor.
- needs JQuery
-  
