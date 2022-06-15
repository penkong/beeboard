import { Link } from 'react-router-dom'

// ---

import { ContainerStyle, MainRowStyle, NavRowStyle } from '../Home/Home.styled'

// ---

export const About = () => {
  return (
    <ContainerStyle>
			<NavRowStyle>
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
			</NavRowStyle>
			<MainRowStyle>
        <div style={{ marginLeft: '3rem'}}>
        <h1 >Developed By Mazdak - consideration</h1>
        <p>please kindly consider the developer has specific time in a day to work on this kind of project </p>
        <p>for tech people code approach is clear </p>
        <p>all perfections are possible in future</p>
        <p>PRN is almost deprecated tech flow and refiner developed by the developer</p>
        <p>of course with bigger set of data it need to be refined</p>
        <p>the goal was just to communicate about abilities</p>
        <p>code is in typescript and readable</p>
        <p>glad to hear from you . cheers ! </p>

        </div>
			</MainRowStyle>
		</ContainerStyle>
  )
}


