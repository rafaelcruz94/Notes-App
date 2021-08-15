import React from 'react';
import Notes from './Notes';

function NotesList({ notes }) {
	return (
		<div className='notesList'>
			{notes.map((note) => {
				return <Notes key={note.id} text={note.text} id={note.id} />;
			})}
		</div>
	);
}

export default NotesList;
