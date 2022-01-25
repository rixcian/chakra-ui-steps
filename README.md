<h1 style="font-weight: bold;">
  chakra-ui-steps
</h1>

<h4>Steps component designed to work seamlessly with <a href="https://chakra-ui.com/" target="_blank">Chakra UI</a>.</h4>

<h4>An interactive demo along with code examples can be viewed <a href="https://jeanverster.github.io/chakra-ui-steps-site/" target="_blank">here</a>.</h4>
<br />

[![MIT License](https://badgen.net/github/license/jeanverster/chakra-ui-steps 'MIT License')](LICENSE.md)
[![npm - chakra-ui-steps](https://img.shields.io/npm/v/chakra-ui-steps 'chakra-ui-steps npm')](https://www.npmjs.com/package/chakra-ui-steps)
[![bundle size - chakra-ui-steps](https://badgen.net/bundlephobia/min/chakra-ui-steps)](https://bundlephobia.com/result?p=chakra-ui-steps)
[![bundle size - chakra-ui-steps](https://badgen.net/bundlephobia/minzip/chakra-ui-steps)](https://bundlephobia.com/result?p=chakra-ui-steps)
[![Total Downloads - chakra-ui-steps](https://badgen.net/npm/dt/chakra-ui-steps?color=blue 'chakra-ui-steps npm downloads')](https://www.npmjs.com/package/chakra-ui-steps)

![screenshot](https://i.imgur.com/B9zbJEa.gif)

## Features

- Multiple orientations
- Easily render step content
- Custom icons
- Size variants

## Installation

Yarn:

```bash
yarn add chakra-ui-steps
```

NPM:

```bash
npm i chakra-ui-steps
```

## Usage

> NOTE: This v1.4.0 of this component requires @chakra-ui/react >= v1.6.7 to work correctly. You can follow the installation instructions <a href="https://chakra-ui.com/docs/getting-started" target="_blank">here</a>. If you aren't able to update your chakra version you can still use v1.3.0

In order to get started you will need to extend the default Chakra theme with the provided `StepsStyleConfig` object, like so:

```jsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};
```

Once that's done you should be good to go!

### Basic Example:

```jsx
import { Step, Steps, useSteps } from 'chakra-ui-steps';

const content = (
  <Flex py={4}>
    <LoremIpsum p={1} />
  </Flex>
);

const steps = [
  { label: 'Step 1', content },
  { label: 'Step 2', content },
  { label: 'Step 3', content },
];

export const BasicExample = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Steps activeStep={activeStep}>
      {steps.map(({ label, content }) => (
        <Step label={label} key={label}>
          {content}
        </Step>
      ))}
    </Steps>
  );
};
```

## Props

> Note: Both the `Step` and `Steps` component extend the Chakra UI `Box` component so they accept all the default styling props.

### `Steps`

| Prop                   | Type                | Required | Description                                                                | Default    |
| ---------------------- | ------------------- | -------- | -------------------------------------------------------------------------- | ---------- |
| **`activeStep`**       | number              | yes      | Currently active step                                                      | 0          |
| **`colorScheme`**      | string              | no       | Sets the color accent of the Steps component show                          | green      |
| **`orientation`**      | string              | no       | Sets the orientation of the Steps component                                | horizontal |
| **`responsive`**       | boolean             | no       | Sets whether the component auto switches to vertical orientation on mobile | true       |
| **`checkIcon`**        | React.ComponentType | no       | Allows you to provide a custom check icon                                  | undefined  |
| **`onClickStep`**      | () => void          | no       | If defined, allows you to click on the step icons                          | undefined  |
| **`labelOrientation`** | string              | no       | Switch between horizontal and vertical label orientation                   | undefined  |

### `Step`

| Prop                  | Type                | Required | Description                                                          | Default   |
| --------------------- | ------------------- | -------- | -------------------------------------------------------------------- | --------- |
| **`label`**           | string              | no       | Sets the title of the step                                           | ''        |
| **`description`**     | string              | no       | Provides extra info about the step                                   | ''        |
| **`icon`**            | React.ComponentType | no       | Custom icon to overwrite the default numerical indicator of the step | undefined |
| **`isCompletedStep`** | boolean             | no       | Individually control each step state, defaults to active step        | undefined |
