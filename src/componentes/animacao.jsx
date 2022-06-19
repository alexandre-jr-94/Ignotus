
import styled, { keyframes } from 'styled-components'


const Animacao = () => {

    return <Palavra className='Teste'>Ignotus</Palavra>


}


const anima = keyframes`
0%  { opacity: 0; transform: translateY( -100% ) skewY(10deg) skewX(10deg); filter: blur(1px) }
25%  { opacity: 1; transform: translateY( 0 ); filter: blur(0px) }
75%  { opacity: 1; transform: translateY( 0 )  }
100% { opacity: 1; transform: translateY( 0 ) }
`

const Palavra = styled.h1`
animation: ${anima};
animation-duration: 8s;
animation-fill-mode: forwards;
animation-iteration-count: 1;
`




export default Animacao