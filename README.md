## First Run -> `npm install && tsc`

This installs any dependencies that are specified in package.json. It also does the initial compile of the typescript files.

## Run the Program -> `npm start`

The Scripts section of the package json has scripts setup so you can simply run `npm start` and both `tsc -w` and `build/index.js` will run concurrently. This will watch all the files and output to the terminal.

## Bubble Sort Example

This is an example of building a Bubble sort and refactoring it to be re-usable across multiple use cases.

## Sorter\_\* Lesson # Filenaming

I have named each version of the bubble sort class file in the following way. If the file name for Sorter is `Sorter_83` - that means that is the state of the Sorter Class at the end of lesson 83.
