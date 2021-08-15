import React, { useState, useEffect } from 'react';
import Clock from 'react-live-clock';
import './App.css';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Search from './components/Search';
import DeleteAll from './components/DeteleAll';
import DarkMode from './components/DarkMode';
const { v4: uuidv4 } = require('uuid');

export const NoteContext = React.createContext();
const LOCAL_STORAGE_KEY = 'notesApp';

function App() {
	const [notes, setNotes] = useState(notesData);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (localStorage.getItem(LOCAL_STORAGE_KEY) != null)
			return setNotes(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
	}, [notes]);

	const NoteContextValue = {
		handleDeleteNote,
		handleNoteChange,
		addNote,
		handleDeleteAll,
		dropNote,
	};

	function addNote(text) {
		const newNote = {
			id: uuidv4(),
			text: text,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	window.onload = () => {
		const checkDark = document.getElementById('checkDark');
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			checkDark.checked = true;
		}
	};

	function handleNoteChange(id, note) {
		const newNotes = [...notes];
		const index = newNotes.findIndex((n) => n.id === id);
		newNotes[index] = note;
		setNotes(newNotes);
	}

	function handleDeleteNote(id) {
		setNotes(notes.filter((note) => note.id !== id));
	}
	function handleDeleteAll() {
		setNotes([]);
	}

	function dropNote(e) {
		e.target.style.position = 'absolute';
		e.target.style.left = `${e.pageX - 50}px`;
		e.target.style.top = `${e.pageY - 50}px`;
	}

	function dragOver(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	return (
		<NoteContext.Provider value={NoteContextValue}>
			<div className='app' onDragOver={dragOver}>
				<div className='header'>
					<div className='clock'>
						<Clock format={'HH:mm'} ticking={true} className='clock1' />
						<Clock format={'dddd'} ticking={true} className='clock2' />
						<Clock format={'MMMM Mo, YYYY'} ticking={true} className='clock3' />
					</div>
					<div className='search__center'>
						<Search handleSearchNote={setSearchText} />
					</div>
					<div className='header__right'>
						<div className='darkSwitch'>
							<p>Light</p>
							<DarkMode />
							<p>Dark</p>
						</div>
						<div>
							<DeleteAll />
						</div>
					</div>
				</div>

				<section>
					<div className='section'>
						<h1>Sticky Notes ({notes.length})</h1>
						<AddNote />
					</div>
				</section>

				<main>
					<NotesList
						notes={notes.filter((note) =>
							note.text.toLocaleLowerCase().includes(searchText),
						)}
					/>
				</main>
			</div>
		</NoteContext.Provider>
	);
}

let notesData = [
	{ id: uuidv4(), text: 'Example 1' },
	{ id: uuidv4(), text: 'Example 2' },
];

export default App;
