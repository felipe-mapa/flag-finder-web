import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as countriesActions from '../store/actions/countriesAction';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'

import Spinner from '../partials/Spinner'
import ReportButton from '../partials/FlagReport/ReportButton'
import Footer from '../partials/Footer'

const CountryPage = (props) => {
    let flagCapital = null
    let flagYear = null
    let flagContinent = null
    let flagPopulation = null
    let flagHdi = null
    let taggy = null
    let flagMeaning = null
    let flagTags = null
    const [isLoading, setIsLoading] = useState(true)

    // COUNTRY
    const countryName = props.match.params.id

    // SELECTORS
    const selectedCountry = useSelector(state => state.loadedFullCountry.find(c => c.slug === countryName))
    const allTags = useSelector(state => state.loadedTags)
    const allContinents = useSelector(state => state.loadedContinents)
    const dispatch = useDispatch();

    // LOAD COUNTRY
    useEffect(() => {
        loadCountry()
    }, [])
    // LOAD ALL COUNTRY TOGETHER
    const loadCountry = useCallback(async () => {
        try {
            await dispatch(countriesActions.fetchCountry(countryName));
        } catch (err) {
            throw err
        }
        setIsLoading(false)
    }, []);

    let pageContent = <Spinner />
    if (!isLoading) {
        // YEAR
        if (selectedCountry.year !== "0") {
            flagYear = (
                <div>
                    <p><strong>Effective Since:</strong> {selectedCountry.year}</p>
                </div>
            )
        }
        // CAPITAL
        if (selectedCountry.capital.length > 0) {
            flagCapital = (
                <div>
                    <p><strong>Capital:</strong> {selectedCountry.capital}</p>
                </div>
            )
        }
        // POPULATION
        if (selectedCountry.population.length > 0) {
            flagPopulation = (
                <div>
                    <p><strong>Population:</strong> {selectedCountry.population}</p>
                </div>
            )
        }
        // HDI
        if (selectedCountry.hdi.length > 0) {
            flagHdi = (
                <p className="tooltip">
                    <strong>HDI</strong>
                    <span className="tooltip__hover">
                        <FontAwesomeIcon className="tooltip__icon" icon={faQuestionCircle} />
                        <span className="tooltip__text">The Human Development Index is a statistic composite index of life expectancy, education, and per capita income indicators, which are used to rank countries into four tiers of human development.</span>
                    </span>
                    <strong>: </strong>
                    {selectedCountry.hdi}
                </p>
            )
        }
        // CONTINENT
        let conty = ""
        if (selectedCountry.continent.length > 0) {
            conty = allContinents.map(cont => {
                if (selectedCountry.continent.find(c => cont.id === c)) {
                    return cont.name
                } else {
                    return null
                }
            }).filter(el => el != null).join(", ");

            flagContinent = <p><strong>Continent:</strong> {conty}</p>
        }
        // MEANING
        if (selectedCountry.meaning !== '') {
            flagMeaning = (
                <div>
                    <h2>Meaning</h2>
                    <p className="C__p">{selectedCountry.meaning}</p>
                </div>
            )
        }
        // TAGS
        if (selectedCountry.tags.length > 0) {
            taggy = allTags.map(tag => {
                if (selectedCountry.tags.find(t => t === tag.id)) {
                    return tag.slug
                } else {
                    return null
                }
            }).filter(el => el != null);

            const outputTags = taggy.join(", ")
            flagTags = (
                <div>
                    <h2>Tags</h2>
                    <p>{outputTags}</p>
                </div>
            )
        }

        const allFlagColorList = ["blue", "green", "red", "yellow", "black", "white"
            , "purple", "light blue", "maroon", "orange", "brown"]

        const flagColors = taggy.map(tag => {
            if (allFlagColorList.find(c => c === tag)) {
                return tag
            } else {
                return null
            }
        }).filter(el => el != null)
        flagColors.splice(flagColors.length - 1, 0, "and")
        const flagColorsTogether = flagColors.join(" ")

        pageContent = (
            <div>
                <Helmet>
                    <title>Flag Finder App | {selectedCountry.name}</title>
                    <meta name="description" content={selectedCountry.name + " flag: " + selectedCountry.meaning} />
                    <meta name="keywords"
                        content={
                            selectedCountry.name + " flag," +
                            selectedCountry.name + " flag history," +
                            "flag of " + selectedCountry.name + "," +
                            "flags of " + conty + "," +
                            "country flags of " + conty + "," +
                            "country flags in " + conty + "," +
                            conty + " flag," +
                            conty + " flag country," +
                            "flag country " + conty + "," +
                            selectedCountry.name + " flag color," +
                            selectedCountry.name + " flag colour," +
                            selectedCountry.name + " flag colors," +
                            selectedCountry.name + " flag colours," +
                            "image for " + selectedCountry.name + " flag," +
                            selectedCountry.name + " flag images," +
                            selectedCountry.name + " flag age," +
                            selectedCountry.name + " flag meaning," +
                            "meaning of " + selectedCountry.name + " flag," +
                            "country flag,flag country,flag meaning, flag search," +
                            "country flag list, country flag all, all country flags," +
                            "all of country flags, all country flags name," +
                            "all country flags in the world, country flags meaning," +
                            "which country flag is " + flagColorsTogether + "," +
                            "what country flag is " + flagColorsTogether
                        } />
                    <meta name="author" content="Felipe Pavanela" />
                </Helmet>
                <div className="countryPage">
                    <h1 className="countryPage__h1">{selectedCountry.name}</h1>
                    <img className="countryPage__img" src={selectedCountry.flag} alt={selectedCountry.name + " Flag - flagfinder.com"}></img>
                    <div className="countryPage__block">
                        {flagYear}
                        {flagCapital}
                        {flagContinent}
                        {flagPopulation}
                        {flagHdi}
                    </div>
                    <div className="countryPage__block">
                        {flagMeaning}
                    </div>
                    <div className="countryPage__block">
                        {flagTags}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Link to={"/test/"} className="countryPage__back">
            {/* CHANGE <Link to={"/"} className="countryPage__back"> */}
                <h3 className="countryPage__back--h3"
                    style={{ backgroundImage: "linear-gradient(to right, black, blue, black)" }}
                >
                    &larr; Main page
                        </h3>
            </Link>
            {pageContent}
            <ReportButton />
            <Footer isLoaded={!isLoading} />
        </div>
    )
}

export default CountryPage;