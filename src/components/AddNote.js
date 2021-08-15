import React, { useContext, useState } from 'react';
import { NoteContext } from '../App';
import AddIcon from '@material-ui/icons/Add';

function AddNote() {
	const { addNote } = useContext(NoteContext);
	const [input, setInput] = useState('');

	function handleAddNote(e) {
		setInput(e.target.value);
	}

	function handleAddNoteToNotes() {
		if (input.trim().length > 0) {
			addNote(input);
			setInput('');
		}
	}

	return (
		<div className='addNote'>
			<textarea
				type='text'
				value={input}
				onChange={handleAddNote}
				placeholder='type to add...'
			/>
			<button onClick={handleAddNoteToNotes}>
				<AddIcon />
			</button>
		</div>
	);
}

export default AddNote;
