!function(a){woodmartThemeModule.$document.on("wdPjaxStart",function(){woodmartThemeModule.hideShopSidebar()}),woodmartThemeModule.$document.on("wdShopPageInit",function(){woodmartThemeModule.hiddenSidebar()}),woodmartThemeModule.hiddenSidebar=function(){var b=woodmartThemeModule.$body.hasClass("rtl")?"right":"left";(woodmartThemeModule.$body.hasClass("offcanvas-sidebar-desktop")&&woodmartThemeModule.windowWidth>1024||woodmartThemeModule.$body.hasClass("offcanvas-sidebar-tablet")&&woodmartThemeModule.windowWidth<=1024)&&(a(".area-sidebar-shop").addClass("wd-side-hidden wd-"+b+" wd-inited wd-scroll"),a(".area-sidebar-shop .widget-area").addClass("wd-scroll-content")),woodmartThemeModule.$body.hasClass("offcanvas-sidebar-mobile")&&woodmartThemeModule.windowWidth<=768&&(a(".sidebar-container").addClass("wd-side-hidden wd-"+b+" wd-inited wd-scroll"),a(".sidebar-container .widget-area").addClass("wd-scroll-content")),woodmartThemeModule.$body.off("click",".wd-show-sidebar-btn, .wd-sidebar-opener").on("click",".wd-show-sidebar-btn, .wd-sidebar-opener",function(b){b.preventDefault(),a(".sidebar-container").hasClass("wd-opened")?woodmartThemeModule.hideShopSidebar():c()}),woodmartThemeModule.$body.on("click touchstart",".wd-close-side, .close-side-widget",function(){woodmartThemeModule.hideShopSidebar()});var c=function(){a(".sidebar-container").addClass("wd-opened"),a(".wd-close-side").addClass("wd-close-side-opened")};woodmartThemeModule.$document.trigger("wdHiddenSidebarsInited")},woodmartThemeModule.hideShopSidebar=function(){a(".sidebar-container").removeClass("wd-opened"),a(".wd-close-side").removeClass("wd-close-side-opened")},a(document).ready(function(){woodmartThemeModule.hiddenSidebar()})}(jQuery);