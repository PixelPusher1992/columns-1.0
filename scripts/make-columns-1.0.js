(function($){
    jQuery.fn.makeColumns = function(elementHeight, justify, hr){

        /** ADDING CSS TO ELEMENT **/
        $(this).css({
            "display":"flex",
            "flex-direction":"column",
            "flex-wrap":"wrap",
            "height": elementHeight + "px",
            "justify-content": justify
        });

        /** CREATING ARRAY WITH ALL CHILDREN **/
        var $allChildren = [];
        function getAllChildren(e){
            e.children().each(function () {
                $allChildren.push(this);
            });
        }
        if ($allChildren.length == 0){
            getAllChildren($(this));
        }

        /** CREATING COLUMNS **/
        var childHeight = 0,
            maxWidthsArray = [],
            numberOfChilds = $allChildren.length,
            newCounter = 0;
        function createColumn(e) {
            var allColumns = [],
                counter = 0;
            $.each($allChildren, function () {
                if (childHeight <= elementHeight - $(this).outerHeight(true)){
                    childHeight += $(this).outerHeight(true);
                    allColumns.push($(this).outerWidth(true));
                    counter++;
                    numberOfChilds--;
                    newCounter++;
                }
            });
            $allChildren.splice(0, counter);
            var maxWidth = Math.max.apply(null, allColumns);
            maxWidthsArray.push(maxWidth);
            childHeight = 0;
            if(allColumns.length>0 && hr){
                addHr(e, newCounter);
                addHrStyle();
                newCounter++;
            }
        }
        while(numberOfChilds){createColumn($(this));}

        /** ADDING HR **/
        function addHr(e, width) {
            $('<div class="hr"></div>').insertBefore(e.children().eq(width));
        }

        /** ADDING HR STYLE **/
        function addHrStyle() {
            $('.hr').css({
                "padding": 0
            });
            hrHeight();
            hrWidth();
            hrRadius();
            hrColor();
            hrMargin();
            hrBorder();
        }
        function hrHeight() {
            if (hr.hrHeight) {
                $('.hr').css({
                    "height": hr.hrHeight + 'px'
                });
            } else {
                $('.hr').css({
                    "height": elementHeight + 'px'
                });
            }
        }
        function hrWidth() {
            if (hr.hrWidth) {
                $('.hr').css({
                    "width": hr.hrWidth + 'px'
                });
            } else {
                $('.hr').css({
                    "width": '1px'
                });
            }
        }
        function hrRadius() {
            if (!isNaN(hr.hrRadius)) {
                $('.hr').css({
                    "border-radius": hr.hrRadius + 'px'
                });
            } else if(isNaN(hr.hrRadius)){
                $('.hr').css({
                    "border-radius": hr.hrRadius
                });
            } else {
                $('.hr').css({
                    "border-radius": '0'
                });
            }
        }
        function hrColor() {
            if (hr.hrColor) {
                $('.hr').css({
                    "background-color": hr.hrColor
                });
            } else {
                $('.hr').css({
                    "background-color": "white"
                });
            }
        }
        function hrMargin() {
            if (hr.hrMargin && hr.hrHeight){
                $('.hr').css({
                    "margin": (elementHeight - hr.hrHeight)/2 + "px " + hr.hrMargin +'px'
                });
            } else if (hr.hrMargin && hr.hrHeight == undefined){
                $('.hr').css({
                    "margin": "auto " + hr.hrMargin +'px'
                });
            } else if (hr.hrMargin == undefined && hr.hrHeight) {
                $('.hr').css({
                    "margin": (elementHeight - hr.hrHeight)/2 + "px auto"
                });
            } else {
                $('.hr').css({
                    "margin": "auto"
                });
            }
        }


        /** ADDING BORDER TO HR **/
        function hrBorder() {
            if (hr.hrBorder) {
                $('.hr').css({
                    "width": "1px",
                    "background-color": "transparent"
                });
                hrBorderSize();
                hrBorderStyle();
                hrBorderColor();
            }else {
                return false;
            }
        }


        /**HR BORDER STYLES **/
        function hrBorderSize() {
            if (hr.hrBorder.borderSize) {
                $('.hr').css({
                    "border-left-width": hr.hrBorder.borderSize + "px"
                });
            } else {
                $('.hr').css({
                    "border-left-width": "2px"
                });
            }
        }
        function hrBorderStyle() {
            if (hr.hrBorder.borderStyle) {
                $('.hr').css({
                    "border-left-style": hr.hrBorder.borderStyle
                });
            } else {
                $('.hr').css({
                    "border-left-style": "solid"
                });
            }
        }
        function hrBorderColor() {
            if (hr.hrBorder.borderColor) {
                $('.hr').css({
                    "border-left-color": hr.hrBorder.borderColor
                });
            } else {
                $('.hr').css({
                    "border-left-color": "white"
                });
            }
        }


        /** ADDING WIDTH TO ELEMENT **/
        if (numberOfChilds == 0){
            var elementWidth = 0;
            $.each(maxWidthsArray, function (i, v) {
                elementWidth += v;
            });
            if (hr) {
                $.each($('.hr'), function () {
                    elementWidth += $(this).outerWidth(true);
                })
            }
            $(this).css({"width": elementWidth});
        }

    };
})(jQuery);