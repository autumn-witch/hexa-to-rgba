# Hexa-to-rgba

A simple package, written in Typescript, that allows you to convert hex(a) strings to rgba strings.


## Installation 

Npm
```bash
npm i -D hexa-to-rgba
```
Yarn
```bash
yarn add -D hexa-to-rgba
```
## Usage / Examples

```javascript
import { convertHexToRgba } from 'hexa-to-rgba';
// or
const convertHexToRgba = require('hexa-to-rgba').convertHexToRgba;

const white = convertHexToRgba('#fff');
const pink = convertHexToRgba('FFC0CB');
const halfOpaquePink = convertHexToRgba('#ffc0cb80');
const halfOpaquePink = convertHexToRgba('#ffc0cb', 0.5);
```

  
## Acknowledgements
 - Special thanks to Adrien Rault for helping me through this.

  