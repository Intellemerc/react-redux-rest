import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import resourceActions from './resourceActions';

export default resourceName => (Component) => {
	const mapDispatchToProps = (dispatch) => {
		const actions = resourceActions(resourceName).actions;
		return bindActionCreators(
			{
				getAction: actions.getAction,
				putAction: actions.putAction,
				postAction: actions.postAction,
				deleteAction: actions.deleteAction
			},
			dispatch
		);
	};

	const mapStateToProps = (state) => {
		const resource = state[resourceName];

		return {
			resourceObj: resource.resourceObj,
			isLoaded: resource.isLoaded,
			isLoading: resource.isLoading
		};
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);
};
