// ============================================================
// CodeLevel – CSS – Question Bank
// 15 Levels · ~90 Questions · MCQ, True/False & Code Challenges
// ============================================================

const CSS_QUESTIONS = [

  // ──────────────────────────────────────────────
  // LEVEL 1 – CSS Introduction & Syntax
  // ──────────────────────────────────────────────
  {
    id: "css_1_1",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    explanation: "CSS stands for Cascading Style Sheets. The word 'Cascading' refers to the way styles are applied in a priority order — from external stylesheets, to internal styles, to inline styles — with later/more specific rules overriding earlier/less specific ones.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", title: "CSS – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_intro.asp", title: "CSS Introduction – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_1_2",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      "<css>",
      "<style>",
      "<link>",
      "<script>"
    ],
    correctAnswer: 2,
    explanation: "The <link> tag is used in the <head> section of an HTML document to link an external CSS file: <link rel=\"stylesheet\" href=\"styles.css\">. The <style> tag is for internal CSS written directly in the HTML. The <script> tag is for JavaScript, and <css> is not a valid HTML tag.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link", title: "<link> element – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_howto.asp", title: "How to Add CSS – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_1_3",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "What is the correct CSS syntax to change the text color of all <p> elements to blue?",
    options: [
      "p { text-color: blue; }",
      "p { color: blue; }",
      "p { font-color: blue; }",
      "p.color = blue;"
    ],
    correctAnswer: 1,
    explanation: "In CSS, the 'color' property sets the text color of an element. The correct syntax is: selector { property: value; }. 'text-color' and 'font-color' are not valid CSS properties — this is a very common mistake for beginners!",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color", title: "color – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_syntax.asp", title: "CSS Syntax – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_1_4",
    type: "true_false",
    difficulty: "beginner",
    level: 1,
    question: "Inline styles have higher priority than external and internal stylesheets.",
    correctAnswer: true,
    explanation: "In the CSS cascade, inline styles (applied directly via the 'style' attribute on an HTML element) have higher specificity than styles defined in external or internal stylesheets. The priority order (lowest to highest) is: browser defaults → external stylesheets → internal stylesheets → inline styles. Only '!important' can override inline styles from a stylesheet.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity", title: "Specificity – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_specificity.asp", title: "CSS Specificity – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_1_5",
    type: "mcq",
    difficulty: "beginner",
    level: 1,
    question: "Which of the following is a valid CSS comment?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "# This is a comment"
    ],
    correctAnswer: 2,
    explanation: "CSS only supports block comments using /* comment */. Unlike JavaScript which supports both // and /* */, CSS does NOT recognize // as a comment syntax. <!-- --> is for HTML comments, and # is for comments in languages like Python. Using the wrong comment syntax in CSS will cause parsing errors.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Comments", title: "CSS Comments – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_comments.asp", title: "CSS Comments – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_1_6",
    type: "true_false",
    difficulty: "beginner",
    level: 1,
    question: "CSS can only be written in a separate .css file.",
    correctAnswer: false,
    explanation: "CSS can be applied in three ways: (1) External — in a separate .css file linked with <link>, (2) Internal — inside a <style> tag in the HTML <head>, and (3) Inline — directly on an element using the style attribute. External stylesheets are the recommended approach for maintainability and reusability, but all three methods are valid.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured", title: "How CSS is structured – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_howto.asp", title: "How to Add CSS – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 2 – CSS Selectors
  // ──────────────────────────────────────────────
  {
    id: "css_2_1",
    type: "mcq",
    difficulty: "beginner",
    level: 2,
    question: "Which CSS selector targets an element with the id 'header'?",
    options: [
      ".header",
      "#header",
      "header",
      "*header"
    ],
    correctAnswer: 1,
    explanation: "The # (hash) symbol is used to select elements by their id attribute: #header selects the element with id=\"header\". The . (dot) selects by class, a bare word selects by tag name, and * is the universal selector. Remember: IDs must be unique on a page — only one element should have a given id.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors", title: "ID selectors – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_selectors.asp", title: "CSS Selectors – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_2_2",
    type: "mcq",
    difficulty: "beginner",
    level: 2,
    question: "What does the CSS selector 'div p' select?",
    options: [
      "All <p> elements that are direct children of a <div>",
      "All <p> elements that are descendants (at any depth) of a <div>",
      "All <div> and <p> elements",
      "Only the first <p> element inside a <div>"
    ],
    correctAnswer: 1,
    explanation: "'div p' is a descendant selector — it selects ALL <p> elements that are inside a <div>, regardless of depth (children, grandchildren, etc.). To select ONLY direct children, you would use the child combinator: 'div > p'. The comma selector 'div, p' would select all divs AND all paragraphs.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator", title: "Descendant combinator – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_combinators.asp", title: "CSS Combinators – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_2_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 2,
    question: "Which selector has the HIGHEST specificity?",
    options: [
      "p",
      ".container",
      "#main",
      "div p span"
    ],
    correctAnswer: 2,
    explanation: "CSS specificity is calculated as (inline, IDs, classes, elements). #main has specificity (0,1,0,0), .container has (0,0,1,0), 'div p span' has (0,0,0,3), and 'p' has (0,0,0,1). IDs always outweigh any number of classes, and classes always outweigh any number of element selectors. So #main wins with the highest specificity.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity", title: "Specificity – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_specificity.asp", title: "CSS Specificity – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_2_4",
    type: "true_false",
    difficulty: "beginner",
    level: 2,
    question: "The universal selector (*) selects all elements on a page.",
    correctAnswer: true,
    explanation: "The * (universal selector) matches every single element in the document. It's commonly used for CSS resets: * { margin: 0; padding: 0; box-sizing: border-box; }. However, it has the lowest specificity (0,0,0,0) and can impact performance if overused, since the browser must apply the rule to every element.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors", title: "Universal selectors – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cssref/sel_all.php", title: "CSS * Selector – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_2_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 2,
    question: "What does the selector 'a:hover' do?",
    options: [
      "Selects all <a> elements at all times",
      "Selects <a> elements when the user hovers their mouse over them",
      "Selects only the first <a> element on the page",
      "Selects <a> elements that have been visited"
    ],
    correctAnswer: 1,
    explanation: "'a:hover' is a pseudo-class selector that applies styles to <a> elements ONLY when the user's mouse pointer is hovering over them. Other common pseudo-classes for links include :link (unvisited), :visited (visited), :active (being clicked), and :focus (keyboard-focused). The order matters: remember LVHA (Link, Visited, Hover, Active).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover", title: ":hover – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_pseudo_classes.asp", title: "CSS Pseudo-classes – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_2_6",
    type: "mcq",
    difficulty: "intermediate",
    level: 2,
    question: "What does the selector 'div > p' select?",
    options: [
      "All <p> elements that are descendants of a <div>",
      "All <p> elements that are direct children of a <div> only",
      "All <div> elements inside a <p>",
      "The first <p> element after a <div>"
    ],
    correctAnswer: 1,
    explanation: "The > (child combinator) selects only DIRECT children, not all descendants. 'div > p' selects <p> elements that are immediate children of a <div>. A <p> nested inside a <section> inside a <div> would NOT be selected. Compare this with 'div p' (descendant selector) which selects ALL <p> elements at any depth inside a <div>.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator", title: "Child combinator – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_combinators.asp", title: "CSS Combinators – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 3 – CSS Colors
  // ──────────────────────────────────────────────
  {
    id: "css_3_1",
    type: "mcq",
    difficulty: "beginner",
    level: 3,
    question: "Which of the following is a valid way to set a color in CSS?",
    options: [
      "color: 255-0-0;",
      "color: #ff0000;",
      "color: color(255,0,0);",
      "color: hex(ff0000);"
    ],
    correctAnswer: 1,
    explanation: "CSS supports several color formats: named colors (red), hex (#ff0000 or #f00), RGB (rgb(255,0,0)), RGBA (rgba(255,0,0,0.5)), HSL (hsl(0,100%,50%)), and HSLA. The hex format uses # followed by 6 (or 3) hexadecimal digits representing red, green, and blue values.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value", title: "CSS color values – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_colors.asp", title: "CSS Colors – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_3_2",
    type: "mcq",
    difficulty: "beginner",
    level: 3,
    question: "What color does the hex code #000000 represent?",
    options: [
      "White",
      "Red",
      "Black",
      "Blue"
    ],
    correctAnswer: 2,
    explanation: "#000000 is black — all color channels (Red, Green, Blue) are at their minimum value (0). Conversely, #ffffff is white (all at maximum). Hex codes work on an additive color model: #ff0000 = red, #00ff00 = green, #0000ff = blue. Each pair of hex digits (00-ff) represents a value from 0-255.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color", title: "Hex color – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_colors_hex.asp", title: "CSS Hex Colors – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_3_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 3,
    question: "What does the 'a' in rgba(255, 0, 0, 0.5) control?",
    options: [
      "The alignment of the color",
      "The animation speed",
      "The alpha (opacity/transparency) of the color",
      "The amount of red"
    ],
    correctAnswer: 2,
    explanation: "The 'a' in RGBA stands for Alpha, which controls the opacity/transparency of the color. It ranges from 0 (fully transparent) to 1 (fully opaque). So rgba(255, 0, 0, 0.5) is a semi-transparent red. This is different from the CSS 'opacity' property, which affects the entire element and its children, while RGBA alpha only affects that specific color.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba", title: "rgba() – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_colors_rgb.asp", title: "CSS RGB Colors – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_3_4",
    type: "true_false",
    difficulty: "beginner",
    level: 3,
    question: "The CSS shorthand hex code #f00 is equivalent to #ff0000.",
    correctAnswer: true,
    explanation: "CSS allows shorthand hex codes where each digit is doubled. #f00 expands to #ff0000 (red). This shorthand only works when each pair of digits is the same: #abc = #aabbcc, but #a1b2c3 cannot be shortened. Other examples: #fff = #ffffff (white), #000 = #000000 (black).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color", title: "Hex color – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_colors_hex.asp", title: "CSS Hex Colors – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_3_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 3,
    question: "In the HSL color model, what does the 'H' stand for and what does it represent?",
    options: [
      "Height — the vertical position of the element",
      "Hue — the type/shade of color on the 360° color wheel",
      "Highlight — how bright the color appears",
      "Hex — the hexadecimal value of the color"
    ],
    correctAnswer: 1,
    explanation: "In HSL, H stands for Hue — a degree on the color wheel from 0 to 360. 0° (or 360°) = red, 120° = green, 240° = blue. S stands for Saturation (0% = gray, 100% = full color), and L stands for Lightness (0% = black, 50% = normal, 100% = white). HSL is often considered more intuitive than RGB for humans.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl", title: "hsl() – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_colors_hsl.asp", title: "CSS HSL Colors – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_3_6",
    type: "true_false",
    difficulty: "beginner",
    level: 3,
    question: "CSS supports using named colors like 'tomato', 'coral', and 'steelblue'.",
    correctAnswer: true,
    explanation: "CSS supports 147 named colors including creative names like 'tomato', 'coral', 'steelblue', 'papayawhip', 'blanchedalmond', and 'rebeccapurple' (added in CSS4 to honor Rebecca Meyer). These named colors are convenient for quick prototyping but hex/RGB/HSL give you more precise control.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/named-color", title: "Named colors – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cssref/css_colors.php", title: "CSS Colors – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 4 – CSS Backgrounds
  // ──────────────────────────────────────────────
  {
    id: "css_4_1",
    type: "mcq",
    difficulty: "beginner",
    level: 4,
    question: "Which CSS property sets the background color of an element?",
    options: [
      "color",
      "bg-color",
      "background-color",
      "bgcolor"
    ],
    correctAnswer: 2,
    explanation: "The 'background-color' property sets the background color of an element. Don't confuse it with 'color', which sets the text/foreground color. 'bg-color' and 'bgcolor' are not valid CSS properties (bgcolor was an old HTML attribute, now deprecated).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color", title: "background-color – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_background.asp", title: "CSS Backgrounds – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_4_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "What does 'background-size: cover;' do?",
    options: [
      "Stretches the image to fill the element, distorting if necessary",
      "Scales the image to cover the entire element while maintaining aspect ratio (may crop)",
      "Tiles the image repeatedly",
      "Centers the image without scaling"
    ],
    correctAnswer: 1,
    explanation: "'background-size: cover' scales the background image to be as large as possible so that the element is completely covered, while maintaining the image's aspect ratio. Parts of the image may be cropped if the aspect ratios differ. Compare with 'contain', which scales the image to fit entirely within the element (may leave empty space).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size", title: "background-size – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cssref/css3_pr_background-size.php", title: "background-size – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_4_3",
    type: "true_false",
    difficulty: "beginner",
    level: 4,
    question: "By default, a background image repeats both horizontally and vertically.",
    correctAnswer: true,
    explanation: "By default, background-repeat is set to 'repeat', which tiles the background image both horizontally and vertically. You can change this with: 'no-repeat' (show once), 'repeat-x' (horizontal only), 'repeat-y' (vertical only), 'space' (repeat with equal gaps), or 'round' (repeat and stretch to fill).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat", title: "background-repeat – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_background_repeat.asp", title: "CSS Background Repeat – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_4_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "What is the correct syntax for the CSS 'background' shorthand property?",
    options: [
      "background: url('img.jpg'), no-repeat, center, cover;",
      "background: url('img.jpg') no-repeat center / cover;",
      "background: image('img.jpg') no-repeat center cover;",
      "background: src('img.jpg') center no-repeat cover;"
    ],
    correctAnswer: 1,
    explanation: "The background shorthand syntax is: background: [color] [image] [repeat] [position] / [size]. The / separates position from size. So 'background: url('img.jpg') no-repeat center / cover' sets a non-repeating, centered background image that covers the element. Note the forward slash before 'cover'.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background", title: "background shorthand – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_background_shorthand.asp", title: "CSS Background Shorthand – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_4_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 4,
    question: "What does 'background-attachment: fixed;' do?",
    options: [
      "Prevents the background from loading",
      "Fixes the background image relative to the viewport so it doesn't scroll with the page",
      "Locks the background color permanently",
      "Attaches the background to a specific element only"
    ],
    correctAnswer: 1,
    explanation: "'background-attachment: fixed' fixes the background image relative to the viewport (the browser window), creating a parallax-like effect where the content scrolls over a stationary background image. The default value is 'scroll', which scrolls the background with the element. 'local' scrolls with the element's content.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment", title: "background-attachment – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cssref/pr_background-attachment.php", title: "background-attachment – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_4_6",
    type: "true_false",
    difficulty: "intermediate",
    level: 4,
    question: "You can apply multiple background images to a single element in CSS.",
    correctAnswer: true,
    explanation: "CSS3 allows multiple background images on a single element, separated by commas: background-image: url('top.png'), url('bottom.png'). The first image listed appears on top. Each can have its own repeat, position, and size values. This is very useful for layering decorative images without extra HTML elements.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds", title: "Using multiple backgrounds – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_backgrounds.asp", title: "CSS Multiple Backgrounds – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 5 – CSS Borders
  // ──────────────────────────────────────────────
  {
    id: "css_5_1",
    type: "mcq",
    difficulty: "beginner",
    level: 5,
    question: "Which CSS property is used to add a border to an element?",
    options: [
      "outline",
      "border",
      "frame",
      "edge"
    ],
    correctAnswer: 1,
    explanation: "The 'border' property is the shorthand for setting the width, style, and color of an element's border: border: 2px solid black. While 'outline' is similar in appearance, it is NOT the same — outlines don't take up space in the layout and can't be rounded or styled per-side.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border", title: "border – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_border.asp", title: "CSS Borders – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_5_2",
    type: "mcq",
    difficulty: "beginner",
    level: 5,
    question: "What is the correct order for the border shorthand property?",
    options: [
      "border: color style width;",
      "border: width style color;",
      "border: style width color;",
      "border: width color style;"
    ],
    correctAnswer: 1,
    explanation: "The border shorthand property follows the order: width, style, color. For example: border: 2px solid red. The style is required (solid, dashed, dotted, double, etc.) — without it, no border will appear. Width defaults to 'medium' and color defaults to the element's text color if not specified.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border", title: "border – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_border.asp", title: "CSS Borders – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_5_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 5,
    question: "Which property creates rounded corners on an element?",
    options: [
      "border-curve",
      "corner-radius",
      "border-radius",
      "round-corners"
    ],
    correctAnswer: 2,
    explanation: "'border-radius' creates rounded corners. You can set all corners at once (border-radius: 10px), each corner individually (border-radius: 10px 20px 30px 40px — top-left, top-right, bottom-right, bottom-left), or create a perfect circle with border-radius: 50% on a square element.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius", title: "border-radius – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_border_rounded.asp", title: "CSS Rounded Borders – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_5_4",
    type: "true_false",
    difficulty: "beginner",
    level: 5,
    question: "You can set different border styles for each side of an element (top, right, bottom, left).",
    correctAnswer: true,
    explanation: "CSS allows you to style each border side independently using: border-top, border-right, border-bottom, border-left. For example: border-top: 3px solid red; border-bottom: 1px dashed blue; This is useful for creating visual separators, underline effects, or asymmetric designs.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-top", title: "border-top – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_border_sides.asp", title: "CSS Border Sides – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_5_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 5,
    question: "What value of border-radius will make a square element appear as a perfect circle?",
    options: [
      "border-radius: 100px;",
      "border-radius: 50%;",
      "border-radius: circle;",
      "border-radius: round;"
    ],
    correctAnswer: 1,
    explanation: "Setting border-radius: 50% on a square element creates a perfect circle because 50% of the width and 50% of the height meet to form a fully rounded shape. Using a fixed pixel value (like 100px) only works if the element is exactly 200px × 200px. 'circle' and 'round' are not valid border-radius values.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius", title: "border-radius – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_border_rounded.asp", title: "CSS Rounded Borders – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 6 – CSS Margins & Padding
  // ──────────────────────────────────────────────
  {
    id: "css_6_1",
    type: "mcq",
    difficulty: "beginner",
    level: 6,
    question: "What is the difference between margin and padding?",
    options: [
      "There is no difference — they are interchangeable",
      "Margin is the space OUTSIDE the border; padding is the space INSIDE the border",
      "Padding is the space outside the border; margin is the space inside the border",
      "Margin only works on block elements; padding only on inline elements"
    ],
    correctAnswer: 1,
    explanation: "Margin is the space OUTSIDE an element's border — it separates the element from its neighbors. Padding is the space INSIDE the border — it separates the content from the border. Think of it like a picture frame: padding is the matting between the picture and the frame, margin is the wall space between frames.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin", title: "margin – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_margin.asp", title: "CSS Margins – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_6_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 6,
    question: "What does 'margin: 10px 20px 30px 40px;' apply?",
    options: [
      "Top: 10px, Right: 10px, Bottom: 20px, Left: 20px",
      "Top: 10px, Right: 20px, Bottom: 30px, Left: 40px",
      "Top: 40px, Right: 30px, Bottom: 20px, Left: 10px",
      "All sides: 10px, 20px, 30px, and 40px combined"
    ],
    correctAnswer: 1,
    explanation: "When four values are specified, they follow the clockwise TRBL order: Top, Right, Bottom, Left (remember: 'TRouBLe'). So margin: 10px 20px 30px 40px means top=10px, right=20px, bottom=30px, left=40px. With 2 values: top/bottom, left/right. With 3 values: top, left/right, bottom.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin", title: "margin – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_margin.asp", title: "CSS Margins – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_6_3",
    type: "true_false",
    difficulty: "intermediate",
    level: 6,
    question: "Vertical margins between adjacent block elements can collapse (merge) into a single margin.",
    correctAnswer: true,
    explanation: "Margin collapsing is a CSS behavior where the vertical margins of adjacent block-level elements merge into a single margin equal to the LARGER of the two. For example, if one element has margin-bottom: 20px and the next has margin-top: 30px, the gap between them will be 30px (not 50px). This only happens with vertical margins, never horizontal.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing", title: "Mastering margin collapsing – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_margin_collapse.asp", title: "CSS Margin Collapse – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_6_4",
    type: "mcq",
    difficulty: "beginner",
    level: 6,
    question: "What does 'margin: 0 auto;' do?",
    options: [
      "Removes all margins",
      "Centers a block element horizontally within its parent",
      "Adds automatic margin to all sides",
      "Makes the element take the full width"
    ],
    correctAnswer: 1,
    explanation: "'margin: 0 auto' sets top/bottom margins to 0 and left/right margins to 'auto'. The 'auto' value tells the browser to distribute equal space on both sides, effectively centering a block-level element horizontally. Important: this only works if the element has a defined width — it doesn't work on inline elements or elements without a set width.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin", title: "margin – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_margin.asp", title: "CSS Margins – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_6_5",
    type: "true_false",
    difficulty: "beginner",
    level: 6,
    question: "Padding can have negative values just like margin.",
    correctAnswer: false,
    explanation: "Padding CANNOT have negative values — it must be zero or positive. Margin, however, CAN have negative values, which pulls the element in that direction (e.g., margin-top: -20px moves the element up by 20px). Negative margins are sometimes used for overlapping elements or creative layouts.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding", title: "padding – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_padding.asp", title: "CSS Padding – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_6_6",
    type: "mcq",
    difficulty: "intermediate",
    level: 6,
    question: "If an element has padding: 20px and background-color: blue, where does the blue color appear?",
    options: [
      "Only behind the text content",
      "Behind the content AND the padding area",
      "Behind the content, padding, AND margin",
      "Only in the padding area, not behind the content"
    ],
    correctAnswer: 1,
    explanation: "The background-color of an element extends through the content area AND the padding area, but NOT into the margin area. Margins are always transparent. This is why adding padding to an element with a background color makes the colored area larger. The border sits between the padding and the margin.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model", title: "CSS Box Model – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_padding.asp", title: "CSS Padding – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 7 – CSS Box Model
  // ──────────────────────────────────────────────
  {
    id: "css_7_1",
    type: "mcq",
    difficulty: "beginner",
    level: 7,
    question: "What are the four components of the CSS Box Model (from inside to outside)?",
    options: [
      "Content → Margin → Border → Padding",
      "Content → Padding → Border → Margin",
      "Margin → Border → Padding → Content",
      "Border → Padding → Content → Margin"
    ],
    correctAnswer: 1,
    explanation: "The CSS Box Model consists of four layers from inside to outside: (1) Content — the actual text/image, (2) Padding — space between content and border, (3) Border — the visible edge, (4) Margin — space between the border and neighboring elements. Every HTML element is represented as a rectangular box following this model.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model", title: "Introduction to the CSS Box Model – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_boxmodel.asp", title: "CSS Box Model – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_7_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 7,
    question: "An element has width: 200px, padding: 20px, and border: 5px solid. What is its total rendered width?",
    options: [
      "200px",
      "225px",
      "250px",
      "245px"
    ],
    correctAnswer: 2,
    explanation: "By default (box-sizing: content-box), the width property only sets the content width. Total width = content (200px) + left padding (20px) + right padding (20px) + left border (5px) + right border (5px) = 250px. This is why many developers use box-sizing: border-box, which makes width include padding and border.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing", title: "box-sizing – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_boxmodel.asp", title: "CSS Box Model – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_7_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 7,
    question: "What does 'box-sizing: border-box;' do?",
    options: [
      "Adds a visible box/border around the element",
      "Makes width and height include content, padding, AND border",
      "Removes all padding and borders",
      "Makes the element take up the full viewport"
    ],
    correctAnswer: 1,
    explanation: "'box-sizing: border-box' changes how width/height are calculated. Instead of the default (content-box) where width only applies to content, border-box makes width/height include content + padding + border. So an element with width: 200px, padding: 20px, border: 5px will render at exactly 200px total. This is why the CSS reset '* { box-sizing: border-box; }' is so popular.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing", title: "box-sizing – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_box-sizing.asp", title: "CSS Box Sizing – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_7_4",
    type: "true_false",
    difficulty: "intermediate",
    level: 7,
    question: "The margin of an element is included in its total width when using box-sizing: border-box.",
    correctAnswer: false,
    explanation: "Even with box-sizing: border-box, margin is NEVER included in the element's width or height calculation. border-box includes content + padding + border, but margin is always external. Margin represents the space between elements, not part of the element itself. This is true for both content-box and border-box.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing", title: "box-sizing – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_box-sizing.asp", title: "CSS Box Sizing – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_7_5",
    type: "mcq",
    difficulty: "beginner",
    level: 7,
    question: "Which browser developer tool tab lets you visually inspect the box model of an element?",
    options: [
      "Console tab",
      "Network tab",
      "Elements / Computed tab (shows the box model diagram)",
      "Sources tab"
    ],
    correctAnswer: 2,
    explanation: "In browser DevTools (F12), the Elements panel's Computed tab displays an interactive box model diagram showing the exact content, padding, border, and margin values for any selected element. This is an essential tool for debugging layout issues. You can hover over each section to see it highlighted on the page.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model", title: "The box model – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_boxmodel.asp", title: "CSS Box Model – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 8 – CSS Text Styling
  // ──────────────────────────────────────────────
  {
    id: "css_8_1",
    type: "mcq",
    difficulty: "beginner",
    level: 8,
    question: "Which CSS property is used to change the size of text?",
    options: [
      "text-size",
      "font-size",
      "text-style",
      "font-height"
    ],
    correctAnswer: 1,
    explanation: "'font-size' is the correct property to set the size of text. Common units include px (pixels), em (relative to parent), rem (relative to root), % (percentage), vw (viewport width), and keywords like small, medium, large. 'text-size' is not a valid CSS property.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size", title: "font-size – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font_size.asp", title: "CSS Font Size – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_8_2",
    type: "mcq",
    difficulty: "beginner",
    level: 8,
    question: "How do you make text bold in CSS?",
    options: [
      "font-style: bold;",
      "text-weight: bold;",
      "font-weight: bold;",
      "text-decoration: bold;"
    ],
    correctAnswer: 2,
    explanation: "'font-weight' controls text boldness. Values include: 'normal' (400), 'bold' (700), 'lighter', 'bolder', or numeric values from 100 to 900 in steps of 100. 'font-style' is for italic/oblique, not bold. 'text-decoration' is for underlines, overlines, and line-throughs.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight", title: "font-weight – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font_style.asp", title: "CSS Font Style – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_8_3",
    type: "mcq",
    difficulty: "beginner",
    level: 8,
    question: "Which property controls the horizontal alignment of text?",
    options: [
      "vertical-align",
      "text-align",
      "align-items",
      "float"
    ],
    correctAnswer: 1,
    explanation: "'text-align' sets the horizontal alignment of inline content within a block element. Values include: left, right, center, justify. 'vertical-align' handles vertical positioning of inline elements. 'align-items' is a Flexbox/Grid property. 'float' is for floating elements, not text alignment.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align", title: "text-align – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_text_align.asp", title: "CSS Text Alignment – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_8_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 8,
    question: "What does 'text-decoration: line-through;' do?",
    options: [
      "Adds an underline to text",
      "Adds an overline above text",
      "Draws a line through the middle of text (strikethrough)",
      "Removes all decorations from text"
    ],
    correctAnswer: 2,
    explanation: "'text-decoration: line-through' draws a horizontal line through the middle of the text, creating a strikethrough effect. This is commonly used to show deleted content, corrections, or sale prices. Other values: 'underline' (line below), 'overline' (line above), 'none' (removes decorations, often used on links).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration", title: "text-decoration – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_text_decoration.asp", title: "CSS Text Decoration – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_8_5",
    type: "true_false",
    difficulty: "intermediate",
    level: 8,
    question: "The 'line-height' property only affects the spacing between lines of text when there are multiple lines.",
    correctAnswer: false,
    explanation: "'line-height' affects every line of text, even single lines. It sets the height of each line box. On a single line of text, line-height determines the total height allocated to that line, which affects vertical centering and overall element height. A common trick: setting line-height equal to the element's height centers single-line text vertically.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height", title: "line-height – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_text_spacing.asp", title: "CSS Text Spacing – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_8_6",
    type: "mcq",
    difficulty: "intermediate",
    level: 8,
    question: "Which CSS property adds space between individual letters?",
    options: [
      "word-spacing",
      "text-indent",
      "letter-spacing",
      "white-space"
    ],
    correctAnswer: 2,
    explanation: "'letter-spacing' controls the space between individual characters (letters). Positive values increase space, negative values decrease it. 'word-spacing' adds space between words. 'text-indent' indents the first line of text. 'white-space' controls how whitespace is handled (wrapping, collapsing, etc.).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing", title: "letter-spacing – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_text_spacing.asp", title: "CSS Text Spacing – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 9 – CSS Fonts
  // ──────────────────────────────────────────────
  {
    id: "css_9_1",
    type: "mcq",
    difficulty: "beginner",
    level: 9,
    question: "Which CSS property specifies the font to use for text?",
    options: [
      "text-font",
      "font-family",
      "font-type",
      "typeface"
    ],
    correctAnswer: 1,
    explanation: "'font-family' specifies the font for an element. You should provide a 'font stack' — a list of fonts in order of preference, ending with a generic family: font-family: 'Helvetica Neue', Arial, sans-serif. If the first font isn't available, the browser tries the next one.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family", title: "font-family – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font.asp", title: "CSS Fonts – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_9_2",
    type: "mcq",
    difficulty: "beginner",
    level: 9,
    question: "Which of these is a generic CSS font family?",
    options: [
      "Arial",
      "Times New Roman",
      "sans-serif",
      "Helvetica"
    ],
    correctAnswer: 2,
    explanation: "CSS defines five generic font families that every browser must support: 'serif' (with decorative strokes, like Times), 'sans-serif' (clean, like Arial), 'monospace' (fixed-width, like Courier), 'cursive' (handwriting style), and 'fantasy' (decorative). Arial, Helvetica, and Times New Roman are specific fonts, not generic families.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family", title: "font-family – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font_fallbacks.asp", title: "CSS Font Fallbacks – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_9_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 9,
    question: "How do you import a Google Font into your CSS?",
    options: [
      "@font-face { google: 'Roboto'; }",
      "@import url('https://fonts.googleapis.com/css2?family=Roboto');",
      "font-import: google('Roboto');",
      "link: google-fonts('Roboto');"
    ],
    correctAnswer: 1,
    explanation: "Google Fonts can be imported into CSS using @import with the Google Fonts URL. Alternatively (and preferably for performance), you can use a <link> tag in the HTML <head>. The @import method is convenient but can slow down page loading because stylesheets are loaded sequentially.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@import", title: "@import – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font_google.asp", title: "CSS Google Fonts – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_9_4",
    type: "true_false",
    difficulty: "beginner",
    level: 9,
    question: "Font names with spaces in them must be enclosed in quotes in CSS (e.g., 'Times New Roman').",
    correctAnswer: true,
    explanation: "If a font name contains spaces, it must be wrapped in quotes (single or double): font-family: 'Times New Roman', serif. Without quotes, the browser would try to interpret each word separately. Single-word font names like Arial don't require quotes (but it's good practice to use them anyway).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family", title: "font-family – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_font.asp", title: "CSS Fonts – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_9_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 9,
    question: "What CSS rule is used to define a custom font from a font file?",
    options: [
      "@custom-font",
      "@font-face",
      "@import-font",
      "@define-font"
    ],
    correctAnswer: 1,
    explanation: "@font-face is the CSS rule for defining custom fonts by specifying the font name and source file(s). Example: @font-face { font-family: 'MyFont'; src: url('myfont.woff2') format('woff2'); }. This allows you to use fonts that aren't installed on the user's system. WOFF2 is the most efficient format for web fonts.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face", title: "@font-face – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_fonts.asp", title: "CSS Web Fonts – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_9_6",
    type: "mcq",
    difficulty: "intermediate",
    level: 9,
    question: "Which font format offers the best compression and performance for modern web browsers?",
    options: [
      "TTF (TrueType Font)",
      "OTF (OpenType Font)",
      "WOFF2 (Web Open Font Format 2)",
      "SVG Font"
    ],
    correctAnswer: 2,
    explanation: "WOFF2 (Web Open Font Format 2) offers the best compression — typically 30% smaller than WOFF and significantly smaller than TTF/OTF. It is supported by all modern browsers and is the recommended format for web fonts. WOFF was the original web font format, while TTF/OTF are desktop font formats. SVG fonts are deprecated.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face", title: "@font-face – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_fonts.asp", title: "CSS Web Fonts – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 10 – CSS Display Property
  // ──────────────────────────────────────────────
  {
    id: "css_10_1",
    type: "mcq",
    difficulty: "beginner",
    level: 10,
    question: "What is the default display value of a <div> element?",
    options: [
      "inline",
      "block",
      "inline-block",
      "flex"
    ],
    correctAnswer: 1,
    explanation: "<div> is a block-level element by default. Block elements take up the full available width and start on a new line. Other block elements include <p>, <h1>-<h6>, <section>, <article>, <header>, <footer>, and <form>. You can change this behavior using the display property.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_display_visibility.asp", title: "CSS Display – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_10_2",
    type: "mcq",
    difficulty: "beginner",
    level: 10,
    question: "What is the default display value of a <span> element?",
    options: [
      "block",
      "inline",
      "inline-block",
      "none"
    ],
    correctAnswer: 1,
    explanation: "<span> is an inline element by default. Inline elements do NOT start on a new line and only take up as much width as their content needs. Other inline elements include <a>, <strong>, <em>, <img>, <input>, and <code>. Important: width and height properties have NO effect on inline elements.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_display_visibility.asp", title: "CSS Display – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_10_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 10,
    question: "What does 'display: inline-block;' allow that 'display: inline;' does not?",
    options: [
      "Allows the element to appear on a new line",
      "Allows setting width and height while keeping the element inline",
      "Allows the element to become invisible",
      "Allows the element to use flexbox properties"
    ],
    correctAnswer: 1,
    explanation: "'display: inline-block' combines the best of both worlds: the element flows inline with other content (doesn't start a new line) BUT you can set width, height, margin, and padding on all sides — which you cannot do with regular inline elements. This is commonly used for navigation items and buttons.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_inline-block.asp", title: "CSS Inline-block – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_10_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 10,
    question: "What is the difference between 'display: none;' and 'visibility: hidden;'?",
    options: [
      "They are exactly the same",
      "'display: none' removes the element from the layout entirely; 'visibility: hidden' hides it but it still takes up space",
      "'visibility: hidden' removes the element; 'display: none' just makes it transparent",
      "'display: none' only works on block elements; 'visibility: hidden' works on all"
    ],
    correctAnswer: 1,
    explanation: "'display: none' completely removes the element from the document flow — it takes up NO space and it's as if the element doesn't exist. 'visibility: hidden' makes the element invisible but it STILL occupies its space in the layout, leaving a gap. This distinction is important for layout and accessibility purposes.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_display_visibility.asp", title: "CSS Display/Visibility – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_10_5",
    type: "code",
    difficulty: "intermediate",
    level: 10,
    question: "Write CSS to make a <span> behave like a block element with a width of 200px and height of 100px.",
    starterCode: "span {\n  /* Your CSS here */\n}",
    expectedOutput: "display: block",
    hints: [
      "Inline elements don't accept width/height — you need to change the display type first",
      "The 'display' property can change how an element behaves in the layout"
    ],
    explanation: "By default, <span> is inline and ignores width/height. Setting 'display: block' converts it to a block-level element, allowing width and height to take effect. You could also use 'inline-block' if you wanted to keep it inline while accepting dimensions.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_display_visibility.asp", title: "CSS Display – W3Schools" }
    ],
    xp: 30
  },
  {
    id: "css_10_6",
    type: "true_false",
    difficulty: "beginner",
    level: 10,
    question: "An inline element starts on a new line and takes up the full width of its parent.",
    correctAnswer: false,
    explanation: "This describes BLOCK elements, not inline. Inline elements do NOT start on a new line — they flow within the text on the same line as adjacent content. They only take up as much width as their content requires. Block elements are the ones that start on a new line and stretch to fill the full width of their parent.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display", title: "display – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_display_visibility.asp", title: "CSS Display – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 11 – CSS Position Property
  // ──────────────────────────────────────────────
  {
    id: "css_11_1",
    type: "mcq",
    difficulty: "beginner",
    level: 11,
    question: "What is the default value of the CSS 'position' property?",
    options: [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    correctAnswer: 3,
    explanation: "The default position value is 'static'. Static elements follow the normal document flow — they are not affected by top, right, bottom, or left properties. Elements only respond to positioning offsets (top, right, bottom, left) when their position is set to relative, absolute, fixed, or sticky.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_11_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 11,
    question: "What does 'position: relative;' do to an element?",
    options: [
      "Removes it from the document flow entirely",
      "Positions it relative to the viewport",
      "Allows it to be offset from its normal position while still occupying its original space",
      "Fixes it to the top of the page"
    ],
    correctAnswer: 2,
    explanation: "'position: relative' keeps the element in the normal document flow (it still takes up its original space), but allows you to offset it using top, right, bottom, left. The offset moves the element visually but its original space is preserved. Crucially, it also establishes a new positioning context for absolutely positioned children.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_11_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 11,
    question: "An element with 'position: absolute;' is positioned relative to:",
    options: [
      "The viewport (browser window)",
      "Its nearest positioned ancestor (any ancestor with position other than static)",
      "Always the <body> element",
      "Its immediate parent regardless of the parent's position"
    ],
    correctAnswer: 1,
    explanation: "An absolutely positioned element is removed from the normal flow and positioned relative to its nearest ancestor that has a position value other than 'static' (i.e., relative, absolute, fixed, or sticky). If no such ancestor exists, it is positioned relative to the <html> element. This is why you often see 'position: relative' on parent elements — to create a positioning context.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_11_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 11,
    question: "What does 'position: fixed;' do?",
    options: [
      "Fixes the element in the normal document flow",
      "Positions the element relative to its parent",
      "Positions the element relative to the viewport, so it stays in place when scrolling",
      "Prevents the element from being moved by JavaScript"
    ],
    correctAnswer: 2,
    explanation: "'position: fixed' positions the element relative to the browser viewport (the visible window area). The element is removed from the document flow and stays in the same position even when the page is scrolled. This is commonly used for sticky navigation bars, floating action buttons, and modal overlays.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_11_5",
    type: "true_false",
    difficulty: "intermediate",
    level: 11,
    question: "'position: sticky;' makes an element behave as 'relative' until a scroll threshold is reached, then it acts as 'fixed'.",
    correctAnswer: true,
    explanation: "'position: sticky' is a hybrid: the element is treated as 'relative' until it crosses a specified scroll threshold (defined with top, right, bottom, or left), at which point it becomes 'fixed' within its scrolling container. Common use: headers that scroll with content then stick to the top. It requires at least one offset value (e.g., top: 0) to work.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_11_6",
    type: "code",
    difficulty: "intermediate",
    level: 11,
    question: "Write CSS to position a child element at the bottom-right corner of its parent. Assume the parent already has 'position: relative;'.",
    starterCode: ".child {\n  /* Your CSS here */\n}",
    expectedOutput: "position: absolute",
    hints: [
      "To position relative to a parent, you need 'position: absolute' on the child",
      "Use 'bottom' and 'right' properties with a value of 0"
    ],
    explanation: "To place a child at the bottom-right of a positioned parent, use: position: absolute; bottom: 0; right: 0;. The child is removed from normal flow and positioned relative to the nearest positioned ancestor (the parent with position: relative). bottom: 0 aligns to the bottom edge, right: 0 to the right edge.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position", title: "position – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_positioning.asp", title: "CSS Position – W3Schools" }
    ],
    xp: 30
  },

  // ──────────────────────────────────────────────
  // LEVEL 12 – CSS z-index
  // ──────────────────────────────────────────────
  {
    id: "css_12_1",
    type: "mcq",
    difficulty: "beginner",
    level: 12,
    question: "What does the 'z-index' property control?",
    options: [
      "The horizontal position of an element",
      "The vertical position of an element",
      "The stacking order (front-to-back layering) of positioned elements",
      "The zoom level of an element"
    ],
    correctAnswer: 2,
    explanation: "'z-index' controls the stacking order of elements along the z-axis (depth). Higher z-index values bring elements to the front, lower values push them to the back. Think of it like layers in a graphics editor: z-index: 10 appears on top of z-index: 5. This only works on positioned elements (not static).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index", title: "z-index – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_z-index.asp", title: "CSS z-index – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_12_2",
    type: "true_false",
    difficulty: "intermediate",
    level: 12,
    question: "z-index works on elements with 'position: static;'.",
    correctAnswer: false,
    explanation: "z-index has NO effect on statically positioned elements. It only works on elements with position: relative, absolute, fixed, or sticky. If you want to control the stacking order, you must first set a position value other than static. (Note: z-index also works on flex/grid children even without explicit positioning.)",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index", title: "z-index – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_z-index.asp", title: "CSS z-index – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_12_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 12,
    question: "If two elements overlap and neither has a z-index, which one appears on top?",
    options: [
      "The first element in the HTML source code",
      "The last element in the HTML source code",
      "The element with the larger font size",
      "Neither — they can never overlap without z-index"
    ],
    correctAnswer: 1,
    explanation: "When overlapping elements have the same z-index (or no z-index), the natural stacking order follows the HTML source order — later elements in the HTML appear on TOP of earlier ones. This is because they are painted later in the rendering process. Understanding this default behavior helps debug layering issues.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index", title: "Stacking without z-index – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_z-index.asp", title: "CSS z-index – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_12_4",
    type: "mcq",
    difficulty: "advanced",
    level: 12,
    question: "What is a 'stacking context' in CSS?",
    options: [
      "A method of stacking divs vertically",
      "A three-dimensional conceptualization of HTML elements along a z-axis, where z-index values are compared only within the same context",
      "A technique for creating responsive layouts",
      "A browser feature for caching CSS files"
    ],
    correctAnswer: 1,
    explanation: "A stacking context is a conceptual group where elements' z-index values are only compared against each other — not against elements in other stacking contexts. A new stacking context is created by elements with: position + z-index, opacity < 1, transform, filter, and more. An element inside a stacking context can never appear above or below elements in a sibling stacking context, regardless of its z-index.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context", title: "Stacking context – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_z-index.asp", title: "CSS z-index – W3Schools" }
    ],
    xp: 30
  },
  {
    id: "css_12_5",
    type: "true_false",
    difficulty: "intermediate",
    level: 12,
    question: "z-index can accept negative values.",
    correctAnswer: true,
    explanation: "Yes, z-index accepts negative values (e.g., z-index: -1). Elements with negative z-index values are placed behind elements with z-index: 0 or auto, and behind the stacking context's background. This is a useful trick for placing decorative elements behind content. The z-index range is from -2147483648 to 2147483647 (32-bit integer).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index", title: "z-index – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_z-index.asp", title: "CSS z-index – W3Schools" }
    ],
    xp: 20
  },

  // ──────────────────────────────────────────────
  // LEVEL 13 – CSS Overflow
  // ──────────────────────────────────────────────
  {
    id: "css_13_1",
    type: "mcq",
    difficulty: "beginner",
    level: 13,
    question: "What does the CSS 'overflow' property control?",
    options: [
      "How fast an animation runs",
      "What happens when content is too large to fit in its container",
      "The maximum size an element can grow to",
      "How text wraps around images"
    ],
    correctAnswer: 1,
    explanation: "The 'overflow' property specifies what happens when an element's content overflows (exceeds) its box. It controls whether to clip the content, add scrollbars, or let it visually overflow. This is essential for creating scrollable containers, tooltips, and managing content that exceeds its designated area.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow", title: "overflow – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_overflow.asp", title: "CSS Overflow – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_13_2",
    type: "mcq",
    difficulty: "beginner",
    level: 13,
    question: "What does 'overflow: hidden;' do?",
    options: [
      "Hides the entire element",
      "Clips any content that overflows the element's box — it is not visible and no scrollbar appears",
      "Adds a scrollbar to see hidden content",
      "Makes the element transparent"
    ],
    correctAnswer: 1,
    explanation: "'overflow: hidden' clips (cuts off) any content that extends beyond the element's box. The overflowing content becomes invisible, and no scrollbar is provided. This is commonly used to: crop images, clear floats, create text truncation effects, and prevent unwanted scrollbars.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow", title: "overflow – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_overflow.asp", title: "CSS Overflow – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_13_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 13,
    question: "What is the difference between 'overflow: scroll;' and 'overflow: auto;'?",
    options: [
      "There is no difference",
      "'scroll' always shows scrollbars; 'auto' only shows scrollbars when content actually overflows",
      "'auto' always shows scrollbars; 'scroll' only when needed",
      "'scroll' is for vertical only; 'auto' is for both directions"
    ],
    correctAnswer: 1,
    explanation: "'overflow: scroll' ALWAYS shows scrollbars (even if content doesn't overflow), while 'overflow: auto' only shows scrollbars when the content actually exceeds the element's dimensions. 'auto' is usually preferred because it avoids unnecessary scrollbars. On macOS, overlay scrollbars may hide automatically in both cases.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow", title: "overflow – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_overflow.asp", title: "CSS Overflow – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_13_4",
    type: "true_false",
    difficulty: "intermediate",
    level: 13,
    question: "You can control horizontal and vertical overflow independently using overflow-x and overflow-y.",
    correctAnswer: true,
    explanation: "CSS provides 'overflow-x' and 'overflow-y' for independent control. For example: overflow-x: auto; overflow-y: hidden; would allow horizontal scrolling when needed but clip any vertical overflow. This is useful for horizontally scrollable containers (like carousels) where you don't want vertical scrollbars.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x", title: "overflow-x – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_overflow.asp", title: "CSS Overflow – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_13_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 13,
    question: "Which CSS property truncates overflowing text and shows an ellipsis (...)?",
    options: [
      "overflow: ellipsis;",
      "text-overflow: ellipsis; (combined with overflow: hidden and white-space: nowrap)",
      "text-truncate: true;",
      "content-overflow: dots;"
    ],
    correctAnswer: 1,
    explanation: "To create a text truncation with ellipsis, you need THREE properties together: (1) text-overflow: ellipsis — shows '...' at the truncation point, (2) overflow: hidden — clips the content, (3) white-space: nowrap — prevents text from wrapping to the next line. All three are required; text-overflow alone won't work.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow", title: "text-overflow – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/cssref/css3_pr_text-overflow.php", title: "text-overflow – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_13_6",
    type: "code",
    difficulty: "intermediate",
    level: 13,
    question: "Write CSS to create a scrollable container that is 300px tall with content that might exceed that height. Only add scrollbars when needed.",
    starterCode: ".container {\n  /* Your CSS here */\n}",
    expectedOutput: "overflow: auto",
    hints: [
      "You need to set a fixed height to constrain the container",
      "'overflow: auto' adds scrollbars only when content overflows"
    ],
    explanation: "Setting height: 300px constrains the container, and overflow: auto adds scrollbars only when content exceeds 300px. Using 'auto' instead of 'scroll' avoids showing empty scrollbars when the content fits. This pattern is used for chat boxes, log viewers, and any scrollable region.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow", title: "overflow – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_overflow.asp", title: "CSS Overflow – W3Schools" }
    ],
    xp: 30
  },

  // ──────────────────────────────────────────────
  // LEVEL 14 – CSS Float & Clear
  // ──────────────────────────────────────────────
  {
    id: "css_14_1",
    type: "mcq",
    difficulty: "beginner",
    level: 14,
    question: "What does the CSS 'float' property do?",
    options: [
      "Makes an element hover above the page",
      "Removes an element from the normal flow and pushes it to the left or right, allowing inline content to wrap around it",
      "Centers an element on the page",
      "Adds a shadow effect to an element"
    ],
    correctAnswer: 1,
    explanation: "'float' removes an element from the normal document flow and shifts it to the left or right side of its container. Surrounding inline content (like text) wraps around the floated element. Originally designed for text wrapping around images (like magazine layouts), float was later used for page layouts before Flexbox and Grid were introduced.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float", title: "float – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_float.asp", title: "CSS Float – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_14_2",
    type: "mcq",
    difficulty: "intermediate",
    level: 14,
    question: "What problem does the 'clear' property solve?",
    options: [
      "It removes all CSS styles from an element",
      "It prevents an element from moving next to a floated element",
      "It clears the browser cache",
      "It removes the background color"
    ],
    correctAnswer: 1,
    explanation: "The 'clear' property specifies which side of an element should NOT be adjacent to a floating element. Values: 'left' (clear left floats), 'right' (clear right floats), 'both' (clear both sides), 'none' (default). It is used to prevent elements from wrapping around floats — the cleared element moves below the float instead.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clear", title: "clear – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_float_clear.asp", title: "CSS Clear – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_14_3",
    type: "true_false",
    difficulty: "intermediate",
    level: 14,
    question: "A parent container automatically expands to contain its floated children.",
    correctAnswer: false,
    explanation: "This is a classic CSS gotcha! When all children inside a container are floated, the parent 'collapses' to zero height because floated elements are removed from the normal flow. To fix this, you can: (1) Use the 'clearfix' hack (::after pseudo-element with clear: both), (2) Set overflow: auto/hidden on the parent, or (3) Use display: flow-root on the parent.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float", title: "float – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_float_clear.asp", title: "CSS Float Clear – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_14_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 14,
    question: "What is the modern 'clearfix' technique using a pseudo-element?",
    options: [
      ".parent { clear: all; }",
      ".parent::after { content: ''; display: table; clear: both; }",
      ".parent { float: clear; }",
      ".parent::before { float: none; }"
    ],
    correctAnswer: 1,
    explanation: "The clearfix uses the ::after pseudo-element to insert an invisible element after all the parent's content, which clears the floats. The 'content: \"\"' creates the pseudo-element, 'display: table' (or 'block') ensures it's rendered, and 'clear: both' makes it sit below all floats. Modern alternative: 'display: flow-root' on the parent achieves the same result with a single property.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clear", title: "clear – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/howto/howto_css_clearfix.asp", title: "CSS Clearfix – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_14_5",
    type: "true_false",
    difficulty: "intermediate",
    level: 14,
    question: "In modern CSS, Flexbox and Grid have largely replaced float for page layout purposes.",
    correctAnswer: true,
    explanation: "While 'float' is still valid CSS and useful for its original purpose (wrapping text around images), Flexbox and CSS Grid have almost entirely replaced float-based layouts. Flexbox excels at one-dimensional layouts (rows or columns), while Grid handles two-dimensional layouts (rows AND columns). Float-based layouts were fragile and required clearfix hacks.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats", title: "Floats – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_float.asp", title: "CSS Float – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_14_6",
    type: "mcq",
    difficulty: "beginner",
    level: 14,
    question: "Which values can the 'float' property take?",
    options: [
      "left, right, top, bottom",
      "left, right, none, inherit",
      "left, right, center, justify",
      "start, end, none, auto"
    ],
    correctAnswer: 1,
    explanation: "The float property accepts: 'left' (float to the left), 'right' (float to the right), 'none' (don't float, the default), and 'inherit' (take the parent's float value). There is no 'center' float — centering requires other techniques. There is also no 'top' or 'bottom' float; float only works horizontally.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float", title: "float – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css_float.asp", title: "CSS Float – W3Schools" }
    ],
    xp: 10
  },

  // ──────────────────────────────────────────────
  // LEVEL 15 – CSS Flexbox Basics
  // ──────────────────────────────────────────────
  {
    id: "css_15_1",
    type: "mcq",
    difficulty: "beginner",
    level: 15,
    question: "How do you enable Flexbox on a container?",
    options: [
      "flex: enabled;",
      "display: flex;",
      "layout: flexbox;",
      "position: flex;"
    ],
    correctAnswer: 1,
    explanation: "'display: flex' activates Flexbox on an element, turning it into a flex container. All its direct children automatically become flex items. You can also use 'display: inline-flex' for an inline-level flex container. Once enabled, you can use properties like justify-content, align-items, flex-direction, and more.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox", title: "Basic concepts of Flexbox – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox.asp", title: "CSS Flexbox – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_15_2",
    type: "mcq",
    difficulty: "beginner",
    level: 15,
    question: "What is the default flex-direction?",
    options: [
      "column",
      "row",
      "row-reverse",
      "column-reverse"
    ],
    correctAnswer: 1,
    explanation: "The default flex-direction is 'row', which lays out flex items horizontally from left to right (in LTR languages). Other values: 'column' (top to bottom), 'row-reverse' (right to left), 'column-reverse' (bottom to top). The flex-direction determines the main axis, which affects how justify-content and align-items work.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction", title: "flex-direction – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox_container.asp", title: "CSS Flex Container – W3Schools" }
    ],
    xp: 10
  },
  {
    id: "css_15_3",
    type: "mcq",
    difficulty: "intermediate",
    level: 15,
    question: "Which property controls horizontal alignment of items inside a flex container (with default flex-direction: row)?",
    options: [
      "align-items",
      "justify-content",
      "text-align",
      "align-content"
    ],
    correctAnswer: 1,
    explanation: "'justify-content' aligns items along the MAIN axis (horizontal when flex-direction is row). Common values: flex-start (default), flex-end, center, space-between (equal space between items), space-around (equal space around items), space-evenly (equal space between and around). 'align-items' works along the CROSS axis (vertical when direction is row).",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content", title: "justify-content – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox_container.asp", title: "CSS Flex Container – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_15_4",
    type: "mcq",
    difficulty: "intermediate",
    level: 15,
    question: "How do you perfectly center a single item both horizontally and vertically using Flexbox?",
    options: [
      "margin: auto; padding: auto;",
      "display: flex; justify-content: center; align-items: center;",
      "display: flex; text-align: center; vertical-align: middle;",
      "display: flex; align: center;"
    ],
    correctAnswer: 1,
    explanation: "The Flexbox centering trick is: display: flex; justify-content: center; align-items: center;. 'justify-content: center' centers along the main axis (horizontal in row direction), 'align-items: center' centers along the cross axis (vertical). This solves the age-old problem of vertical centering in CSS with just 3 properties!",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container", title: "Aligning items in Flexbox – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox_container.asp", title: "CSS Flex Container – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_15_5",
    type: "mcq",
    difficulty: "intermediate",
    level: 15,
    question: "What does 'flex-wrap: wrap;' do?",
    options: [
      "Wraps text inside flex items",
      "Allows flex items to wrap onto multiple lines when they can't fit in one row",
      "Adds a wrapper div around the flex container",
      "Makes the container expand to fit all items"
    ],
    correctAnswer: 1,
    explanation: "By default, flex items try to fit onto one line (flex-wrap: nowrap). 'flex-wrap: wrap' allows items to wrap onto the next line when there isn't enough space. 'wrap-reverse' wraps in the opposite direction. Without wrap, items will shrink (or overflow) to stay on one line. This is essential for responsive layouts.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap", title: "flex-wrap – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox_container.asp", title: "CSS Flex Container – W3Schools" }
    ],
    xp: 20
  },
  {
    id: "css_15_6",
    type: "code",
    difficulty: "intermediate",
    level: 15,
    question: "Write CSS to create a flex container that spaces its children evenly with equal space between them, and centers them vertically.",
    starterCode: ".nav {\n  /* Your CSS here */\n}",
    expectedOutput: "display: flex",
    hints: [
      "First, enable Flexbox with 'display: flex'",
      "Use 'justify-content' for horizontal spacing and 'align-items' for vertical alignment",
      "'space-between' distributes items with equal space between them"
    ],
    explanation: "The solution uses: display: flex (enable Flexbox), justify-content: space-between (equal space between items, no extra space at edges), and align-items: center (vertically center items along the cross axis). This pattern is extremely common for navigation bars, toolbars, and card layouts.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox", title: "Basic concepts of Flexbox – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox.asp", title: "CSS Flexbox – W3Schools" }
    ],
    xp: 30
  },
  {
    id: "css_15_7",
    type: "true_false",
    difficulty: "beginner",
    level: 15,
    question: "Flexbox can only arrange items in a horizontal row.",
    correctAnswer: false,
    explanation: "Flexbox can arrange items both horizontally and vertically! The 'flex-direction' property controls this: 'row' (horizontal, default), 'column' (vertical), 'row-reverse' (horizontal reversed), 'column-reverse' (vertical reversed). Flexbox is a one-dimensional layout system — it handles one direction at a time. For two-dimensional layouts, CSS Grid is more appropriate.",
    resources: [
      { type: "mdn", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction", title: "flex-direction – MDN" },
      { type: "w3schools", url: "https://www.w3schools.com/css/css3_flexbox_container.asp", title: "CSS Flex Container – W3Schools" }
    ],
    xp: 10
  }
];

