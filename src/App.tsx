import React, {useEffect, useState} from 'react';
import BlockCurrency from "./components/BlockCurrency/BlockCurrency";
import {useAppDispatch, useAppSelector} from "./hooks/redux.hooks";
import {getAllCurrencyListThunk} from "./store/slices/currency.slice";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCurrencyListThunk());
    }, [])

    //@ts-ignore
    const {currency_list: {rates}} = useAppSelector(state => state.currencyReducer);

    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('UAH');
    const [priceFrom, setPriceFrom] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);

    const changePriceFrom = (value: number) => {
        const price = value / rates[currencyFrom];
        const result = price * rates[currencyTo];
        setPriceTo(result);
        setPriceFrom(value);
    }

    const changePriceTo = (value: number) => {
        const price = (rates[currencyFrom] / rates[currencyTo]) * value;
        setPriceFrom(price);
        setPriceTo(value);
    }

    return (
        <div>
            <BlockCurrency currency={currencyFrom} changeCurrency={setCurrencyFrom} price={priceFrom}
                           changePrice={changePriceFrom}/>
            <BlockCurrency currency={currencyTo} changeCurrency={setCurrencyTo} price={priceTo}
                           changePrice={changePriceTo}/>
        </div>
    );
};

export default App;