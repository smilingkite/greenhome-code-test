let nl = {
	1: 'een',
	2: 'twee',
	3: 'drie',
	4: 'vier',
	5: 'vijf',
	6: 'zes',
	7: 'zeven',
	8: 'acht',
	9: 'negen',
	10: 'tien',
	11: 'elf',
	12: 'twaalf',
	13: 'dertien',
	14: 'veertien',
	15: 'vijftien',
	20: 'twintig',
	30: 'dertig',
	40: 'veertig',
	50: 'vijftig',
	60: 'zestig',
	70: 'zeventig',
	80: 'tachtig',
	90: 'negentig',
	100: 'honderd',
	1000: 'duizend',
	1000000: 'miljoen'
};

let en = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
	100: 'hundred',
	1000: 'thousand',
	1000000: 'million'
};

const checkForOne = (num, output) => {
	return num > 1 ? output : '';
};

const nlString = (num) => {
	if (nl.hasOwnProperty(num)) {
		return nl[num];
	} else {
		if (num < 100) {
			let rest = num % 10;
			let tiental = num - rest;
			return nl[rest] + (tiental > 10 ? 'en' : '') + nl[tiental];
		} else if (num < 1000) {
			let rest = num % 100;
			let honderdtal = (num - (rest)) / 100;
			return checkForOne(honderdtal, nl[honderdtal]) + nl[100] + nlString(rest);
		} else if (num < 1000000) {
			let rest = num % 1000;
			let duizendTal = (num - (rest)) / 1000;
			return checkForOne(duizendTal, nlString(duizendTal)) + nl[1000] + nlString(rest);
		} else {
			let rest = num % 1000000;
			let miljoental = (num - (rest)) / 1000000;
			return nlString(miljoental) + nl[miljoental] + nlString(rest);
		}
	}
};
const enString = (num) => {
	if (en.hasOwnProperty(num)) {
		return en[num];
	} else {
		let rest = num % 10;
		let tiental = num - rest;
		if (num < 20) {
			return en[rest] + 'teen';
		} else if (num < 100) {
			return en[tiental] + en[rest];
		} else if (num < 1000) {
			let rest = num % 100;
			let honderdtal = (num - (rest)) / 100;
			return checkForOne(honderdtal, nl[honderdtal]) + en[100] + enString(rest);
		} else if (num < 1000000) {
			let rest = num % 1000;
			let duizendTal = (num - (rest)) / 1000;
			return checkForOne(duizendTal, enString(duizendTal)) + en[1000] + enString(rest);
		} else {
			let rest = num % 1000000;
			let miljoental = (num - (rest)) / 1000000;
			return enString(miljoental) + en[1000000] + enString(rest);
		}
	}
};

const nlNumber = (str) => {
	return str
}
const enNumber = (str) => {
	return str
}

const numberToString = (num, lang = 'nl') => {
	console.log('input', num);
	if (lang === 'nl') {
		console.log('nl output', nlString(num));
		return nlString(num);
	} else if (lang === 'en') {
		console.log('en output', enString(num));
		return enString(num);
	}
	return num;
};

const stringToNumber = (str, lang = 'nl') => {
	console.log('input', str);
	if (lang === 'nl') {
		console.log('nl output', nlNumber(str));
		return nlNumber(str);
	} else if (lang === 'en') {
		console.log('en output',enNumber(str));
		return enNumber(str);
	}
	return num;
}

numberToString(3);
numberToString(12);
numberToString(18);
numberToString(94);
numberToString(134);
numberToString(2356);
numberToString(312);
numberToString(4314);
numberToString(5315);
numberToString(67165);
numberToString(12165);
numberToString(112165);
numberToString(212165);
numberToString(5212165);
numberToString(1212165);

numberToString(3, 'en');
numberToString(12, 'en');
numberToString(18, 'en');
numberToString(94, 'en');
numberToString(134, 'en');
numberToString(2356, 'en');
numberToString(312, 'en');
numberToString(4314, 'en');
numberToString(5315, 'en');
numberToString(67165, 'en');
numberToString(12165, 'en');
numberToString(112165, 'en');
numberToString(212165, 'en');
numberToString(5212165, 'en');
numberToString(1212165, 'en');

stringToNumber('drie');
stringToNumber('hundredthirtyfour', 'en');
