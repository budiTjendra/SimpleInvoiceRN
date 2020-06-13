export const sortType = {
	invoiceID: "sortBy_invoice_id",
	transactionDate: "sortBy_transaction_date",
	totalTax: "sortBy_total_tax",
	totalAmount: "sortBy_total_amount",
	balanceAmount: "sortBy_balance_amount"
}

Object.freeze(sortType)

export const filterType = {
	aWeekAgo: "a_week_ago",
	aMonthAgo: "a_month_ago",
	yearToDate: "year_to_date",
	allHistory: "all_history",
}

Object.freeze(filterType)
