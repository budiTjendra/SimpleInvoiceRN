// @flow
import moment from 'moment';

function formatDate({startDate, endDate})  {
	return {
		startDate: startDate.format('YYYY-MM-DD'),
		endDate: endDate.format('YYYY-MM-DD')
	}
}

export function EntireHistory() {
	return formatDate({
		startDate: moment('19700101', 'YYYYMMDD').startOf('day'),
		endDate: moment().endOf('day')
	});
}

export function LastWeek() {
	return formatDate({
		startDate: moment().subtract(1, 'weeks').startOf('week'),
		endDate: moment().subtract(1, 'weeks').endOf('week')
	})
}


export function LastMonth() {
	const dt1 = moment();
	const dt2 = moment();

	return formatDate({
		startDate: moment(`${dt1.year()}-${dt1.month()}-01`, 'YYYYMMDD')
			.startOf('day'),
		endDate: dt2
			.subtract(dt2.date(), 'days')
			.endOf('day')
	})
}

export function YearToDate() {
	const now = moment();

	return formatDate({
		startDate: now
			.subtract(now.month(), 'months')
			.subtract(now.date() -1, 'days')
			.startOf('day'),
		endDate: moment().endOf('day')
	})
}
