import { getDataFromLocalStorage } from '../utils/helperFunctions';

var selected = {
  search: '',
  dropdown: ''
}

const getDataByFilters = () => {

  const filterByCountry =  getDataFromLocalStorage().filter((country) =>
          country.name.toUpperCase().includes(selected.search.toUpperCase())
  );
  
  return filterByCountry.filter((country) => {
        return country.region.toUpperCase().includes(selected.dropdown.toUpperCase());
  });
};

export const countryReducer = (state, action) => {
  const { name, type, region } = action;
  switch (action.type) {
    case 'SEARCH_COUNTRY':
      if (name.trim() === '') {
        return;
      }
      try {
        selected.search = name.toUpperCase(); 
        return getDataByFilters();
      } catch (error) {
        throw new Error(`SEARCH_COUNTRY Action Failed - ${error}`);
      }

    case 'FILTER_COUNTRY':
      if (region === 'All') {
        return getDataFromLocalStorage();
      }
      selected.dropdown = region.toUpperCase(); 
      return getDataFromLocalStorage().filter((country) => {
        return country.region.toUpperCase().includes(region.toUpperCase());
      });
    default:
      throw new Error(`Wrong action type provided to countryReducer: ${type}`);
  }
};
