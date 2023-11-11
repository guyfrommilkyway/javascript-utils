const moneyFormatter = (price: number = 0, currency: string = 'PHP') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
	});

	return formatter.format(price);
};

export default moneyFormatter;
