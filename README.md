Basic Calculator
---
[![Calculator App Summary](https://i.ibb.co/SPb7y5h/calc-v3.png)](https://i.ibb.co/SPb7y5h/calc-v3.png)

Try It
---
[Calc Demo link](https://react-basic-calc.netlify.app)

Installation
---
`npm install`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Usage
---
`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Build
---
`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Structure
---
##### Folder Structure
---
| Folder & File                                         | Description          |
|:--------------------------------------------------|:----------------------------------|
| `src/components`                        | Contains all the components used in the calculator app `Display`, `Buttons` & `Calculator`.                   |
|`src/contstants` |Contains a file which has buttons list array |
|`src/logic`|Logic related to application goes here `Calculate` & `Operate` file help to handle operations of the calculator.|
|`src/models`|Contains information related to field & type details of `Display`, `Button` & `Calculator`|
|`src/utils`|Contains utility functions|
|`style.tsx`|Contains styled-components declarations|


3rd Party Packages
---
- [Big.JS](https://www.npmjs.com/package/big.js)
- [Styled Components](https://styled-components.com/)


⚠️ License
---
- MIT