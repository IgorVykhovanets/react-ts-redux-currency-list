import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICurrency} from "../../interfaces/currency.interface";
import {currencyService} from "../../services/currency.service";

export const getAllCurrencyListThunk = createAsyncThunk(
    'currencySlice/getAllCurrencyListThunk',
    async (_,{dispatch}) => {
        const {data} = await currencyService.getAll();
        dispatch(getAllCurrency(data));
    }
)

interface IState {
    currency_list: {} | ICurrency;
}

const initialState : IState ={
    currency_list: {},
}

const currencySlice = createSlice({
    name: 'currencySlice',
    initialState,
    reducers: {
        getAllCurrency: (state, action: PayloadAction<ICurrency>) => {
            state.currency_list = action.payload;
        }
    }
});

export const currencyReducer = currencySlice.reducer;

export const {getAllCurrency} = currencySlice.actions;
