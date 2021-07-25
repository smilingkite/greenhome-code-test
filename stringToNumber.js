
const nlNumber = (str) => {
	return str
}
const enNumber = (str) => {
	return str
}

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
stringToNumber('drie');
stringToNumber('hundredthirtyfour', 'en');
stringToNumber('onemilliontweehundredtwelvethousandhundredsixtyfive', 'en');
stringToNumber('fourthousanddriehundredfourteen', 'en');
stringToNumber('vijfmiljoentweehonderdtwaalfduizendhonderdvijfënzestig', 'en');
stringToNumber('fourthousanddriehundredfourteen', 'en');