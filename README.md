# JAM - Just A Modal

JAM is a simple React component that provide a sophisticate modal with many options

## Installation

```bash
npm i liloucode-just-a-modal
```
## Usage
#### 1. Import
Now wherever you need it, you have to import the component in your file

```javascript
import { Modal } from "liloucode-just-a-modal";
```
#### 2. Required props
To run this modal, only two props are required:

```javascript
  textContent, // Enter the message of the modal
  closeIcon, // Choose your own Icon Close by providing its scr
```

### 3. Personalization (optional).
  Now you can customize your new modal with this optionals props:
   
  #### MESSAGE
  ```javascript
  // Font family
  textFontFamily = "Georgia, 'Times New Roman', Times, serif", 
  
  // Font Weight
  textFontWeight, 

  // Font size (tiny: "12px", small: "14px", normal: "16px", 
  //large: "18px"  super: "20px", extra: "24px")
  textFontSize = "normal", 
  textColor = "#00000", // Text color
  ```

  #### CTA BUTTON
  ```javascript
  // Content
  textBtn = "Okay", 

  //Font size (tiny: "12px", small: "14px", normal: "16px", 
  //large: "18px"  super: "20px", extra: "24px")
  btnFontSize = "normal", 
  
  // Font family
  btnFontFamily = "Georgia, 'Times New Roman', Times, serif",
  
  // Boder
  btnBorder = "1px solid black",

  // Text color
  btnColor = "#acdef3", 

  // Background color
  btnBackgroundColor = "#0b0b13", 
  ```
  
  #### TITLE
  ```javascript
  // Content
  titleContent,

  // Text color 
  titleColor = "#00000",
  
  // Font Weight
  titleFontWeight,
  
  // Font size (tiny: "12px", small: "14px", normal: "16px", large: "18px"
  //  super: "20px", extra: "24px, giant: "34px") 
  titleFontSize = "super", 
  ```
  
  #### BOX
  ```javascript
  // Background color
  wrapperBackgroundColor = "#ffffff", 
  ```
  
  #### Border
  ```javascript
  // Border radius (oval: "50px", round: "10px" or square: "0px")
  borderRadius = "round", 
  
  // Color
  borderColor, 
```
## Credits
Made with <3 by [@LilouCode](https://www.linkedin.com/in/lisa-lox-frontdev)

## License
[MIT](https://choosealicense.com/licenses/mit/)