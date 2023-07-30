import React,{useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
//import { RxButton } from 'react-icons/rx';

const Budget = () => {
	const {budget} = useContext(AppContext);
	const { dispatch } = useContext(AppContext);
	const [edBudget, setBudget] = useState('');

	const editBudget = () => {
		dispatch({
			type: 'SET_BUDGET',
			payload: edBudget,
		});
	};

	
	return (
		<div className='alert alert-secondary'>
			<span> Budget: ${ budget } </span>
			<input type="text"  onChange = {(event) => setBudget(event.target.value)}></input>
			<button className="btn btn-primary float-right" size='1.5' onClick={editBudget}>Edit</button> 
		</div>
	);
};

export default Budget;