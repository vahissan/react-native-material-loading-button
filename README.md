# react-native-material-loading-button
![Flat-Normal](https://github.com/vahissan/react-native-material-loading-button/raw/readme/images/flat_normal.gif)
![Flat-Loading](https://github.com/vahissan/react-native-material-loading-button/raw/readme/images/flat_loading.gif)
<br>
![Raised-Normal](https://github.com/vahissan/react-native-material-loading-button/raw/readme/images/raised_normal.gif)
![Raised-Loading](https://github.com/vahissan/react-native-material-loading-button/raw/readme/images/raised_loading.gif)

A simple material style button with "Raised" (default) and "Flat" styles, which supports a "Loading" state which makes the user wait for the action to complete without affecting the user experience.

## Installation

`npm install -S react-native-material-loading-button`

## Adding Roboto-Medium Font

This component requires `Roboto-Medium` font to be added in the main project. You can download the font from [Google Fonts](https://fonts.google.com/specimen/Roboto).

If you need help adding custom font to a React Native project, refer [this article](https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4).

## Usage

```javascript
import React, { Component } from 'react';
import MaterialButton from 'eact-native-material-loading-button';

...

class Demo extends Component {
  
  ...

  render() {
    return (
      <MaterialButton
        text="Upload"
        loadingText="Uploading"
        isLoading={this.state.loading} 
        onPress={() => this.onBtnPress()} />
    );
  }
}

...
```

## Props

| Name | Description | Type | Default |
| ---- |------------ | :---:| ------- |
| text | Button text | string | Button |
| flat | `true` if you want a flat button. Renders a raised button otherwise | boolean | false |
| color | Primary color of the button. This will be background color for raised button (default). For flat buttons, this will set the text color. | string | #039be5 |
| onPress | Event handler for button onPress | function | - |
| isLoading | `true` if the button should be rendered in a "loading" state (like in the animation at the top). | boolean | false |
| loadingText | This is be the button text next to the loading spinner if specified. Otherwise, value of "text" will be shown next to the loading spinner. | string | - |
| disabled | Button will not be clickable and visually goes to "disabled" state if set to `true` | boolean | false |
| style | Add a custom style to outer container of the button | object | - |
| textStyle | Add a customer style to the button text | object | - |

## License

&copy; 2018 Vahissan Nandakumar, [MIT license](LICENSE.md).