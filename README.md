# CSS Challenge

## Deployment

You can view the deployed project here: [Live Demo](https://css-nerdery-challenge-pucdvm0fo-rafodevs-projects.vercel.app/)

## Feedback

Mentor: Francisco Lopez

Pixel perfect:

- 90% accurate
- Gap between columns: main content, right panel not as design.
- In the “Share with me” cards: the circle badges are not equally placed within cards.
- Some spacing and paddings mismatches but in overall a great job trying the pixel perfect.

Responsiveness test:

- The page content in largest width could be improved (> 1440px). The main content should have a max width.
- The web looks good when shrinking the vertical dimension. The scroll behavior can be improved for the left panel, it should have independent scrolling.
- In viewport width <= 1024px: great work with the responsiveness in the main content and the right panel.
- When opening the left panel in the viewport width <= 1024px, you can scroll down even if there’s no content to scroll in the panel
- Unneded bottom padding in the mobile style page.

Technical feedback:

- Use of SCSS modules helps in maintaining scoped styles.
- Variables for colors, shadows, and gradients are well-organized in separate files.
- Media queries are used effectively for responsive design.
- Consistent naming conventions for classes and variables.
- Efficient use of CSS Grid and Flexbox for layout.
- Minimal use of complex selectors.
- Variables for colors and other constants improve consistency.
- Since you’re using sass, consider using mixins for font implementations, like defining a font style.
- Styles are mostly applied through class names, not HTML tags.
- Keep the formatting consistent in the css files. e.g. break lines, spaces
- Remove empty css classes and media queries
- Double check the transition in the left panel when going <= 1024px. It shows the background color in the whole screen.
