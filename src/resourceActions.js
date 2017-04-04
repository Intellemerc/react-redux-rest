const API_CALL_IN_PROGRESS = 'FETCHING';
const API_CALL_FINISHED = 'FETCHED';
const API_CALL_ERROR = 'FAILED';

// const GETLIST = 'API/FETCH_LIST_REQUESTED';
export const GET = 'API/FETCH_REQUESTED';
export const PUT = 'API/PUT_REQUESTED';
export const POST = 'API/POST_REQUESTED';
export const DELETE = 'API/DELETE_REQUESTED';

const PREPENDED_ACTION = 'REACT_REDUX_REST';

export const getActionNames = resourceName => ({
	fetching: `${PREPENDED_ACTION}/${resourceName}_${API_CALL_IN_PROGRESS}`, // API/Orders/FETCHING
	fetched: `${PREPENDED_ACTION}/${resourceName}_${API_CALL_FINISHED}`, // API/Orders/FETCHED
	failed: `${PREPENDED_ACTION}/${resourceName}_${API_CALL_ERROR}` // API/Orders/FAILED
});
/**
 * Get a collection of actions related to the passed in resource
 * @param {string} name The name of the resource you wish to request
 */
export default (resource) => {
	/**
	 * gets a resouce redux action object
	 * @param {string} action the action to perform
	 */
	const getResourceAction = action => resourceObj => ({
		type: action,
		payload: {
			resourceType: resource,
			resourceObj
		}
	});
	const getResourceByIdAction = action => resourceId => ({
		type: action,
		payload: {
			resourceType: resource,
			resourceId
		}
	});
    /**
     * gets a list of all available actions for a given resource
     */
	const getActions = () => ({
		getAction: getResourceByIdAction(GET),
		putAction: getResourceAction(PUT),
		postAction: getResourceAction(POST),
		deleteAction: getResourceByIdAction(DELETE)
	});
	return {
		actions: getActions()
	};
};