// ──────────────────────────────────────────────────────────
// Level Definitions
// ──────────────────────────────────────────────────────────

const CSS_LEVELS = [
  {
    level: 1,
    title: "CSS Introduction & Syntax",
    description: "Learn what CSS is, how to include it in HTML, basic syntax rules, and the cascade.",
    icon: "🎨",
    requiredXP: 0
  },
  {
    level: 2,
    title: "CSS Selectors",
    description: "Master element, class, ID, descendant, child, and pseudo-class selectors plus specificity.",
    icon: "🎯",
    requiredXP: 50
  },
  {
    level: 3,
    title: "CSS Colors",
    description: "Explore named colors, hex codes, RGB, RGBA, HSL, and alpha transparency.",
    icon: "🌈",
    requiredXP: 100
  },
  {
    level: 4,
    title: "CSS Backgrounds",
    description: "Control background colors, images, repeat, position, size, and shorthand syntax.",
    icon: "🖼️",
    requiredXP: 160
  },
  {
    level: 5,
    title: "CSS Borders",
    description: "Style borders with width, style, color, border-radius for rounded corners, and per-side control.",
    icon: "📦",
    requiredXP: 220
  },
  {
    level: 6,
    title: "CSS Margins & Padding",
    description: "Understand the difference between margin and padding, shorthand values, auto centering, and margin collapse.",
    icon: "📐",
    requiredXP: 280
  },
  {
    level: 7,
    title: "CSS Box Model",
    description: "Master the content-padding-border-margin model, box-sizing, and how total element size is calculated.",
    icon: "📊",
    requiredXP: 350
  },
  {
    level: 8,
    title: "CSS Text Styling",
    description: "Style text with font-size, font-weight, text-align, text-decoration, line-height, and letter-spacing.",
    icon: "✍️",
    requiredXP: 420
  },
  {
    level: 9,
    title: "CSS Fonts",
    description: "Work with font families, generic fonts, Google Fonts, @font-face, and web font formats.",
    icon: "🔤",
    requiredXP: 500
  },
  {
    level: 10,
    title: "CSS Display Property",
    description: "Understand block, inline, inline-block, none, visibility, and how display changes element behavior.",
    icon: "🖥️",
    requiredXP: 580
  },
  {
    level: 11,
    title: "CSS Position Property",
    description: "Master static, relative, absolute, fixed, and sticky positioning with practical examples.",
    icon: "📌",
    requiredXP: 670
  },
  {
    level: 12,
    title: "CSS z-index",
    description: "Control stacking order, understand stacking contexts, and debug z-index issues.",
    icon: "🗂️",
    requiredXP: 760
  },
  {
    level: 13,
    title: "CSS Overflow",
    description: "Handle overflowing content with visible, hidden, scroll, auto, and text-overflow ellipsis.",
    icon: "📜",
    requiredXP: 850
  },
  {
    level: 14,
    title: "CSS Float & Clear",
    description: "Learn float-based layouts, the clearfix technique, and when to use float vs. modern layout methods.",
    icon: "🌊",
    requiredXP: 940
  },
  {
    level: 15,
    title: "CSS Flexbox Basics",
    description: "Create flexible layouts with flex containers, flex-direction, justify-content, align-items, and flex-wrap.",
    icon: "💪",
    requiredXP: 1040
  }
];
