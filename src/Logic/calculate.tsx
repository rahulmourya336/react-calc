import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";
import { CalcPropType } from "../Models/Calculator";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

const defaultReturn: CalcPropType = {
  total: null,
  next: null,
  operation: null,
}

export default function calculate(obj: CalcPropType, buttonName: string) {
  if (buttonName === "AC") {
    return defaultReturn;
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      // return {};
      return defaultReturn;
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName, total: obj.total, operation: obj.operation };
      }
      return { next: buttonName, total: obj.total, operation: obj.operation };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next,
        total: null,
        operation: obj.operation
      };
    }
    return {
      next: buttonName,
      total: null,
      operation: obj.operation
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        next: Big(obj.next)
          .div(Big("100"))
          .toString(),
        total: obj.total,
        operation: obj.operation,
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "±") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString(), total: obj.total, operation: obj.operation };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString(), next: obj.next, operation: obj.operation };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName, next: obj.next, total: obj.next };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
