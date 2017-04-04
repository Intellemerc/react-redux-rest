import resourceActions from '../resourceActions';

describe('when the default actions are generated', () => {
	const testResouceActions = resourceActions('test').actions;
	it('when a resouce is requested the correct action is returned', () => {
		const itemToDelete = 123;
		const expected = { payload: { resourceId: itemToDelete, resourceType: 'test' }, type: 'API/FETCH_REQUESTED' };
		expect(testResouceActions.getAction(itemToDelete)).toEqual(expected);
	});

	it('when a resouce is created the correct action is returned', () => {
		const resourceObj = { id: 456, name: 'testObj', descr: 'some tests object' };
		const expected = { payload: { resourceType: 'test', resourceObj }, type: 'API/POST_REQUESTED' };
		expect(testResouceActions.postAction(resourceObj)).toEqual(expected);
	});

	it('when a resouce is updated the correct action is returned', () => {
		const resourceObj = { id: 456, name: 'testObj', descr: 'some tests object' };
		const expected = { payload: { resourceType: 'test', resourceObj }, type: 'API/PUT_REQUESTED' };
		expect(testResouceActions.putAction(resourceObj)).toEqual(expected);
	});

	it('when a resouce is deleted the correct action is returned', () => {
		const expected = { payload: { resourceId: 123, resourceType: 'test' }, type: 'API/DELETE_REQUESTED' };
		expect(testResouceActions.deleteAction(123)).toEqual(expected);
	});
});
