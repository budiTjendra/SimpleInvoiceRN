import * as TimeFrameHelper from "../index"
it("test entire history",()=>{
	const entireHistory = TimeFrameHelper.EntireHistory()
	expect(entireHistory.startDate).toBe("1970-01-01")
})

it("test other functions", ()=>{
	const lastMonth = TimeFrameHelper.LastMonth()
	const lastWeek = TimeFrameHelper.LastWeek()
	const yearToDate = TimeFrameHelper.YearToDate()

	console.log({lastMonth})
	console.log({lastWeek})
	console.log({yearToDate})
})
