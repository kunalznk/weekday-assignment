import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  type JobDetails from './types/job';
import axios from 'axios';

interface CatalogState {
  filters: {
    roles?: string[];
    numberOfEmployees?: number[];
    experience?: number[];
    techStack?: string[];
    minBasePay?: number[];
    companyName?: string;
  };
  pageNumber: number;
  pageSize: number;
  allJobs: JobDetails[]; 
  filteredJobs: JobDetails[]; 
  isLoading: boolean;
  error?: string
}

const initialState: CatalogState = {
  filters: {},
  allJobs: [],
  pageNumber: 0,
  pageSize:10,
  filteredJobs: [],
  isLoading: false
};

export const fetchJobs = createAsyncThunk(
  'catalog/fetchJobs',
  async (body, { dispatch }) => {
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', body);
      const jobs: JobDetails[] = response.data;
      dispatch(setJobs(jobs));
    } catch (error) {
      dispatch(setError("Error while getting the jobs"))
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<CatalogState['filters']>) => {
      // Update filters
      state.filters = action.payload;
      state.filteredJobs = state.allJobs.filter(job => {
        const companyName = state.filters.companyName;
        return !companyName || job.companyName === companyName;
      });
    },
    setJobs: (state, action: PayloadAction<JobDetails[]>) => {
      state.allJobs = action.payload;
      state.filteredJobs = action.payload;
    },
    setNextPage:(state) => {
      return {
        ...state,
        pageNumber: state.pageNumber+1
      }
    },
    setError(state, action) {
      return {
        ...state,
        error: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allJobs = action.payload;
        state.filteredJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { setFilter, setJobs, setError } = catalogSlice.actions;

export default catalogSlice