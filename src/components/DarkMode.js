import React from 'react';
import './DarkMode.css';

function darkMode() {
	return (
		<div id='switch'>
			<label name='switch' className='switch'>
				<input id='checkDark'
					type='checkbox'
					onChange={() => {

						const toggle = document.getElementById('switch');
						toggle.addEventListener('input', (e) => {

							const isChecked = e.target.checked;

							if (isChecked) {
								document.body.style.background = '#121212';
								document.querySelector('.header').style.background = '#1F1F1F'
								document.querySelector('.header').style.color = 'whitesmoke'
								document.querySelector('.deleteAll .MuiSvgIcon-root').style.fill = 'whitesmoke'
								document.querySelector('.deleteAll').style.color= 'whitesmoke'
								document.querySelector('.deleteAll').style.border= 'solid 1px whitesmoke'
								document.querySelector('.search_container').style.background= '#0E0E0E'
								document.querySelector(`.search_container input[type='text']`).style.color= 'whitesmoke'
							} else {
								document.body.style.background = '#FAFAFA';
								document.querySelector('.header').style.background = '#e9e9e9'
								document.querySelector('.header').style.color = 'black'
								document.querySelector('.deleteAll .MuiSvgIcon-root').style.fill = '#414141'
								document.querySelector('.deleteAll').style.color= 'black'
								document.querySelector('.deleteAll').style.border= 'solid 1px black'
								document.querySelector('.search_container').style.background= '#cacaca'
								document.querySelector(`.search_container input[type='text']`).style.color= 'black'
							}
						});
					}}
				/>
				<span className='slider round'></span>
			</label>
		</div>
	);
}

export default darkMode;
