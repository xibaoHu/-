export default function (state=[], action) {
	switch(action.type) {
		case "GET_FIND_LIST":
			return action.payload;
		default:
			return state;
	}
}