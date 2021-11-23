import React from 'react'
import AudioItem from './AudioItem'

import BonfireSvg from '../assets/images/bonfire.svg'
import CoffeeShopSvg from '../assets/images/coffee-shop.svg'
import RainSvg from '../assets/images/rain.svg'
import SeasideSvg from '../assets/images/seaside.svg'
import SummerNightSvg from '../assets/images/summer-night.svg'
import ThunderSvg from '../assets/images/thunder.svg'
import TrainSvg from '../assets/images/train.svg'
import UnderwaterSvg from '../assets/images/underwater.svg'
import WaterStreamSvg from '../assets/images/water-stream.svg'

import BonfireAudio from '../assets/audio/bonfire.mp3'
import CoffeeShopAudio from '../assets/audio/coffee-shop.mp3'
import RainAudio from '../assets/audio/rain.mp3'
import SeasideAudio from '../assets/audio/seaside.mp3'
import SummerNightAudio from '../assets/audio/summer-night.mp3'
import ThunderAudio from '../assets/audio/thunder.mp3'
import TrainAudio from '../assets/audio/train.mp3'
import UnderwaterAudio from '../assets/audio/underwater.mp3'
import WaterStreamAudio from '../assets/audio/water-stream.mp3'
import './AudioList.css'

const AudioList = () => {
	const svgAndAudio = [
		[RainSvg, RainAudio],
		[ThunderSvg, ThunderAudio],
		[BonfireSvg, BonfireAudio],
		[SummerNightSvg, SummerNightAudio],
		[CoffeeShopSvg, CoffeeShopAudio],
		[TrainSvg, TrainAudio],
		[SeasideSvg, SeasideAudio],
		[WaterStreamSvg, WaterStreamAudio],
		[UnderwaterSvg, UnderwaterAudio],
	]

	return (
		<div className="audio-list">
			{svgAndAudio.map((item) => <AudioItem image={item[0]} audio={item[1]} />)}
		</div>
	)
}

export default AudioList