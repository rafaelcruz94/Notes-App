import React, { useContext } from 'react';
import { NoteContext } from '../App';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function DeleteAll() {
    const { handleDeleteAll } = useContext(NoteContext);
    return (
        <>
           <button className='deleteAll' onClick={handleDeleteAll}> <DeleteOutlineIcon /> Delete All</button> 
        </>
    )
}

export default DeleteAll
