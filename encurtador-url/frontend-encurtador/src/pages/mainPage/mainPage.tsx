import React from 'react'
import Input from '../../components/inputCampo'
import Squares from '../../components/Squares/squares';
import Title from '../../components/Title'
import GlobalStyle from '../../global'
import * as S from "./style";

function MainPage() {
    return (
        <>
            <GlobalStyle />
			<S.Main>
				<Title />
				<Input/>
				<Squares/>
			</S.Main>
        </>
    )
}

export default MainPage
