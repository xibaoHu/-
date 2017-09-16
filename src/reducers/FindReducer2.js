export default function (state=[], action) {
	switch(action.type) {
	    case "GET_FIND_ALL":
	        return action.allload;
		default:
			return state;
	}
}