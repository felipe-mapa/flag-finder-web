import React, { useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as countriesActions from './store/actions/countriesAction';
import {isMobile} from 'react-device-detect';

import SearchContainer from './routes/SearchContainer'
import CountryPage from './routes/CountryPage'
import DownloadAndroid from './partials/DownloadApp'

const App = () => {

  // DISPATCH
  const dispatch = useDispatch();

  // LOAD COUNTRIES
  useEffect(() => {
    loadCountries()
  }, [])
  // LOAD ALL COUNTRIES TOGETHER
  const loadCountries = useCallback(async () => {
    try {
      await dispatch(countriesActions.fetchCountries());
    } catch (err) {
      throw err
    }
  }, []);

  // LOAD TAGS
  useEffect(() => {
    loadTags()
  }, [])
  const loadTags = useCallback(async () => {
    try {
      await dispatch(countriesActions.fetchTags());
    } catch (err) {
      throw err
    }
  }, [dispatch]);

  // LOAD CONTINENTS
  useEffect(() => {
    loadContinents()
  }, [])
  const loadContinents = useCallback(async () => {
    try {
      await dispatch(countriesActions.fetchContinents());
    } catch (err) {
      throw err
    }
  }, [dispatch]);

  return (
    <div>
        {
          isMobile ? 
          <DownloadAndroid />
          : null
        }
      <BrowserRouter>
        <Route path="/test/" exact component={SearchContainer} />
        <Route path="/test/country/:id" exact component={CountryPage} />
        {/* <Route path="/" exact component={SearchContainer} />
        <Route path="/country/:id" exact component={CountryPage} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;