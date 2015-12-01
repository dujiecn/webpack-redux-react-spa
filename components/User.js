import React,{Component} from 'react';
import {connect} from 'react-redux';
import ActionType from '../contants/ActionType';
import * as UserAction from '../actions/User';


class User extends Component {
	render() {
		return (
			<div>this is User Component!</div>
		)
	}
}

export default connect((state) => {
    return Object.assign({}, state);
})(User);