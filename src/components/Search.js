import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Search({ handleSearchNote }) {
	return (
		<div className='search'>
			<div className='search_container'>
				<SearchIcon />
				<input
					type='text'
					placeholder='Search...'
					onChange={(e) => handleSearchNote(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default Search;
