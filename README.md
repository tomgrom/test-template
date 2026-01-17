# Personal Landing Page Template

Welcome to your first web development project! This template is a starting point for creating your own personal landing page. You can customize it to be about yourself, or about something you're passionate about (a band, hobby, cause, etc.).

## What's Included

- **index.html** - The structure and content of your page
- **style.css** - The visual design and colors
- **script.js** - The interactive features (like the light/dark mode toggle)

## How to Use This Template

### 1. Make It Yours: Edit the HTML

Open `index.html` and customize the content:

**In the Header:**
- Change `"Page Title"` to your name or project name

**In the Hero Section:**
- Replace the tagline with your own description
- Change the image URL to a photo that represents you or your topic
  - You can find free images at [Unsplash](https://unsplash.com)
  - Right-click an image → "Copy image address" → paste it into the `src=""` attribute

**In the About Section:**
- Write 1-2 paragraphs about yourself or your topic
- Make it personal and interesting!

**In the Highlights Section:**
- Customize the four "Highlights" items
- Ideas: favorite albums, books, games, hobbies, skills, current projects, interests, etc.
- Change the emoji icons to match your categories

**In the Footer:**
- Update the links with your own (Portfolio, GitHub, Instagram, etc.)
- Change the link URLs and text to match your accounts
- You can remove links you don't want to include

### 2. Choose Your Colors: Edit the CSS

Open `style.css` and find the `:root` section at the top (around line 6).

**For Light Mode:**
```css
--bg-primary: #faf8f5;        /* Main background color */
--bg-secondary: #ffffff;      /* Card/section backgrounds */
--text-primary: #2d3142;      /* Main text color */
--text-secondary: #4f5d75;    /* Secondary text (slightly lighter) */
--accent-primary: #0d7377;    /* Main accent color (teal) */
--accent-secondary: #e76f51;  /* Secondary accent (coral) */
```

**For Dark Mode:**
Scroll down to `[data-theme="dark"]` (around line 25) and customize the dark theme colors.

**Color Tips:**
- Click the color chips in Phoenix Code to use the color picker!
- Make sure text is readable against your background colors
- Try changing both light and dark mode colors

### 3. Preview Your Changes

1. Save your files (Cmd/Ctrl + S)
2. Click the lightning bolt icon in Phoenix Code to open Live Preview
3. See your changes update in real-time!
4. Try clicking the theme toggle (☀️/🌙) to see both light and dark modes

### 4. Understanding the Three Files

**HTML (index.html) - The Structure**
Think of HTML as the skeleton. It defines what content exists and how it's organized (headings, paragraphs, images, links).

**CSS (style.css) - The Style**
CSS is the appearance. It controls colors, fonts, spacing, and layout. Notice how everything is connected to the HTML through classes (like `class="hero"`).

**JavaScript (script.js) - The Behavior**
JavaScript makes things interactive. In this template, it powers the light/dark mode toggle. You don't need to modify it for now—just observe how it works!

## Tips for Customization

- **Experiment!** Try changing things and see what happens. You can always undo (Cmd/Ctrl + Z).
- **Save often** - Get in the habit of saving after each change
- **Use the color picker** - Phoenix Code shows color chips next to hex codes in CSS
- **Keep it readable** - Make sure text colors contrast well with backgrounds
- **Have fun** - This is YOUR page. Make it reflect your personality or interests!

## What's Next?

Once you're happy with your customizations, you'll learn how to:
1. Save your changes using Git
2. Push to GitHub
3. Publish your page live on the internet with GitHub Pages

---

**Need help?** Ask your teacher or check the [Phoenix Code documentation](https://docs.phcode.dev/).
