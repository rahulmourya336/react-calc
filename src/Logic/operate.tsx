import Big from "big.js";
import { INFINITY } from "../Models/Calculator";

export default function operate(numberOne: string, numberTwo: string, operation: string) {
  const one = Big(numberOne || "0");
  const two: any = Big(numberTwo || (operation === "/" || operation === '*' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "*") {
    return one.times(two).toString();
  }
  if (operation === "/") {
    if (String(two['c'][0]) === "0") {
      return String(INFINITY);
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
