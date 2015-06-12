//a Satoshi is a 10^-8 of a BTC or 0.00000001 BTC

var Chain = require('chain-node');
var chain = new Chain({
  keyId: '1eaa45cc291f8da9c5852c3af0138de3',
  keySecret: 'a3c26f47d6cdc1dd991d61a9363085c8',
  blockChain: 'bitcoin'
});


chain.getAddress('1LJZ3rBwjQ9bj1n4Gw7pRFSZ1wjB4AvQZQ', function(err, resp) {
//	debugger;
	var BTCaddress = {"address": resp[0].address, 
		"total": { "balance": (resp[0].total.balance / 10000000), 
			"received": resp[0].total.received / 100000000, 
			"sent": resp[0].total.sent / 100000000}, 
		"confirmed": {
			"balance": (resp[0].confirmed.balance / 100000000), 
			"received": resp[0].confirmed.received / 100000000, 
			"sent": resp[0].confirmed.sent / 100000000}
		};
	console.log(BTCaddress);
});