// importing a specific version of Sorter after lesson 83...
/**
 * ? Here we are importing the sepecific Sorter class as it is
 * ? represented after the end of lesson 83.
 * ! Note: the format of the filename with underscore "_83"
 */
import { Sorter } from "./Sorter_83";

const testCollection = [22, 100, 12, 12.4, -12, 11, 10, -2, 0, -5, 3];
const sorter = new Sorter(testCollection);
sorter.sort();

// now we output the sorted collection
console.log("OUTPUT COLLECTION: ", sorter.collection);
