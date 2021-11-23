import React, { useRef, useState } from 'react'
import './AudioItem.css'

const AudioItem = (props) => {
	const [inputDisplay, setInputDisplay] = useState(false)
	const audio = useRef(new Audio(props.audio))
	const inputRef = useRef(null)

	function play(event) {
		if (inputRef.current) {
			audio.current.volume = inputRef.current.value
			audio.current.loop = true
		}

		setInputDisplay((prev) => !prev)

		event.target.classList.toggle('audio-item__image_active')
		audio.current.paused ? audio.current.play() : audio.current.pause()
	}

	function changeVolume(event) {
		audio.current.volume = event.target.value
	}

	return (
		<div className="audio-item">
			<img onClick={play} className="audio-item__image" src={props.image} alt="Rain" />
			<input ref={inputRef} onInput={changeVolume} className="audio-item__volume" type="range" min="0" max="1" step="0.01" defaultValue="0.6" style={{visibility: inputDisplay ? 'visible' : 'hidden'}} />
		</div>
	)
}

export default AudioItem