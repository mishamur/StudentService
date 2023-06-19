import React from 'react'
import styled from 'styled-components'

export const Footer = () =>{
    return(
        <View>
        <P>©️2023</P>
       </View>
    )
}

const View = styled.div`
display: flex;
flex-direction: row;
padding: 0px;
width: 100%;
height: 0px;
margin-top: 140px ;
`

const P = styled.p`
margin: 0 auto;
`