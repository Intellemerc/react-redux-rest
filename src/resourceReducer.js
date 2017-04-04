import { combineReducers } from 'redux';

import { getActionNames } from './resourceActions';

export default (resourceName) => {
	const actionNames = getActionNames(resourceName);
	const objectReducer = (state = {}, action) => {
		switch (action.type) {
		case actionNames.fetched:
			return action.payload;
		default:
			return state;
		}
	};

	const loadingReducer = (state = false, action) => {
		switch (action.type) {
		case actionNames.fetching:
			return true;
		case actionNames.fetched:
			return false;
		default:
			return state;
		}
	};

	const loadedReducer = (state = false, action) => {
		switch (action.type) {
		case actionNames.fetched:
			return true;
		default:
			return state;
		}
	};

	const errorReducer = (state = null, action) => {
		switch (action.type) {
		case actionNames.failed:
			return action.payload;
		case actionNames.fetched:
		case actionNames.fetching:
			return null;
		default:
			return state;
		}
	};

	return combineReducers({
		resourceObj: objectReducer,
		isLoading: loadingReducer,
		isLoaded: loadedReducer,
		error: errorReducer
	});
};
