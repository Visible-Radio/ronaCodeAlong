import Stats from '../components/Stats.js';
import CountrySelector from '../components/CountrySelector.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: rgb(100,100,100);
    }
`;


export default function IndexPage() {
    return <div>
        <GlobalStyle />
        <Stats url={"https://covid19.mathdro.id/api"}></Stats>
        <CountrySelector></CountrySelector>
    </div>;
}