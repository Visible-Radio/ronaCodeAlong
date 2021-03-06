import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const StatBlock = styled.div`
    background: #b2b2b2;
    font-size: 2rem;
    padding: 2rem;
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
`;

export default function Stats({ url }) {
    const {stats, loading, error} = useStats(url);
    if (!stats) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR...</p>;
    return (
        <StatGrid>
            <StatBlock>
                <h3>Confirmed:</h3>
                <span>{stats.confirmed.value}</span>
            </StatBlock>
            <StatBlock>
                <h3>Deaths:</h3>
                <span>{stats.deaths.value}</span>
            </StatBlock>
            <StatBlock>
                <h3>Recovered:</h3>
                <span>{stats.recovered.value}</span>
            </StatBlock>
        </StatGrid>
    )
}
