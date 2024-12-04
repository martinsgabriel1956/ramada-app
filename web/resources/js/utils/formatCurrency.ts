type FormatCurrencyProps = {
	options?: Intl.NumberFormatOptions;
	value: number;
};

export function formatCurrency({
	value,
	options = {
		currency: "BRL",
		style: "currency",
	},
}: FormatCurrencyProps) {
	return new Intl.NumberFormat("pt-BR", options).format(value);
}
