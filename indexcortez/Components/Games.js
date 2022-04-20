import React from 'react'
import { Dimensions } from 'react-native'



import styled from 'styled-components/native'


const Container = styled.View`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
  
	margin: 0 0 5px 10px;
`
const GameScroll = styled.ScrollView`
	padding-left: 10px;
`

const GamePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
	height: 150px;
  borderRadius: 10px;
`

const GameCard = styled.View`
	padding-right: 9px;
`

const Games = ({ label, item }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<GameScroll horizontal>
				{item.map((Games, item) => {
					return (
						<GameCard key={String(item)}>
							<GamePoster resizeMode='cover' source={Games} />
						</GameCard>
					)
				})}
			</GameScroll>
		</Container>
	)
}

export default Games