// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: {argTypesRegex: '^on.*'},
  backgrounds: { disable: true },
  darkMode: {
    stylePreview : true,
    current: 'dark',
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
  }
};
