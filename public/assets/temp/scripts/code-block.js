jQuery(document).ready(function ($) {
  "use strict";
  loadCss("../assets/css/highlight.min.css");

  // Render Code Blocks

  // Buttons
  renderCodeBlock("Default", "button", true);
  renderCodeBlock("Box-Shadow", "button");
  renderCodeBlock("Round", "button");
  renderCodeBlock("Solid", "button");
  renderCodeBlock("Outline", "button");
  renderCodeBlock("Size-Button", "button");
  renderCodeBlock("Button-With-Icon", "button");
  renderCodeBlock("Group-Button", "button");
  renderCodeBlock("Block-Button", "button");

  // Grid
  renderCodeBlock("Equal-width", ".container", true);
  renderCodeBlock("Equal-column-width", ".container");
  renderCodeBlock("Setting-one-column-width", ".container");
  renderCodeBlock("Variable-width-content", ".container");
  renderCodeBlock("Equal-width-multi-row", ".container");
  renderCodeBlock("Responsive-classes", ".container");
  renderCodeBlock("Stacked-to-horizontal", ".container");
  renderCodeBlock("Mix-and-match", ".container");
  renderCodeBlock("Vertical-alignment", ".container");
  renderCodeBlock("Horizontal-alignment", ".container");
  renderCodeBlock("No-gutters", ".container");
  renderCodeBlock("Column-wrapping", ".container");
  renderCodeBlock("Column-breaks", ".container");
  renderCodeBlock("Reordering-column-order-classes", ".container");
  renderCodeBlock("Offsetting-columns", ".container");
  renderCodeBlock("Margin-utilities", ".container");
  renderCodeBlock("Nesting", ".container");

  // Navbars
  renderCodeBlock("Basic-navbar", ".navbar", true);
  renderCodeBlock("Brand", ".navbar");
  renderCodeBlock("Nav", ".navbar");
  renderCodeBlock("Forms", ".navbar");
  renderCodeBlock("Text", ".navbar");
  renderCodeBlock("Color-scheme", ".navbar");
  renderCodeBlock("External-content", ".nav-h");

  // Breadcrumb
  renderCodeBlock("Default", ".breadcrumb", true);
  renderCodeBlock("Configuring-the-separator", ".breadcrumb");
  renderCodeBlock("Breadcrumb-with-icons", ".breadcrumb");
  renderCodeBlock("Custom-color-breadcrumb", ".breadcrumb");

  // Dropdowns
  renderCodeBlock("Default-Dropdown", ".dropdown", true);
  renderCodeBlock("Box-Shadow-Dropdown", ".dropdown");
  renderCodeBlock("Dropup", ".dropdown");
  renderCodeBlock("Dropright", ".dropdown");
  renderCodeBlock("Dropleft", ".dropdown");
  renderCodeBlock("Size-small", ".dropdown");
  renderCodeBlock("Size-large", ".dropdown");
  renderCodeBlock("Split", ".btn-group");
  renderCodeBlock("With-icons-dropdown", ".dropdown");

  // Paginations
  renderCodeBlock("Default-pagination", ".pagination", true);
  renderCodeBlock("Pagination-with-spacing", ".pagination");
  renderCodeBlock("Pagination-with-icons", ".pagination");
  renderCodeBlock("Solid-pagination", ".pagination");
  renderCodeBlock("Disabled-and-active-states", ".pagination");
  renderCodeBlock("Sizing", ".pagination");
  renderCodeBlock("Alignment", ".pagination");
  renderCodeBlock("Custom-color", ".pagination");
  renderCodeBlock("Custom-color-solid", ".pagination");

  // Tabs
  renderCodeBlock("Default-Tabs", ".tabs, .tab-content", true);
  renderCodeBlock("Filled-tabs", ".tabs, .tab-content");
  renderCodeBlock("With-icons", ".tabs, .tab-content");
  renderCodeBlock("Vertical-pills", ".tabs, .tab-content");
  renderCodeBlock("Vertical-pills-filled", ".tabs, .tab-content");
  renderCodeBlock("Tabs-centered", ".tabs, .tab-content");
  renderCodeBlock("Tabs-left", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-danger", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-success", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-warning", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-danger-filled", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-success-filled", ".tabs, .tab-content");
  renderCodeBlock("Custom-colors-warning-filled", ".tabs, .tab-content");

  // Avatars
  renderCodeBlock("Default-avatar", ".user-avatar", true);
  renderCodeBlock("Avatar-Badge", ".user-avatar");
  renderCodeBlock("Avatar-Shapes", ".user-avatar");
  renderCodeBlock("Group-avatars", ".user-avatar");
  renderCodeBlock("Avatar-Tooltip", ".user-avatar");

  // Cards
  renderCodeBlock("Stat-card", ".moby__stat-card", true);
  renderCodeBlock("Stat-card-with-shadow", ".moby__stat-card");
  renderCodeBlock("Stat-card-alternative", ".moby__stat-card");
  renderCodeBlock("Stat-card-swith-shadow", ".moby__stat-card");
  renderCodeBlock("Image-on-Top", ".card");
  renderCodeBlock("Image-on-bottom", ".card");
  renderCodeBlock("Background-image", ".card");
  renderCodeBlock("Horizontal", ".card");
  renderCodeBlock("Horizontal-right", ".card");
  renderCodeBlock("Border-color", ".card");
  renderCodeBlock("Background-color", ".card");
  renderCodeBlock("Background-color-wo-header", ".card");
  renderCodeBlock("Cover-with-column", ".card");
  renderCodeBlock("Parallax-cover", ".card");
  renderCodeBlock("Blog", ".card");
  renderCodeBlock("Blog-color", ".card");
  renderCodeBlock("Profile-card", ".card");
  renderCodeBlock("Social-card", ".card");
  renderCodeBlock("Group", ".card");

  // Emptys
  renderCodeBlock("Basic-empty", ".empty", true);
  renderCodeBlock("Choose-image", ".empty");
  renderCodeBlock("Customize-empty", ".empty");

  // Lists
  renderCodeBlock("Basic-list", ".list-group", true);
  renderCodeBlock("Active-items", ".list-group");
  renderCodeBlock("Disabled-items", ".list-group");
  renderCodeBlock("Links-and-buttons", ".list-group");
  renderCodeBlock("Flush", ".list-group");
  renderCodeBlock("Contextual-classes", ".list-group");
  renderCodeBlock("With-badges", ".list-group");
  renderCodeBlock("Custom-content", ".list-group");

  // Tolltips
  renderCodeBlock("Basic-tooltip", "button", true);
  renderCodeBlock("Positioning-tooltips", "button");
  renderCodeBlock("HTML-tooltip", "button");

  // Popovers
  renderCodeBlock("Basic-popover", "button", true);
  renderCodeBlock("Positioning-popover", "button");
  renderCodeBlock("Dismiss-on-next-click", "a");
  renderCodeBlock("Disabled-elements", "button");

  // Carousel
  renderCodeBlock("Slides-only", ".carousel", true);
  renderCodeBlock("With-controls", ".carousel");
  renderCodeBlock("With-indicators", ".carousel");
  renderCodeBlock("With-captions", ".carousel");
  renderCodeBlock("Crossfade", ".carousel");
  renderCodeBlock("Individual", ".carousel");

  // Collapse
  renderCodeBlock("Basic-collapse", ".accordion", true);
  renderCodeBlock("Without-spacing-collapse", ".accordion");
  renderCodeBlock("Icons-collapse", ".accordion");
  renderCodeBlock("With-shadow-collapse", ".accordion");
  renderCodeBlock("Without-spacing-with-shadow", ".accordion");

  // Alerts
  renderCodeBlock("Basic-alert", ".alert", true);
  renderCodeBlock("Filled-alert", ".alert");
  renderCodeBlock("Outline-alert", ".alert");

  // Modals
  renderCodeBlock("Basic-modal", "button, .modal", true);
  renderCodeBlock("Remove-animation", "button, .modal");
  renderCodeBlock("Vertically-centered", "button, .modal");
  renderCodeBlock("Optional-sizes", ".modal-btn, .modal");

  // Notifications
  renderCodeBlock("Basic-notifications", "button", true);
  renderCodeBlock("Color-notifications", "button");
  renderCodeBlock("Color-w-positioning-notifications", "button");
  renderCodeBlock("Notifications-with-icons", "button");
  renderCodeBlock("Notifications-with-image", "button");

  // Badges
  renderCodeBlock("Default-badge", ".badge", true);
  renderCodeBlock("Outline-badge", ".badge");
  renderCodeBlock("Round-badge", ".badge");
  renderCodeBlock("Badge-without-radius", ".badge");
  renderCodeBlock("Badge-with-buttons", "button");

  // Progress
  renderCodeBlock("Basic-progress", ".progress", true);
  renderCodeBlock("Striped-progress", ".progress");
  renderCodeBlock("Animated-progress", ".progress");
  renderCodeBlock("Labels-progress", ".progress");
  renderCodeBlock("Multi-color-progress", ".progress");

  // Sliders
  renderCodeBlock("Basic-range", ".form-group", true);
  renderCodeBlock("Custom-range", ".custom-range");

  // Input Group
  renderCodeBlock("Basic-input", ".input-group", true);
  renderCodeBlock("Sizing-input", ".input-group");
  renderCodeBlock("Custom-select", ".input-group");
  renderCodeBlock("Checkboxes-and-radios", ".input-group");
  renderCodeBlock("Custom-forms", ".input-group");
  renderCodeBlock("Wrapping-input", ".input-group");
  renderCodeBlock("Multiple-inputs", ".input-group");

  // Input Group
  renderCodeBlock("Basic-radio", ".radio-btns", true);
  renderCodeBlock("Basic-color-radio", ".radio-btns");
  renderCodeBlock("Filled-radio", ".radio-btns");
  renderCodeBlock("Filled-color-radio", ".radio-btns");
  renderCodeBlock("Radio-circle-dot-radio", ".radio-btns");
  renderCodeBlock("Radio-circle-dot-color-radio", ".radio-btns");
  renderCodeBlock("Radio-border-top", ".radio-btns");
  renderCodeBlock("Radio-border-top-color", ".radio-btns");

  // Checkbox
  renderCodeBlock("Default-checkbox", ".checkbox", true);
  renderCodeBlock("Group-checkboxe", ".checkbox-group");
  renderCodeBlock("Color-checkbox", ".checkbox-group");

  // Switches
  renderCodeBlock("Basic-switches", ".switch", true);
  renderCodeBlock("Switches-color", ".switch");
  renderCodeBlock("Round-switches", ".switch");
  renderCodeBlock("Round-switches-color", ".switch");

  // Date Pickers
  renderCodeBlock("Basic-date-picker", ".form-group", true);
  renderCodeBlock("Date-picker-with-buttons", ".form-group");
  renderCodeBlock("Date-picker-with-monthas-and-years", ".form-group");
  renderCodeBlock("Date-picker-with-multi-monthas", ".form-group");
  renderCodeBlock("Date-picker-with-restrict", ".form-group");
  renderCodeBlock("Range-picker", ".moby__filter-btn-holder");

  // Date Pickers
  renderCodeBlock("Basic-spin", ".spinner-border", true);
  renderCodeBlock("Spinners-colors", ".spinner-border");
  renderCodeBlock("Growing-spinner", ".spinner-grow");
  renderCodeBlock("Growing-color-spinners", ".spinner-grow");
  renderCodeBlock("Spinners-with-buttons", "button");
  renderCodeBlock("Size-spinner", ".spinner-border, .spinner-grow");

  // Auto Complete
  renderCodeBlock("Basic-autocomplete", "#the-basics", true);
  renderCodeBlock("Bloodhound", "#bloodhound");
  renderCodeBlock("Multiple-datasets", "#multiple-datasets");
  renderCodeBlock("Prefetch", "#prefetch");

  // Form Layputs
  renderCodeBlock("Inline-login-form", "form", true);
  renderCodeBlock("Login-form", "form");
  renderCodeBlock("Registration", "form");
});
// END OF CODE BLOCKS

function loadCss(path) {
  // Dynamically load css file for highlight.js
  var cssRef = document.createElement("link");
  cssRef.setAttribute("rel", "stylesheet");
  cssRef.setAttribute("type", "text/css");
  cssRef.setAttribute("href", path);
  document.head.appendChild(cssRef);
}

function renderCodeBlock(id, selector, show = false) {
  if (!id) return;
  var elem = document.getElementById(id);
  if (!elem) return;

  var id = makeId(5);
  elem.appendChild(document.createComment("Start of Code Block"));

  var codeSectionContainer = document.createElement("div");
  codeSectionContainer.setAttribute("class", `code-section-container ${show ? "show-code" : ""} ${id}`);

  var toggleCodeSnippet = document.createElement("button");
  toggleCodeSnippet.setAttribute("class", "btn toggle-code-snippet");
  toggleCodeSnippet.setAttribute("onclick", `handleToggle('.${id}')`);
  toggleCodeSnippet.innerText = "Code";
  codeSectionContainer.appendChild(toggleCodeSnippet);

  var codeSection = document.createElement("div");
  codeSection.setAttribute("class", "code-section text-left");

  var pre = document.createElement("pre");
  var block = parseHtml(elem.outerHTML);
  if (selector) {
    var block = Array.prototype.reduce.call(
      elem.querySelectorAll(selector),
      function (html, node) {
        return html + (parseHtml(node.outerHTML) || parseHtml(node.nodeValue)) + "<br/>";
      },
      ""
    );
  }

  block = block.trim();
  if (block.length === 0) return;
  pre.innerHTML = block;

  hljs.highlightBlock(pre);

  codeSection.appendChild(pre);
  codeSectionContainer.appendChild(codeSection);

  elem.appendChild(codeSectionContainer);
  elem.append(document.createComment("End of Code Block"));
}

function parseHtml(str) {
  str = indent.html(str, { tabString: "  " });
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function handleToggle(id) {
  $(id).toggleClass("show-code");
}

function makeId(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
