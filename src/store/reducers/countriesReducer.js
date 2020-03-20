import {
    SET_COUNTRIES,
    SET_COUNTRY,
    SET_TAGS,
    SET_CONTINENTS,
    ADD_TAG,
    DEL_TAG
} from '../actions/countriesAction';

const initialState = {
    loadedCountries: [],
    loadedFullCountry: [],
    loadedTags: [],
    loadedContinents: [],
    tagsFilter: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                loadedCountries: state.loadedCountries.concat(action.countries)
            }
        case SET_COUNTRY:
            return {
                ...state,
                loadedFullCountry: state.loadedFullCountry.concat(action.country)
            }
        case SET_TAGS:
            return {
                ...state,
                loadedTags: state.loadedTags.concat(action.tags)
            }
        case SET_CONTINENTS:
            return {
                ...state,
                loadedContinents: state.loadedContinents.concat(action.continents)
            }
        case ADD_TAG:
            return {
                ...state,
                tagsFilter: state.tagsFilter.concat(action.tag)
            }
        case DEL_TAG:
            return {
                ...state,
                tagsFilter: state.tagsFilter.filter(item => item.id !== action.tag.id)
            }
        default:
            return state
    }
}

