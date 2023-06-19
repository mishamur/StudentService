import styled from 'styled-components'

export const Header = () => {
  return (
    <View>
      <H1>ProjectName</H1>
      <Button href="#">Войти</Button>
    </View>
  )
}

const View = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.a`
  text-decoration: none;
  width: 103px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(90deg, #1992d4 0%, #0d6faa 53.13%, #035388 100%);
  border-radius: 40px;
  color: #f0f4f8;
  border: none;
  transition: all 250ms ease;

  &:hover {
    background: none;
    border: 2px solid #035388;
    color: #0d6faa;
  }
`
const H1 = styled.h1`
  margin-left: 140px;
`