define("ember-math-helpers/helpers/abs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.abs = abs;
  _exports.default = void 0;

  /**
   * Uses `Math.abs` to take the absolute value of the number passed to the helper.
   *
   * ```hbs
   * {{abs a}}
   * ```
   *
   * @param {number} number The number to take the absolute value of
   * @return {number} The absolute value of the passed number
   */
  function abs([number]) {
    return Math.abs(number);
  }

  var _default = Ember.Helper.helper(abs);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/acos", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.acos = acos;
  _exports.default = void 0;

  /**
   * Executes `Math.acos` on the number passed to the helper.
   *
   * ```hbs
   * {{acos a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.acos`
   * @return {number} The acos of the passed number
   */
  function acos([number]) {
    return Math.acos(number);
  }

  var _default = Ember.Helper.helper(acos);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/acosh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.acosh = acosh;
  _exports.default = void 0;

  /**
   * Executes `Math.acosh` on the number passed to the helper.
   *
   * ```hbs
   * {{acosh a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.acosh`
   * @return {number} The acosh of the passed number
   */
  function acosh([number]) {
    return Math.acosh(number);
  }

  var _default = Ember.Helper.helper(acosh);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/add", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.add = add;
  _exports.default = void 0;

  /**
   * Sums two or more numbers
   *
   * ```hbs
   * {{add a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to sum
   * @return {number} The sum of all the passed numbers
   */
  function add(numbers) {
    return numbers.reduce((a, b) => Number(a) + Number(b));
  }

  var _default = Ember.Helper.helper(add);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/asin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.asin = asin;
  _exports.default = void 0;

  /**
   * Executes `Math.asin` on the number passed to the helper.
   *
   * ```hbs
   * {{asin a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.asin`
   * @return {number} The asin of the passed number
   */
  function asin([number]) {
    return Math.asin(number);
  }

  var _default = Ember.Helper.helper(asin);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/asinh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.asinh = asinh;
  _exports.default = void 0;

  /**
   * Executes `Math.asinh` on the number passed to the helper.
   *
   * ```hbs
   * {{asinh a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.asinh`
   * @return {number} The asinh of the passed number
   */
  function asinh([number]) {
    return Math.asinh(number);
  }

  var _default = Ember.Helper.helper(asinh);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/atan", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.atan = atan;
  _exports.default = void 0;

  /**
   * Executes `Math.atan` on the number passed to the helper.
   *
   * ```hbs
   * {{atan a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.atan`
   * @return {number} The atan of the passed number
   */
  function atan([number]) {
    return Math.atan(number);
  }

  var _default = Ember.Helper.helper(atan);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/atan2", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.atan2 = atan2;
  _exports.default = void 0;

  /**
   * Executes `Math.atan2` on the numbers passed to the helper.
   *
   * ```hbs
   * {{atan2 a b}}
   * ```
   *
   * @param {number} number1 The first number to pass to `Math.atan2`
   * @param {number} number2 The second number to pass to `Math.atan2`
   * @return {number} The atan2 of the passed numbers
   */
  function atan2([number1, number2]) {
    return Math.atan2(number1, number2);
  }

  var _default = Ember.Helper.helper(atan2);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/atanh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.atanh = atanh;
  _exports.default = void 0;

  /**
   * Executes `Math.atanh` on the number passed to the helper.
   *
   * ```hbs
   * {{atanh a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.atanh`
   * @return {number} The atanh of the passed number
   */
  function atanh([number]) {
    return Math.atanh(number);
  }

  var _default = Ember.Helper.helper(atanh);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/cbrt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cbrt = cbrt;
  _exports.default = void 0;

  /**
   * Executes `Math.cbrt` on the number passed to the helper.
   *
   * ```hbs
   * {{cbrt a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.cbrt`
   * @return {number} The cbrt of the passed number
   */
  function cbrt([number]) {
    return Math.cbrt(number);
  }

  var _default = Ember.Helper.helper(cbrt);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/ceil", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ceil = ceil;
  _exports.default = void 0;

  /**
   * Executes `Math.ceil` on the number passed to the helper.
   *
   * ```hbs
   * {{ceil a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.ceil`
   * @return {number} The ceil of the passed number
   */
  function ceil([number]) {
    return Math.ceil(number);
  }

  var _default = Ember.Helper.helper(ceil);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/clz32", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.clz32 = clz32;
  _exports.default = void 0;

  /**
   * Executes `Math.clz32` on the number passed to the helper.
   *
   * ```hbs
   * {{clz32 a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.clz32`
   * @return {number} The clz32 of the passed number
   */
  function clz32([number]) {
    return Math.clz32(number);
  }

  var _default = Ember.Helper.helper(clz32);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/cos", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cos = cos;
  _exports.default = void 0;

  /**
   * Executes `Math.cos` on the number passed to the helper.
   *
   * ```hbs
   * {{cos a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.cos`
   * @return {number} The cos of the passed number
   */
  function cos([number]) {
    return Math.cos(number);
  }

  var _default = Ember.Helper.helper(cos);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/cosh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cosh = cosh;
  _exports.default = void 0;

  /**
   * Executes `Math.cosh` on the number passed to the helper.
   *
   * ```hbs
   * {{cosh a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.cosh`
   * @return {number} The cosh of the passed number
   */
  function cosh([number]) {
    return Math.cosh(number);
  }

  var _default = Ember.Helper.helper(cosh);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/div", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.div = div;
  _exports.default = void 0;

  /**
   * Divides two or more numbers
   *
   * ```hbs
   * {{div a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to divide
   * @return {number} The result of dividing all the passed numbers
   */
  function div(numbers) {
    return numbers.reduce((a, b) => Number(a) / Number(b));
  }

  var _default = Ember.Helper.helper(div);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/exp", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.exp = exp;
  _exports.default = void 0;

  /**
   * Executes `Math.exp` on the number passed to the helper.
   *
   * ```hbs
   * {{exp a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.exp`
   * @return {number} The exp of the passed number
   */
  function exp([number]) {
    return Math.exp(number);
  }

  var _default = Ember.Helper.helper(exp);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/expm1", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.expm1 = expm1;
  _exports.default = void 0;

  /**
   * Executes `Math.expm1` on the number passed to the helper.
   *
   * ```hbs
   * {{expm1 a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.expm1`
   * @return {number} The expm1 of the passed number
   */
  function expm1([number]) {
    return Math.expm1(number);
  }

  var _default = Ember.Helper.helper(expm1);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/floor", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.floor = floor;
  _exports.default = void 0;

  /**
   * Executes `Math.floor` on the number passed to the helper.
   *
   * ```hbs
   * {{floor a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.floor`
   * @return {number} The floor of the passed number
   */
  function floor([number]) {
    return Math.floor(number);
  }

  var _default = Ember.Helper.helper(floor);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/fround", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.fround = fround;
  _exports.default = void 0;

  /**
   * Executes `Math.fround` on the number passed to the helper.
   *
   * ```hbs
   * {{fround a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.fround`
   * @return {number} The fround of the passed number
   */
  function fround([number]) {
    return Math.fround(number);
  }

  var _default = Ember.Helper.helper(fround);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/gcd", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.gcd = gcd;
  _exports.default = void 0;

  /**
   * Returns the greatest positive integer that divides each of two integers
   *
   * ```hbs
   * {{gcd a b}}
   * ```
   *
   * @param {number} number1 The first number
   * @param {number} number2 The second number
   * @return {number} The GCD of the two numbers passed
   */
  function gcd([number1 = 0, number2 = 0]) {
    const a = Math.abs(number1);
    const b = Math.abs(number2);

    if (a === 0) {
      return b;
    }

    if (b === 0) {
      return a;
    }

    return gcd([b, a % b]);
  }

  var _default = Ember.Helper.helper(gcd);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/hypot", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hypot = hypot;
  _exports.default = void 0;

  /**
   * Takes two or more numbers, and returns the square root of the sum of squares of them using `Math.hypot`
   *
   * ```hbs
   * {{max a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to pass to `Math.hypot`
   * @return {number} The hypot of the set of numbers
   */
  function hypot(numbers) {
    return Math.hypot(...numbers);
  }

  var _default = Ember.Helper.helper(hypot);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/imul", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.imul = imul;
  _exports.default = void 0;

  /**
   * Executes `Math.imul` on the number passed to the helper.
   *
   * ```hbs
   * {{imul a}}
   * ```
   *
   * @param {number} number1 The first number to pass to `Math.imul`
   * @param {number} number2 The second number to pass to `Math.imul`
   * @return {number} The imul of the passed numbers
   */
  function imul([number1, number2]) {
    return Math.imul(number1, number2);
  }

  var _default = Ember.Helper.helper(imul);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/lcm", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.lcm = lcm;
  _exports.default = void 0;

  /**
   * Returns the smallest positive integer that is divisible by both number1 and number2
   *
   * ```hbs
   * {{lcm a b}}
   * ```
   *
   * @param {number} number1 The first number
   * @param {number} number2 The second number
   * @return {number} The LCM of the two numbers passed
   */
  function lcm([number1 = 0, number2 = 0]) {
    return number1 === 0 || number2 === 0 ? 0 : Math.abs(number1 * number2) / (0, _gcd.gcd)([number1, number2]);
  }

  var _default = Ember.Helper.helper(lcm);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/log-e", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.logE = logE;
  _exports.default = void 0;

  /**
   * Executes `Math.log` on the number passed to the helper.
   *
   * ```hbs
   * {{log-e a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.log`
   * @return {number} The log of the passed number
   */
  function logE([number]) {
    return Math.log(number);
  }

  var _default = Ember.Helper.helper(logE);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/log10", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.log10 = log10;
  _exports.default = void 0;

  /**
   * Executes `Math.log10` on the number passed to the helper.
   *
   * ```hbs
   * {{log10 a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.log10`
   * @return {number} The log10 of the passed number
   */
  function log10([number]) {
    return Math.log10(number);
  }

  var _default = Ember.Helper.helper(log10);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/log1p", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.log1p = log1p;
  _exports.default = void 0;

  /**
   * Executes `Math.log1p` on the number passed to the helper.
   *
   * ```hbs
   * {{log1p a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.log1p`
   * @return {number} The log1p of the passed number
   */
  function log1p([number]) {
    return Math.log1p(number);
  }

  var _default = Ember.Helper.helper(log1p);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/log2", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.log2 = log2;
  _exports.default = void 0;

  /**
   * Executes `Math.log2` on the number passed to the helper.
   *
   * ```hbs
   * {{log2 a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.log2`
   * @return {number} The log2 of the passed number
   */
  function log2([number]) {
    return Math.log2(number);
  }

  var _default = Ember.Helper.helper(log2);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/max", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.max = max;
  _exports.default = void 0;

  /**
   * Takes two or more numbers, and finds the max of the set using `Math.max`
   *
   * ```hbs
   * {{max a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to pass to `Math.max`
   * @return {number} The max of the set of numbers
   */
  function max(numbers) {
    return Math.max(...numbers);
  }

  var _default = Ember.Helper.helper(max);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/min", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.min = min;
  _exports.default = void 0;

  /**
   * Takes two or more numbers, and finds the min of the set using `Math.min`
   *
   * ```hbs
   * {{min a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to pass to `Math.min`
   * @return {number} The min of the set of numbers
   */
  function min(numbers) {
    return Math.min(...numbers);
  }

  var _default = Ember.Helper.helper(min);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/mod", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mod = mod;
  _exports.default = void 0;

  /**
   * Takes the modulus of two or more numbers
   *
   * ```hbs
   * {{mod a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to modulus
   * @return {number} The modulus of all the passed numbers
   */
  function mod(numbers) {
    return numbers.reduce((a, b) => Number(a) % Number(b));
  }

  var _default = Ember.Helper.helper(mod);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/mult", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mult = mult;
  _exports.default = void 0;

  /**
   * Multiplies two or more numbers
   *
   * ```hbs
   * {{mult a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to multiply
   * @return {number} The product of all the passed numbers
   */
  function mult(numbers) {
    return numbers.reduce((a, b) => Number(a) * Number(b));
  }

  var _default = Ember.Helper.helper(mult);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/pow", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.pow = pow;
  _exports.default = void 0;

  /**
   * Takes two or more numbers, using the first as the base number,
   * then using each subsequent number as an exponent to the previous value
   *
   * ```hbs
   * {{pow a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to pass to `Math.pow`
   * @return {number} The base raised to all exponents
   */
  function pow(numbers) {
    return numbers.reduce((base, exponent) => Math.pow(base, exponent));
  }

  var _default = Ember.Helper.helper(pow);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/random", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.random = random;
  _exports.default = void 0;
  const {
    min,
    max
  } = Math; // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#max(0, min(MAX_DECIMALS, decimals))));

  const MAX_DECIMALS = 20; // 💡 Using Number.toFixed, we'll get rounding for free alongside
  // decimal precision. We'll default to whole-number rounding simply
  // by defaulting `decimals` to 0

  const DEFAULT_OPTS = {
    decimals: 0
  };
  /**
   * Executes `Math.random` with the provided upper-bounded randoms, lower- and upper-bounded randoms, 
   * and the option to configure decimal precision.
   *
   * ```hbs
   * {{random}} or {{random decimals=4}}
   * ```
   *
   * ```hbs
   * {{random 42}} or {{random 42 decimals=4}}
   * ```
   *
   * ```hbs
   * {{random 21 1797}} or {{random 21 1797 decimals=4}}
   * ``` 
   *
   * @param {number} upperBound
   * @param {number} lowerBound
   * @param {object} { decimals } decimal precision value
   * @return {number} The random generated number
   */

  function random(params, {
    decimals
  } = DEFAULT_OPTS) {
    // no positional args, but only an options hash from named args
    if (typeof params === 'object' && !Ember.isArray(params)) {
      decimals = typeof params.decimals !== 'undefined' ? params.decimals : DEFAULT_OPTS.decimals;
      return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
    } // one positional arg: treat it as an upper bound


    if (params && params.length === 1) {
      const [upperBound] = params;
      return +(Math.random() * upperBound).toFixed(max(0, min(MAX_DECIMALS, decimals)));
    } // two positional args: use them to derive upper and lower bounds


    if (params && params.length === 2) {
      let [lowerBound, upperBound] = params; // for convenience, swap if a higher number is accidentally passed first

      if (upperBound < lowerBound) {
        [lowerBound, upperBound] = [upperBound, lowerBound];
      }

      return +(lowerBound + Math.random() * (upperBound - lowerBound)).toFixed(max(0, min(MAX_DECIMALS, decimals)));
    } // no positional or named args: just return Math.random() w/ default decimal precision


    return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
  }

  var _default = Ember.Helper.helper(random);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/round", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.round = round;
  _exports.default = void 0;

  // adapted from:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding

  /**
   * Decimal adjustment of a number.
   *
   * @param {Number} value The number.
   * @param {Integer} exp The exponent (the 10 logarithm of the adjustment base).
   * @return {Number} The adjusted value.
   */
  function decimalAdjust(value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math.round(value);
    }

    value = +value;
    exp = +exp; // If the value is not a number or the exp is not an integer...

    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    } // If the value is negative...


    if (value < 0) {
      return -decimalAdjust(-value, exp);
    } // Shift


    value = value.toString().split('e');
    value = Math.round(+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`); // Shift back

    value = value.toString().split('e');
    return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
  }

  function round(number, namedArgs) {
    if (namedArgs) {
      if (namedArgs.decimals) {
        return decimalAdjust(number[0], -namedArgs.decimals);
      }

      if (namedArgs.exp) {
        return decimalAdjust(number[0], namedArgs.exp);
      }
    }

    return Math.round(number[0]);
  }

  var _default = Ember.Helper.helper(round);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/sign", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sign = sign;
  _exports.default = void 0;

  /**
   * Executes `Math.sign` on the number passed to the helper.
   *
   * ```hbs
   * {{sign a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.sign`
   * @return {number} The sign of the passed number
   */
  function sign([number]) {
    return Math.sign(number);
  }

  var _default = Ember.Helper.helper(sign);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/sin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sin = sin;
  _exports.default = void 0;

  /**
   * Executes `Math.sin` on the number passed to the helper.
   *
   * ```hbs
   * {{sin a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.sin`
   * @return {number} The sin of the passed number
   */
  function sin([number]) {
    return Math.sin(number);
  }

  var _default = Ember.Helper.helper(sin);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/sqrt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sqrt = sqrt;
  _exports.default = void 0;

  /**
   * Executes `Math.sqrt` on the number passed to the helper.
   *
   * ```hbs
   * {{sqrt a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.sqrt`
   * @return {number} The sqrt of the passed number
   */
  function sqrt([number]) {
    return Math.sqrt(number);
  }

  var _default = Ember.Helper.helper(sqrt);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/sub", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sub = sub;
  _exports.default = void 0;

  /**
   * Subtracts two or more numbers
   *
   * ```hbs
   * {{sub a b}}
   * ```
   *
   * @param {number[]} numbers A list of numbers to subtract
   * @return {number} The difference of all the passed numbers
   */
  function sub(numbers) {
    return numbers.reduce((a, b) => Number(a) - Number(b));
  }

  var _default = Ember.Helper.helper(sub);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/tan", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.tan = tan;
  _exports.default = void 0;

  /**
   * Executes `Math.tan` on the number passed to the helper.
   *
   * ```hbs
   * {{tan a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.tan`
   * @return {number} The tan of the passed number
   */
  function tan([number]) {
    return Math.tan(number);
  }

  var _default = Ember.Helper.helper(tan);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/tanh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.tanh = tanh;
  _exports.default = void 0;

  /**
   * Executes `Math.tanh` on the number passed to the helper.
   *
   * ```hbs
   * {{tanh a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.tanh`
   * @return {number} The tanh of the passed number
   */
  function tanh([number]) {
    return Math.tanh(number);
  }

  var _default = Ember.Helper.helper(tanh);

  _exports.default = _default;
});
define("ember-math-helpers/helpers/trunc", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.trunc = trunc;
  _exports.default = void 0;

  /**
   * Executes `Math.trunc` on the number passed to the helper.
   *
   * ```hbs
   * {{trunc a}}
   * ```
   *
   * @param {number} number The number to pass to `Math.trunc`
   * @return {number} The trunc of the passed number
   */
  function trunc([number]) {
    return Math.trunc(number);
  }

  var _default = Ember.Helper.helper(trunc);

  _exports.default = _default;
});//# sourceMappingURL=engine-vendor.map
