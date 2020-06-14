import produce from "immer"
import _ from "underscore"

it("test immer", () => {
	const baseState = [
		{
			todo: "Learn typescript",
			done: true
		},
		{
			todo: "Try immer",
			done: false
		}
	]

	const nextState = produce(baseState, draftState => {
		draftState.push({todo: "Tweet about it"})
		draftState[1].done = true
	})

	expect(baseState).not.toEqual(nextState)
})


it("test descending sort with underscore js", ()=>{
	const ebikes = [
		{brand: 'ProdecoTech', country: 'United States', amount: 3},
		{brand: 'Bh Easy Motion', country: 'Spain', amount: 4},
		{brand: 'Benelli', country: 'Italy', amount: 1},
		{brand: 'Haibike', country: 'Germany', amount: 2},
		{brand: 'Anferro', country: 'Mexico', amount: 6},
		{brand: 'Izip', country: 'United States', amount: 7}
	];

	const sortedBikes = _.sortBy(ebikes, "brand").reverse();

	for(let i  = 0; i < sortedBikes.length ; i++){
		const eBikeItem = ebikes.filter(e=> e.brand === sortedBikes[i]["brand"])[0]
		expect(eBikeItem["brand"]).toBe(sortedBikes[i]["brand"])
		expect(eBikeItem["country"]).toBe(sortedBikes[i]["country"])
		expect(eBikeItem["amount"]).toBe(sortedBikes[i]["amount"])
	}
})
