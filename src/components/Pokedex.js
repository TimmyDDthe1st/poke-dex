import { Box, styled } from '@mui/system';
import { ReactComponent as PokedexSide } from '../images/pokedex-side.svg';
import Home from './Home';

const Root = styled(Box)`
  background: #000;
  height: calc(100% - 1em);
  padding: 0.5em;
  svg {
    width: 100%;
    height: auto;
  }
`;

const Glass = styled(Box)`
  background: #47d0f9;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 16px;
  overflow-y: scroll;
`;

const PokedexTop = styled(Box)`
  position: absolute;
  width: calc(100% - 1em);
  height: auto;
`;

const Content = styled(Box)`
  border-radius: 16px;
  display: flex;
  align-items: center;
`;

const PokedexBottom = styled(Box)`
  transform: scale(1, -1);
  display: flex;
  flex-direction: column;
  flex: 1;
  position: absolute;
  width: calc(100% - 1em);
  height: auto;
  bottom: 0;
`;

export default function Pokedex() {
  return (
    <Root>
      <Glass>
        <PokedexTop>
          <PokedexSide />
        </PokedexTop>
        <Content>
          <Home />
        </Content>
        <PokedexBottom>
          <PokedexSide />
        </PokedexBottom>
      </Glass>
    </Root>
  );
}
