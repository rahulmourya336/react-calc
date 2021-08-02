import Big from "big.js";

import operate from "./operate";
import isNumber from "../utils/isNumber";
import { CalcPropType } from "../models/calculator";

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
};

export default function calculate(obj: CalcPropType, buttonName: string) {
  if (buttonName === "AC") {
    return defaultReturn;
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }

    // If there is an operation, update next
    if (obj.operation) {
      const next = obj.next ? obj.next + buttonName : buttonName;
      return {
        ...obj,
        next,
      };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next,
        total: null,
        operation: obj.operation,
      };
    }
    return {
      next: buttonName,
      total: null,
      operation: obj.operation,
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result).div(Big("100")).toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        ...obj,
        next: Big(obj.next).div(Big("100")).toString(),
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
      return { ...obj, next: obj.next + "." };
    }
    return { ...obj, next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "±") {
    if (obj.next) {
      return {
        ...obj,
        next: (-1 * parseFloat(obj.next)).toString(),
      };
    }
    if (obj.total) {
      return {
        ...obj,
        total: (-1 * parseFloat(obj.total)).toString(),
      };
    }
    return {};
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

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
