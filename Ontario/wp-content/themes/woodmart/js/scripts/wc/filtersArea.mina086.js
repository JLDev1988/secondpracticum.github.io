!function(a){woodmartThemeModule.filtersArea=function(){var b=a(".filters-area"),c=200;woodmartThemeModule.$body.on("click",".open-filters",function(a){a.preventDefault(),d()?e():(woodmartThemeModule.openFilters(c),setTimeout(function(){woodmartThemeModule.$document.trigger("wdFiltersOpened")},c))}),"no"===woodmart_settings.shop_filters_close&&woodmartThemeModule.$body.on("click",woodmart_settings.ajax_links,function(){d()&&e()});var d=function(){return b=a(".filters-area"),b.hasClass("filters-opened")},e=function(){b=a(".filters-area"),b.removeClass("filters-opened"),b.stop().slideUp(c)}},woodmartThemeModule.openFilters=function(b){var c=a(".filters-area");c.stop().slideDown(b),setTimeout(function(){c.addClass("filters-opened"),woodmartThemeModule.$document.trigger("wdFiltersOpened"),woodmartThemeModule.$body.removeClass("body-filters-opened"),woodmartThemeModule.$document.trigger("wood-images-loaded")},b)},a(document).ready(function(){woodmartThemeModule.filtersArea()})}(jQuery);