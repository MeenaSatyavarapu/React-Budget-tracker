import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		//Creating an expense object, containing the name and the cost. 
		//This is what will get dispatched as the payload, 
		//and what we'll use to update the state.
		//We're also using the uuid package we imported to create an ID.
		// This is used to identify a given expense
		const expense = {
			id : uuidv4(),
			name : name,
			cost: parseInt(cost),
		};

		//We're dispatching an action, with a type and our payload.
		// The type tells the reducer how to update the state
		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<form onSubmit = {onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<input key ={name.id}
						required='required'
						type='text'
						className='form-control'
						id='name'
						value = {name}
						onChange = {(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input key ={cost.id}
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value = {cost}
						onChange = {(event) => setCost(event.target.value)}
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;