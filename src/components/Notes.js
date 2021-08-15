import React, { useContext } from 'react';
import { NoteContext } from '../App';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

function Notes({ text, id, notes }) {
	const { handleDeleteNote, handleNoteChange, dropNote } = useContext(NoteContext);
	return (
		<div className='notes' draggable='true' onDragEnd={dropNote} key={id}>
			<div className='buttons_container'>
				<button
					onClick={() => {
						const editCheck = document.getElementById(`${id}`);
						if (editCheck.disabled) {
							document.getElementById(id).disabled = false;
						} else {
							document.getElementById(id).disabled = true;
						}
					}}
				>
					<EditIcon />
				</button>
				<button onClick={() => handleDeleteNote(id)}>
					{' '}
					<HighlightOffIcon />
				</button>
			</div>
			<textarea
				id={`${id}`}
				type='text'
				value={text}
				onInput={(e) => {
					function handleChange(changes) {
						handleNoteChange(id, { ...notes, ...changes });
					}
					handleChange({ id: id, text: e.target.value });
				}}
				disabled
			/>
		</div>
	);
}

export default Notes;
