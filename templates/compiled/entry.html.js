this["dodgercms"] = this["dodgercms"] || {};
this["dodgercms"]["templates"] = this["dodgercms"]["templates"] || {};

this["dodgercms"]["templates"]["entry.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <script id=\"menu-partial\" type=\"text/x-handlebars-template\">\n            <ul class=\"pure-menu-list\">\n                {{#unless index}}\n                    <li class=\"pure-menu-item {{#if children}}has-children{{/if}}\"><a href=\"/{{key}}\" class=\"pure-menu-link\">{{label}}</a></li>\n                    {{#children}}\n                        {{> menu}}\n                    {{/children}}\n                {{/unless}}\n            </ul>\n        </script>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <script id=\"nav-template\" type=\"text/x-handlebars-template\">\n            <div class=\"pure-menu\">\n                <a class=\"pure-menu-heading\" href=\"/\"><img src=\"{{&endpoint}}.dodgercms/logo.png\"></a>\n                <ul class=\"pure-menu-list\">\n                {{#nav}}\n                    {{#unless index}}\n                        <li class=\"pure-menu-item {{#if children}}has-children{{/if}}\"><a href=\"/{{key}}\" class=\"pure-menu-link\">{{label}}</a></li>\n                        {{#children}}\n                            {{> menu}}\n                        {{/children}}\n                    {{/unless}}\n                {{/nav}}\n                </ul>\n            </div>\n        </script>\n";
},"5":function(depth0,helpers,partials,data) {
    return "        <script id=\"header-template\" type=\"text/x-handlebars-template\">\n            <div class=\"pure-menu pure-menu-horizontal breadcrumbs\">\n                <ul class=\"pure-menu-list\">\n                    {{#breadcrumbs}}\n                        <li class=\"pure-menu-item\">\n                            {{#if @last}}\n                                <span class=\"menu-slug\">{{label}}</span>\n                            {{else}}\n                                <a href=\"/{{key}}\" class=\"pure-menu-link\">{{label}}</a>&raquo;\n                            {{/if}}\n                        </li>\n                    {{/breadcrumbs}}\n                </ul>\n            </div>\n        </script>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=helpers.blockHelperMissing, buffer = 
  "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\n\n    <title>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n    \n    <meta name=\"description\" content=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    <link rel=\"shortcut icon\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/favicon.ico\" type=\"image/x-icon\" />\n    <link rel=\"apple-touch-icon\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-57x57.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-72x72.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-76x76.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-114x114.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-120x120.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-144x144.png\" />\n    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".dodgercms/apple-touch-icon-152x152.png\" />\n\n    <link rel=\"stylesheet\" href=\"http://yui.yahooapis.com/pure/0.6.0/pure-min.css\">\n    <link rel=\"stylesheet\" href=\"http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/styles/github.min.css\">\n\n    <script src=\"https://code.jquery.com/jquery-2.1.3.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.5/highlight.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.1/handlebars.min.js\"></script>\n\n    <script>hljs.initHighlightingOnLoad();</script>\n\n    <script>var KEY = '"
    + ((stack1 = ((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "';</script>\n    <script>var BUCKET = '"
    + ((stack1 = ((helper = (helper = helpers.bucket || (depth0 != null ? depth0.bucket : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bucket","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "';</script>\n    <script>var ENDPOINT = '"
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "';</script>\n\n";
  stack1 = ((helper = (helper = helpers['raw-helper'] || (depth0 != null ? depth0['raw-helper'] : depth0)) != null ? helper : alias1),(options={"name":"raw-helper","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers['raw-helper']) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers['raw-helper'] || (depth0 != null ? depth0['raw-helper'] : depth0)) != null ? helper : alias1),(options={"name":"raw-helper","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers['raw-helper']) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers['raw-helper'] || (depth0 != null ? depth0['raw-helper'] : depth0)) != null ? helper : alias1),(options={"name":"raw-helper","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers['raw-helper']) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    \n    <style>\n        body {\n            color: #777;\n            font-family: \"Arimo\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n\n        code {\n            padding: 0.25em;\n            color: #333;\n            background: #f3f3f3;\n            -webkit-text-size-adjust: none;\n            border-radius: 3px;\n        }\n\n        .pure-img-responsive {\n            max-width: 100%;\n            height: auto;\n        }\n\n        /*\n            Add transition to containers so they can push in and out.\n        */\n        #layout,\n        #menu,\n        .menu-link {\n            -webkit-transition: all 0.2s ease-out;\n            -moz-transition: all 0.2s ease-out;\n            -ms-transition: all 0.2s ease-out;\n            -o-transition: all 0.2s ease-out;\n            transition: all 0.2s ease-out;\n        }\n\n        #entry {\n            padding:1.5em 3.25em;\n        }\n\n        #entry .content img {\n            max-width: 100%;\n        }\n\n        /*\n            This is the parent `<div>` that contains the menu and the content area.\n        */\n            #layout {\n            position: relative;\n            padding-left: 0;\n        }\n\n        #layout.active #menu {\n            left: 350px;\n            width: 350px;\n        }\n\n        #layout.active .menu-link {\n            left: 350px;\n        }\n\n        /*\n            The content `<div>` is where all your content goes.\n        */\n        .content {\n            margin: 0;\n            padding: 0;\n            margin-bottom: 50px;\n            line-height: 1.8em;\n        }\n\n        .header {\n            margin: 0;\n            padding: 0;\n            border-bottom: 1px solid #e1e1e1;\n            height:75px;\n            background-color: #f7f7f7;\n        }\n\n        .header .breadcrumbs {\n            padding: 1.75em 3.25em 0 3.25em;\n        }\n\n        .header .breadcrumbs .pure-menu-link {\n            padding: 0 0.5em 0 0 ;\n            color: #2980B9;\n            display: inline-block;\n        }\n\n        .header .breadcrumbs .menu-slug {\n            color: #404040;\n        }\n\n        .header .breadcrumbs .pure-menu-link:hover {\n            background: none;\n        }\n\n        .title {\n            margin: 0 0 2em 0;\n            padding-bottom: 0.75em;\n            border-bottom: 1px solid #f0f0f0;\n        }\n\n        .title h1 {\n            margin: 0 0 0.1em 0;\n            font-size: 2.25em;\n            color: #404040;\n            font-weight: 400;\n            overflow:hidden;\n        }\n\n        .title p {\n            color: #9d9d9d;\n            padding: 0.25em 0;\n            margin: 0;\n            font-size: 100%;\n        }\n\n        .title .last-edited {\n            font-style: italic;\n        }\n\n        /*\n            The `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\n            appears on the left side of the page.\n        */\n\n        #menu {\n            margin-left: -350px; /* \"#menu\" width */\n            width: 350px;\n            position: fixed;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            z-index: 1000; /* so the menu or its navicon stays above all content */\n            background: #191818;\n            overflow-y: auto;\n            -webkit-overflow-scrolling: touch;\n            overflow-x:hidden;\n            font-size: 0.95em;\n        }\n\n        #menu ul.pure-menu-list {\n            margin-left: 0; \n            padding-left: 1.5em; \n        }\n\n        #menu ul.pure-menu-list .has-children {\n            text-transform: uppercase;\n            padding-top: 0.25em;\n        }\n\n        #menu ul.pure-menu-list .has-children a {\n            font-weight: 600;\n            color: #999;\n        }\n\n        #menu ul.pure-menu-list li {\n            padding-top:0.25em;\n            padding-bottom:0.25em;\n        }\n\n        #menu ul.pure-menu-list ul { \n            margin-left: 0.5em; \n            padding-left: 0.5em; \n        }\n\n        #menu ul.pure-menu-list ul > li:first { \n            text-transform: uppercase;\n        }\n\n        /*\n            All anchors inside the menu should be styled like this.\n        */\n        #menu .pure-menu-list a {\n            color: #797979;\n            border: none;\n            padding: 0.0em 0 0.0em 0.1em;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            font-weight: 300;\n        }\n\n        /*\n            Remove all background/borders, since we are applying them to #menu.\n        */\n        #menu .pure-menu,\n        #menu .pure-menu ul {\n            border: none;\n            background: transparent;\n        }\n\n        /*\n            Change color of the anchor links on hover/focus.\n        */\n        #menu .pure-menu li a:hover,\n        #menu .pure-menu li a:focus {\n            text-decoration: underline;\n            color: #929292;\n            background: none;\n        }\n\n        #menu .pure-menu li.has-children a:hover,\n        #menu .pure-menu li.has-children a:focus {\n            text-decoration: none;\n            color: #afafaf;\n            background: none;\n        }\n\n        /*\n            This styles the selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected,\n        #menu .pure-menu-heading {\n            background: #1f8dd6;\n        }\n\n        /*\n            This styles a link within a selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected a {\n            color: #fff;\n        }\n\n        /*\n            This styles the menu heading.\n        */\n        #menu .pure-menu-heading {\n            color: #fff;\n            margin: 0 0 1.5em 0;\n            padding: 0;\n            height:75px;\n            overflow: hidden;\n            border-bottom: 1px solid #107AC0;\n        }\n\n        /* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n        /*\n            The button to open/close the Menu is custom-made and not part of Pure. Here's\n            how it works:\n        */\n\n        /*\n            `.menu-link` represents the responsive menu toggle that shows/hides on\n            small screens.\n        */\n        .menu-link {\n            position: fixed;\n            display: block; /* show this only on small screens */\n            top: 0;\n            left: 0; /* \"#menu width\" */\n            background: #000;\n            background: rgba(0,0,0,0.7);\n            font-size: 10px; /* change this value to increase/decrease button size */\n            z-index: 10;\n            width: 1em;\n            height: auto;\n            padding: 2.1em 1.6em;\n        }\n\n        .menu-link:hover,\n        .menu-link:focus {\n            background: #000;\n        }\n\n        .menu-link span {\n            position: relative;\n            display: block;\n        }\n\n        .menu-link span,\n        .menu-link span:before,\n        .menu-link span:after {\n            background-color: #fff;\n            width: 100%;\n            height: 0.2em;\n        }\n\n        .menu-link span:before,\n        .menu-link span:after {\n            position: absolute;\n            margin-top: -0.6em;\n            content: \" \";\n        }\n\n        .menu-link span:after {\n            margin-top: 0.6em;\n        }\n\n\n        /* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n        /*\n            Hides the menu at `48em`, but modify this based on your app's needs.\n        */\n        @media (min-width: 48em) {\n\n            #layout {\n                padding-left: 350px; /* left col width \"#menu\" */\n                left: 0;\n            }\n            #menu {\n                left: 350px;\n            }\n\n            .menu-link {\n                position: fixed;\n                left: 350px;\n                display: none;\n            }\n\n            #layout.active .menu-link {\n                left: 350px;\n            }\n        }\n\n        @media (max-width: 48em) {\n            /* Only apply this when the window is small. Otherwise, the following\n            * case results in extra padding on the left:\n            * Make the window small.\n            * Tap the menu to trigger the active state.\n            * Make the window large again.\n            */\n            #layout.active {\n                position: relative;\n                left: 350px;\n            }\n        }\n    </style>\n</head>\n    <body>\n        <div id=\"layout\">\n            <a href=\"#menu\" id=\"menuLink\" class=\"menu-link\">\n                <!-- Hamburger icon -->\n                <span></span>\n            </a>\n\n            <!-- Menu gets loaded dynamically -->\n            <nav id=\"menu\"></nav>\n\n            <div id=\"header\" class=\"header\"></div>\n\n            <article id=\"entry\">\n                <div class=\"title\">\n                    <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n                    <p>Last edited on <span class=\"last-edited\">"
    + alias3(((helper = (helper = helpers.modified || (depth0 != null ? depth0.modified : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"modified","hash":{},"data":data}) : helper)))
    + "</span></p>\n                </div>\n\n                <!-- The converted markdown content. -->\n                <div class=\"content\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n            </article>\n\n            <footer>\n\n            </footer>\n        </div>\n\n        <script>\n            (function (window, document) {\n                // retrieve the json file with menu data\n                $.get(\""
    + ((stack1 = ((helper = (helper = helpers.endpoint || (depth0 != null ? depth0.endpoint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endpoint","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias3(((helper = (helper = helpers.dataKey || (depth0 != null ? depth0.dataKey : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dataKey","hash":{},"data":data}) : helper)))
    + "\", function(data) {\n                    var parts = KEY.split('/');\n                    var breadcrumbs = [];\n\n                    // use the menu json to build a tree list\n                    buildFromSegments(data, breadcrumbs, parts);\n\n                    var navTemplate = $(\"#nav-template\").html();\n                    var nav = Handlebars.compile(navTemplate);\n                    var menuPartial = $(\"#menu-partial\").html();\n                    var menu = Handlebars.compile(menuPartial);\n\n                    // register the partial so it can be used in the nav template\n                    Handlebars.registerPartial({\n                        menu: menu\n                    });\n\n                    var navContext = {\n                        nav: data,\n                        endpoint: ENDPOINT\n                    };\n                    var navHtml = nav(navContext);\n                    $(\"nav\").html(navHtml);\n\n\n                    // breadcrumbs\n                    var headerTemplate = $(\"#header-template\").html();\n                    var header = Handlebars.compile(headerTemplate);\n                    var headerContext = {\n                        breadcrumbs: breadcrumbs\n                    };\n\n                    var headerHtml = header(headerContext);\n                    $(\"#header\").html(headerHtml);\n                });\n\n                function buildFromSegments(scope, breadcrumbs, pathSegments) {\n                    // Remove the first segment from the path\n                    var current = pathSegments.shift();\n\n                    // See if that segment already exists in the current scope\n                    var found = findInScope(scope, current);\n\n                    // If we did not find a match, create the new object for this path segment\n                    if (found) {\n                        breadcrumbs.push({\n                            label: found.label\n                        });\n                    \n                        // If there are still path segments left, we need to go deeper\n                        if (pathSegments.length) {\n                            found.children = found.children || [];\n                            buildFromSegments(found.children, breadcrumbs, pathSegments);\n                        }\n                    }\n                }\n\n                // Attempts to find a path segment in the current scope\n                function findInScope(scope, find) {\n                    for (var i = 0; i < scope.length; i++) {\n                        if (scope[i].part === find) {\n                            return scope[i];\n                        }\n                    }\n                }\n            }(this, this.document));\n        </script>\n\n        <script>\n            (function (window, document) {\n\n                var layout = document.getElementById('layout'),\n                    menu = document.getElementById('menu'),\n                    menuLink = document.getElementById('menuLink');\n\n                function toggleClass(element, className) {\n                    var classes = element.className.split(/\\s+/),\n                        length = classes.length;\n\n                    for (var i = 0; i < length; i++) {\n                        if (classes[i] === className) {\n                            classes.splice(i, 1);\n                            break;\n                        }\n                    }\n                    \n                    // The className is not found\n                    if (length === classes.length) {\n                        classes.push(className);\n                    }\n\n                    element.className = classes.join(' ');\n                }\n\n                menuLink.onclick = function (e) {\n                    var active = 'active';\n\n                    e.preventDefault();\n                    toggleClass(layout, active);\n                    toggleClass(menu, active);\n                    toggleClass(menuLink, active);\n                };\n\n            }(this, this.document));\n        </script>\n    </body>\n</html>";
},"useData":true});