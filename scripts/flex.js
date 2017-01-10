$(document).ready(function () {
    $('.js_columns').makeColumns(300, "space-around", {
        hrAvail: true,
        hrColor: "green",
        hrWidth: 2,
        hrMargin: 10,
        hrHeight: 280,
        hrBorder: {
            borderStyle: "dashed",
            borderColor: "red"
        }
    });
});