import React from 'react'
import './Header.css'
import GithubLogo from '../assets/images/github.png'

const Header = () => {
	return (
		<div className="header">
			<div>
				<a href="" className="header__logo">Noisli</a>
			</div>
			<div>
				<a className="header__author" href="https://github.com/dancmdn" target="_blank">
					<img src={GithubLogo} alt="GitHub" />
					<p>dancmdn</p>
				</a>
			</div>
		</div>
	)
}

export default Header