import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import Spinner from './Spinner'
import Footer from '../partials/Footer'

const Countries = () => {
    const [filteredCountries, setFilteredCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true) 
    const [titleHeading, setTitleHeading] = useState("Loading")

    const countries = useSelector(state => state.loadedCountries);
    const tags = useSelector(state => state.tagsFilter);

    // FILTER COUNTRIES
    useEffect(() => {
        if (tags.length > 0) {
            setFilteredCountries(
                countries.map(country => {
                    if (tags.every(tag => country.tags.indexOf(tag.id) > -1)) {
                        return country
                    } else {
                        return null
                    }
                }).filter(el => el != null)
            )
        } else {
            setFilteredCountries(countries)
        }
    }, [countries, tags])

    useEffect(() => {
        if (filteredCountries.length > 0) {
            setIsLoading(false)
        }
    }, [filteredCountries])

    //PRINT FLAGS
    const printList = filteredCountries.map(country => {
        return (
            <CSSTransition
                key={country.id}
                classNames="countries__country--animation"
                timeout={{
                    enter: 500,
                    exit: 300
                }}
            >
                <li className="countries__country">
                    {/* CHANGE <Link to={"/country/" + country.slug}> */}
                    <Link to={"/test/country/" + country.slug}>
                        <img src={country.flag} alt={country.name + " Flag"} />
                        <p id="fit">{country.name}</p>
                    </Link>
                </li>
            </CSSTransition>
        )
    }).concat(
        <CSSTransition key="blank1" timeout={100}><li className="countries__country countries__blank"></li></CSSTransition>,
        <CSSTransition key="blank2" timeout={100}><li className="countries__country countries__blank"></li></CSSTransition>,
        <CSSTransition key="blank3" timeout={100}><li className="countries__country countries__blank"></li></CSSTransition>,
        <CSSTransition key="blank4" timeout={100}><li className="countries__country countries__blank"></li></CSSTransition>,
        <CSSTransition key="blank5" timeout={100}><li className="countries__country countries__blank"></li></CSSTransition>
    )

    //Change Header
    useEffect(() => {
        if (!isLoading) {
            if (filteredCountries.length === 1) {
                setTitleHeading("Flag Found")
            } else {
                if (tags.length <= 0) {
                    setTitleHeading("All Flags")
                } else {
                    setTitleHeading("Filtered Flags")
                }
            }
        } else {
            setTitleHeading("Loading")
        }
    }, [filteredCountries, isLoading])


    //Output
    let output
    if (filteredCountries.length > 0) {
        if (filteredCountries.length === 1) {
            filteredCountries.map(country =>
                output = (
                    <Link to={"/test/country/" + country.slug}>
                    {/* CHANGE <Link to={"/country/" + country.slug}> */}
                        <div className="countries__unique">
                            <img className="countries__unique--img" src={country.flag} alt={country.name + " Flag - flagfinder.com"} />
                            <p><strong>{country.name}</strong></p>
                        </div>
                    </Link>
                )
            )
        } else {
            output = (
                <TransitionGroup
                    className="countries__container"
                    component="ul">
                    {printList}
                </TransitionGroup>
            )
        }
    } else {
        if (isLoading) {
            output = <Spinner />
        } else {
            output = (
                <div className="countries__container">
                    <p className="countries__empty">Sorry but there is no country matching these characteristics :(</p>
                </div>)
        }
    }

    return (
        <div className="countries">
            <div className="countries__heading">
                <h1 className="MainHeader">{titleHeading}</h1>
            </div>
            {output}
            <Footer isLoaded={!isLoading} />
        </div>
    );
}

export default Countries;