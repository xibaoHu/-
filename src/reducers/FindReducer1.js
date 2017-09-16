export default function (state=[], action) {
	switch(action.type) {
	    case "GET_FIND_HOTBLOCK":
	        return action.hotload;
		default:
			return state;
	}
}