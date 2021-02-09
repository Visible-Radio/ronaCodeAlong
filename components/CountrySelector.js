import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';

export default function CountrySelector() {
    const countries = useStats('https://covid19.mathdro.id/api/countries').stats;
    console.log(countries);
    const [selectedCountry, setSelectedCountry] = useState('Canada');
    if (!countries) return <p>Loading...</p>;
    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select defaultValue ={'Canada'} onChange = {(e) => {
                console.log(e.target.value);
                setSelectedCountry(e.target.value);
                console.log(selectedCountry);
                }}
            >

                {Object.entries(countries.countries).map(([index, object]) => {
                    console.log(index, object);

                    return (
                        <option
                            key = {index}
                            value = {object.name || object.iso2 || object.iso3}
                        >
                            {object.name}
                        </option>
                    )

                })}

            </select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    )
}
