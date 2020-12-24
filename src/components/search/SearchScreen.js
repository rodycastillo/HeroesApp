import React,{useMemo} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import {getHeroesByName} from '../../selectors/getHeroesByName';
import { useForm } from '../../hooks/useForm.js';
import { HeroCard } from '../heroes/HeroCard.js';
// import { heroes } from '../../data/heroes';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange]= useForm({
        searchText: q
    });

    const {searchText} = formValues

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    // const heroesFiltered = getHeroesByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
           

            <div className="row">
                <div className="col-5">
                    <h1>Search Screen</h1>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            autoComplete="off"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value= {searchText}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Results</h3>
                    <hr/>

                    {
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Busque un heroe.
                        </div>
                    }
                     {
                        (q!==''&& heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No existe el heroe "{q}"
                        </div>
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                className="animate__animated animate__fadeInRight"
                                key= {hero.id}
                                    {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
