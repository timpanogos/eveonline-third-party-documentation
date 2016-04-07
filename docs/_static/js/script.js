(function($) {
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "http://cdn.jsdelivr.net/highlight.js/9.2.0/styles/default.min.css";
    $("head").append(style);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://cdn.jsdelivr.net/highlight.js/9.2.0/highlight.min.js";
    $("head").append(script);

    // Occurs when document is ready from loading
    $(function() {
        // Adds the 'docutils' class to all tables
        var tableElement = $("table");
        if (tableElement && tableElement.length > 0 && !tableElement.hasClass("docutils")) {
            tableElement.addClass("docutils");
        }
    });

    // Occurs when document is fully loaded
    $(window).load(function() {
        // Remove the "On Read the Docs" node of the injected panel
        // which links to the project page (we don't want that)
        var onReadTheDocsNode = $(".injected").find("dt").filter(function() {
            return $(this).text() === "On Read the Docs";
        }).parent();
        if (onReadTheDocsNode && onReadTheDocsNode.length > 0) {
            onReadTheDocsNode.remove();
        }

        // Apply highlighting of http code block using 'highlight.js'
        var httpCodeBlocks = $(".highlight-http");
        if (httpCodeBlocks && httpCodeBlocks.length > 0) {
            httpCodeBlocks.each(function(i, element) {
                var pre = document.createElement("pre");
                var httpBlock = $(element).text().trim();
                $(element).before(pre);
                $(element).remove();
                $(pre).text(httpBlock);
                $(pre).each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            });
        }
    });
}
)(jQuery)