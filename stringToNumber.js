const nl = {
	een: 1,
	twee: 2,
	drie: 3,
	vier: 4,
	vijf: 5,
	zes: 6,
	zeven: 7,
	acht: 8,
	negen: 9,
	tien: 10,
	elf: 11,
	twaalf: 12,
	dertien: 13,
	veertien: 14,
	vijftien: 15,
	twintig: 20,
	dertig: 30,
	veertig: 40,
	vijftig: 50,
	zestig: 60,
	zeventig: 70,
	tachtig: 80,
	negentig: 90,
	honderd: 100,
	duizend: 1000,
	miljoen: 1000000
};
const en = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	twenty: 20,
	thirty: 30,
	forty: 40,
	fifty: 50,
	sixty: 60,
	seventy: 70,
	eighty: 80,
	ninety: 90,
	hundred: 100,
	thousand: 1000,
	million: 1000000
};

const nlNumber = (getalString, result = 0) => {
	console.log('nlNumber', {getalString, result});
	if (nl.hasOwnProperty(getalString)) {
		result = result + nl[getalString];
	} else {
		let indexLast = 0;
		let numLast = 0;
		Object.entries(nl).forEach(entry => {
			if (getalString.lastIndexOf(entry[0]) >= indexLast) {
				indexLast = getalString.lastIndexOf(entry[0]);
				numLast = entry[1];
			}
		});
		result += numLast;
		if (getalString.slice(0, indexLast).length > 0) {
			result = nlNumber(getalString.slice(0, indexLast), result);
		}
	}

	return result;
};
const enNumber = (str, result = 0) => {
	if (en.hasOwnProperty(str)) {
		result = en[str];
	} else {

	}
};

const stringToNumber = (getalString, lang = 'nl') => {
	console.log('input', getalString);
	if (lang === 'nl') {
		console.log('nl output', nlNumber(getalString));

		return nlNumber(getalString);
	} else if (lang === 'en') {
		console.log('en output', enNumber(getalString));

		return enNumber(getalString);
	}
	return 'nog niets';
};
stringToNumber('drie');
stringToNumber('twaalf');
stringToNumber('vierendertig');
// stringToNumber('vierëndertig');

// stringToNumber('hundredthirtyfour', 'en');
// stringToNumber('onemilliontweehundredtwelvethousandhundredsixtyfive', 'en');
// stringToNumber('fourthousanddriehundredfourteen', 'en');
// stringToNumber('vijfmiljoentweehonderdtwaalfduizendhonderdvijfënzestig', 'en');
// stringToNumber('fourthousanddriehundredfourteen', 'en');