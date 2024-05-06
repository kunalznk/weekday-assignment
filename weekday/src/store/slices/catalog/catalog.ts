import { createSlice } from '@reduxjs/toolkit'

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
      filters: {},
      jobs: []
    },
    reducers: {
      setFilter: (state, action) => {
        // on filter dont call api 
        // just want to fiter out local state using filter
        /*
        
        */
        return {
          ...state,
          filters: action.payload
        }
      },
      fetchJobs: () => {
        // api call with limit and offset to implement infinite scroll
      },

    }
})

export default catalogSlice