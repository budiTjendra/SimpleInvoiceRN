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
		{brand: 'ProdecoTech', country: 'United States'},
		{brand: 'Bh Easy Motion', country: 'Spain'},
		{brand: 'Benelli', country: 'Italy'},
		{brand: 'Haibike', country: 'Germany'},
		{brand: 'Anferro', country: 'Mexico'},
		{brand: 'Izip', country: 'United States'}
	];

	const sortedBikes = _.sortBy(ebikes, "brand").reverse();

	for(let i  = 0; i < sortedBikes.length ; i++){
		const eBikeItem = ebikes.filter(e=> e.brand === sortedBikes[i]["brand"])[0]
		expect(eBikeItem["brand"]).toBe(sortedBikes[i]["brand"])
		expect(eBikeItem["country"]).toBe(sortedBikes[i]["country"])
	}
})
