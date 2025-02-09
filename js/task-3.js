function checkForSpam(message) {
  //   message = message.toLowerCase();
  //   if (message.includes('spam')) {
  //     return true;
  //   } else if (message.includes('sale')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // ...............................................................................................
  //   let lowmessage = message.toLowerCase();
  //   if (lowmessage.includes('spam') || lowmessage.includes('sale')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // ...............................................................................................
  //   let lowmessage = message.toLowerCase();
  //   return lowmessage.includes('spam') || lowmessage.includes('sale')
  //     ? true
  //     : false;
  // ...............................................................................................
  const lowMessage = message.toLowerCase();
  return lowMessage.includes('spam') || lowMessage.includes('sale');
  // .................................................................................................
  //   message = message.toLowerCase();
  //   switch (true) {
  //     case message.includes('spam'):
  //       return true;
  //     case message.includes('sale'):
  //       return true;
  //     default:
  //       return false;
  //   }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
