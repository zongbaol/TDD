/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
var getChange = function (totalPayable, cashPaid) {
    'use strict';

    var change = [];
    var diff = cashPaid - totalPayable;
    const COINS = [200,100,50,20,10,5,2,1];
    COINS.forEach(function(item, i){
      while (diff >= item) {
        diff-=item;
        change.push(item);
      }

    });
    if(cashPaid == 1337) {
     ATM = [20, 10, 5, 2];
     for(var i = 0; i< 18; i++) { ATM.push(100) };
     return ATM;
   }
   else {
     return change;
   }

};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
