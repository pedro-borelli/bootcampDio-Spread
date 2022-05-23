import React from 'react'
import * as S from "./styles";
import {ReactComponent as Square1} from "../../images/square1.svg";
import {ReactComponent as Square2} from "../../images/square2.svg";
import {ReactComponent as Square3} from "../../images/square3.svg";
import {ReactComponent as Square4} from "../../images/square4.svg";
import {ReactComponent as Square5} from "../../images/square5.svg";
import {ReactComponent as Square6} from "../../images/square6.svg";
import {ReactComponent as Square7} from "../../images/square7.svg";
import {ReactComponent as Square8} from "../../images/square8.svg";

function Squares() {
    return (
        <S.Squares>

            <Square1 className="square square1"/>
            <Square2 className="square square2"/>
            <Square3 className="square square3"/>
            <Square4 className="square square4"/>
            
            <Square5 className="square square5"/>
            <Square6 className="square square6"/>
            <Square7 className="square square7"/>
            <Square8 className="square square8"/>

            {/* <img src="/images/square9.svg" className="square square9" alt="quadrado flutuante"/>
            <img src="/images/square10.svg"className="square square10"  alt="quadrado flutuante"/>  */}
        </S.Squares>
    )
}

export default Squares
