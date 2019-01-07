const theme = {
  colors: {
    primary: '#43a7dc',
    secondary: '#2ecfab',
    text: '#3e3e3e',
    light: '#f0f4f8'
  },
  fontSizes: {
    mediumText: '14px',
    largeText: '16px',
    smallTitle: '20px',
    mediumTitle: '24px'
  },
  breakpoints: {
    // From https://medium.freecodecamp.com/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862#.rszy4ujfl
    mobile: { value: 600, type: 'max' },
    tablet: { value: 600, type: 'min' },
    desktop: { value: 900, type: 'min' },
    largeScreen: { value: 1200, type: 'min' }
  }
};

export default theme;
