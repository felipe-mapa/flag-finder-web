import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as countriesActions from '../../store/actions/countriesAction';
import { Helmet } from 'react-helmet'

import InputTag from '../../components/InputTag/InputTag'
import ListTags from '../../components/TagList/TagList'
import Countries from '../Countries/Countries'
import ReportButton from '../../components/ReportButton/ReportButton'

import FlagFinderHeader from '../../assets/images/flagFinder.png'

const SearchComponent = () => {
    const [newTag, setNewTag] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isTextValid, setIsTextValid] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const countries = useSelector(state => state.loadedCountries);
    const dataTags = useSelector(state => state.loadedTags);
    const tagsFilter = useSelector(state => state.tagsFilter).map(c => c)
    const dataCountriesName = useSelector(state => state.loadedCountries).map(c => c.name)
    const dataContinentsName = useSelector(state => state.loadedContinents).map(c => c.name)
    const dispatch = useDispatch();

    // REMOVE TAG
    const removeTag = id => {
        delTagHandler(id)
    }

    // ADD TAG
    const addTagHandler = useCallback((id, name) => {
        dispatch(countriesActions.addTag(id, name))
    }, [dispatch])

    // DELETE TAG
    const delTagHandler = useCallback((id) => {
        dispatch(countriesActions.delTag(id))
    }, [dispatch])

    // CHANGE TAG NAME
    const changeHandler = event => {
        setNewTag(event.target.value)
    }

    useEffect(() => {
        if (countries.length > 0) {
            setIsLoaded(true)
        }
    }, [countries])

    // TEXT VALIDATION
    useEffect(() => {
        if (isSubmitted) {
            let validation = true
            let message = ''
            if (newTag.length > 0) {
                // Check if contains signs
                if (!newTag.match("^[a-zA-Z ]+$")) {
                    validation = false
                    message = 'Search using letters only'
                } else {
                    // Check if it's longer than (2)
                    if (newTag.length < 3) {
                        validation = false
                        message = 'Must be more than 2 letters'
                    } else {
                        // Capitalize input
                        let capitalizedTag = capitalize(newTag).trim()

                        // Check if already added
                        if (tagsFilter.find(t => t.name === capitalizedTag)) {
                            validation = false
                            message = 'Characteristic already added'
                        } else {
                            // Check if is in database
                            if (dataTags.find(t => t.name === capitalizedTag)) {
                                validation = true
                                message = ''
                            } else {
                                // Check if is a continent name
                                if (dataContinentsName.find(t => t === capitalizedTag)) {
                                    validation = true
                                    message = ''
                                } else {
                                    // Check if is a country name
                                    if (dataCountriesName.find(t => t === capitalizedTag)) {
                                        validation = true
                                        message = ''
                                    } else {
                                        validation = false
                                        message = 'Characteristic not found on our database'
                                    }
                                }
                            }
                        }
                    }
                }
                if (validation) {
                    submitHandler(validation)
                    setErrorMessage(message)
                    setIsTextValid(validation)
                    setIsSubmitted(false)
                } else {
                    setIsTextValid(validation)
                    setErrorMessage(message)
                    setIsSubmitted(false)
                }
            } else {
                setIsTextValid(validation)
                setErrorMessage(message)
                setIsSubmitted(false)
            }
        }
    }, [newTag, isSubmitted])


    // ADD TAG TO ARRAY
    const submitHandler = (isTextValid) => {
        if (isTextValid && newTag.length > 0) {
            // Add to Array 
            let capitalizedTag = capitalize(newTag).trim()
            let tagId = dataTags.filter(t => t.name === capitalizedTag)
            let mainId = dataTags.find(t => t.name === capitalizedTag) ? tagId[0].id : capitalizedTag

            // setTagsList([...tagsList, { tag: capitalizedTag, id: mainId }])
            addTagHandler(mainId, capitalizedTag)
            setNewTag('')
        }
    }

    const capitalize = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    return (
        <div>
            <Helmet>
                <title>Flag Finder App</title>
                <meta name="description" content="" />
                <meta name="keywords"
                    content={
                        "country flag,flag country,flag meaning, flag search," +
                        "country flag list, country flag all, all country flags," +
                        "all of country flags, all country flags name," +
                        "all country flags in the world, country flags meaning"
                    } />
                <meta name="author" content="Felipe Pavanela" />
            </Helmet>
            <div className="App">
                <div className="App__header">
                    <div className="searchContainer">
                        <img className="searchContainer__img" src={FlagFinderHeader} alt="FlagFinderHeader" />
                        <InputTag
                            submitted={(e) => {
                                e.preventDefault()
                                setIsSubmitted(true)
                            }
                            }
                            changed={changeHandler}
                            value={newTag}
                            isTextValid={isTextValid}
                            isLoaded={isLoaded}
                            message={errorMessage}
                        />
                        <ListTags tags={tagsFilter} removeTag={id => removeTag(id)} />
                    </div>
                    {/* <AdSense.Google
                        client='pub-7939975839235598'
                        slot='7806394673'
                        style={{ width: 500, height: 300, float: 'left' }}
                        format=''
                    /> */}
                    <Countries tags={tagsFilter} countries={countries} />
                </div>
            </div>
            <ReportButton />
        </div>
    );
}

export default SearchComponent;