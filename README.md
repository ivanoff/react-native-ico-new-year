# New Year Icons for React Native

### react-native-ico-new-year

50 Icons

## Usage

```
import Icon from 'react-native-ico-new-year';


// Inside some view component
render() {
    return (
        <>
          <Icon name="santa-claus" />
          <Icon name="candelabra" height="40" width="40" />
          <Icon name="star" color="red" />
        </>
    );
}

```

## List of icons

- [List of New Year Icons](http://ico.simpleness.org/pack/new-year)

## Installation

#### yarn

```bash
yarn add react-native-ico-new-year react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-new-year react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file | "santa-claus"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
