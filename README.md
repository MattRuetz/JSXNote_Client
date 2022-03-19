# 👨‍💻 JSXNote - Client 📝

## Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


JSXNote is a React web app that allows the user to write blocks of code (JS/JSX) or blocks of text (Markdown), and rearrange these blocks similar to Jupyter Notebooks. Blocks of code are appended together during runtime in the order they appear, so that the user can build up a single project or demo made of many cells of code.

---

# ❓ How to Use
Upon opening the app, the following interface appears. The user may click either option to create the first cell of the document.

![image](https://user-images.githubusercontent.com/91920147/157570381-8fbb4305-9f0e-445f-bc59-d673a3f9ac4f.png)

## ➕ Adding More Cells
After creating your first cell, hover the mouse cursor above or below the single cell to create another cell:

![image](https://user-images.githubusercontent.com/91920147/157572319-06d52f28-d7f4-473d-9b83-d529b2eab8f0.png)

## 📝 Text Cells
Click the _Text_ button to create a Text cell. After creating a text cell, **click inside the cell to make the editor appear**:

![image](https://user-images.githubusercontent.com/91920147/157570499-eb2c1fc5-5195-4a46-8d7e-95e0622e19d9.png)

Enter Markdown text in the textbox on the left. A preview will show the styled text after Markdown processing on the right.

Clicking **outside the text cell** will cause the editor to close, and the formatted text to be displayed:

![image](https://user-images.githubusercontent.com/91920147/157571616-e8f51931-0e8d-4100-bd82-0f28dc22bd42.png)

## 👨‍💻 Code Cells
Click the _Code_ button to make a Code cell appear. The new code cell has various IDE-inspired features:
- Editor window (left) can take any JS (ES6) and React/JSX components
- Preview window (right) can display React components and HTML elements with the custom `show()` function.
- 'Format' button will appear in the editor window when the cursor hovers over it. Press this to format the code nicely.
- Grip bars can be used to resize the windows vertically and horizontally.

![image](https://user-images.githubusercontent.com/91920147/157572651-c0ab149c-30ff-4760-a6d4-4e125993cdc1.png)

## 🔀 Reordering Cells
Each Text or Code cell has 3 naviga�tion buttons:
- ⬆️ will swap this cell with the cell _above_ it
- ⬇️ will swap this cell with the cell _below_ it
- 🗑️ will instantly delete this cell. **Be careful - there is no warning before deleting!**

![image](https://user-images.githubusercontent.com/91920147/157576530-8a6f2f64-566e-4985-8905-7f539d3f2d13.png)

## 👀 The 'Show()' Function
I have included a custom function to inject JSX into the preview window. This example demonstrates how a simple react element can be created and displayed using the `show()` function:

![image](https://user-images.githubusercontent.com/91920147/157573872-9bf04192-0ce1-4710-b5a5-a5ed0ea457b6.png)

## ⚛️ React, Out of the Box
The code cells include React and ReactDOM without any import or include necessary. This means that React components can be made directly, with JSX, in the code cells. As mentioned, these cells are stung together before bundling so that components can be referenced in cells other than the one it was created in - no export/import necessary.

## 🔌 Plug-in Your Favorites
Any NPM packages can be required or imported within any code cell. The code cell bundler will install and apply these packages before running.

  
  
