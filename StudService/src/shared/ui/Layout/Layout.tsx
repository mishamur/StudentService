import styled from 'styled-components'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  return (
    <View>
      <Content>{children}</Content>
    </View>
  )
}

const View = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52)),
    linear-gradient(105.09deg, #28a745 7.28%, #5cc467 39.97%, #007bff 75.76%, #4d9dff 96.69%);
`

const Content = styled.div`
  padding: 16px;
`
