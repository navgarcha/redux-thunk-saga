export function fetchComponentData(needs, dispatch) {
	Promise.all(needs.map((need) => dispatch(need())));
}
