import React from 'react'
import AudioItem from './AudioItem'

import BonfireSvg from '../assets/images/bonfire.svg'
import CicadasSvg from '../assets/images/cicadas.svg'
import CityspaceSvg from '../assets/images/cityspace.svg'
import CoffeeShopSvg from '../assets/images/coffee-shop.svg'
import FireplaceSvg from '../assets/images/fireplace.svg'
import ForestSvg from '../assets/images/forest.svg'
import RainOnTentSvg from '../assets/images/rain-on-tent.svg'
import RainSvg from '../assets/images/rain.svg'
import SeasideSvg from '../assets/images/seaside.svg'
import SummerNightSvg from '../assets/images/summer-night.svg'
import ThunderSvg from '../assets/images/thunder.svg'
import TrainSvg from '../assets/images/train.svg'
import UnderwaterSvg from '../assets/images/underwater.svg'
import WaterStreamSvg from '../assets/images/water-stream.svg'
import WaterfallSvg from '../assets/images/waterfall.svg'
import WindSvg from '../assets/images/wind.svg'

import BonfireAudio from '../assets/audio/bonfire.mp3'
import CicadasAudio from '../assets/audio/cicadas.mp3'
import CityspaceAudio from '../assets/audio/cityspace.mp3'
import CoffeeShopAudio from '../assets/audio/coffee-shop.mp3'
import FireplaceAudio from '../assets/audio/fireplace.mp3'
import ForestAudio from '../assets/audio/forest.mp3'
import RainOnTentAudio from '../assets/audio/rain-on-tent.mp3'
import RainAudio from '../assets/audio/rain.mp3'
import SeasideAudio from '../assets/audio/seaside.mp3'
import SummerNightAudio from '../assets/audio/summer-night.mp3'
import ThunderAudio from '../assets/audio/thunder.mp3'
import TrainAudio from '../assets/audio/train.mp3'
import UnderwaterAudio from '../assets/audio/underwater.mp3'
import WaterStreamAudio from '../assets/audio/water-stream.mp3'
import WaterfallAudio from '../assets/audio/waterfall.mp3'
import WindAudio from '../assets/audio/wind.mp3'
import './AudioList.css'

const AudioList = () => {
	const svgAndAudio = [
		[RainSvg, RainAudio],
		[ThunderSvg, ThunderAudio],
		[WindSvg, WindAudio],
		[ForestSvg, ForestAudio],
		[BonfireSvg, BonfireAudio],
		[SummerNightSvg, SummerNightAudio],
		[CoffeeShopSvg, CoffeeShopAudio],
		[TrainSvg, TrainAudio],
		[SeasideSvg, SeasideAudio],
		[WaterStreamSvg, WaterStreamAudio],
		[UnderwaterSvg, UnderwaterAudio],
		[CicadasSvg, CicadasAudio],
		[CityspaceSvg, CityspaceAudio],
		[FireplaceSvg, FireplaceAudio],
		[RainOnTentSvg, RainOnTentAudio],
		[WaterfallSvg, WaterfallAudio],
	]

	return (
		<div className="audio-list">
			{svgAndAudio.map((item) => <AudioItem image={item[0]} audio={item[1]} />)}
		</div>
	)
}

export default AudioList