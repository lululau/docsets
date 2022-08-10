


var READTHEDOCS_DATA = {
    "project": "miller",
    "version": "latest",
    "language": "en",
    "programming_language": "go",
    "page": null,
    "theme": "material",
    "builder": "mkdocs",
    "docroot": "docs/src",
    "source_suffix": ".md",
    "api_host": "https://readthedocs.org",
    "ad_free": false,
    "commit": [
        "c95c054c484315cbc71425d830e167d01c6e1f38"
    ],
    "global_analytics_code": "UA-17997319-1",
    "user_analytics_code": "UA-15651652-1",
    "features": {
        "docsearch_disabled": true
    }
}

// Old variables
var doc_version = "latest";
var doc_slug = "miller";
var page_name = "None";
var html_theme = "material";

// mkdocs_page_input_path is only defined on the RTD mkdocs theme but it isn't
// available on all pages (e.g. missing in search result)
if (typeof mkdocs_page_input_path !== "undefined") {
  READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
      0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
}
