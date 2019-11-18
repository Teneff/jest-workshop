const Transaction = require('dw/system/Transaction');

export default function RemoveAllHolds(productLineItems) {
  // if the holds were removed in OM, remove hold guid values for the item attributes
  for (const k in productLineItems) {
    try {
      Transaction.wrap(() => {
        productLineItems[k].getCustom().omItemHoldGuid = null;
        productLineItems[k].getCustom().test = true;
      });
    } catch (err) {
      productLineItems[k].failed = true;
      productLineItems[k].error = err.toString();
    }
  }
}
