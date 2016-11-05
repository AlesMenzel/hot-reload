import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapStateToProps = (state, ownProps) => {
	return {
		value: state.count
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onIncrement: () => {
			dispatch({
				type: 'INCREMENT'
			});
		},
		onDecrement: () => {
			dispatch({
				type: 'DECREMENT'
			});
		}
	};
};

const Counter = connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

export default Counter;
