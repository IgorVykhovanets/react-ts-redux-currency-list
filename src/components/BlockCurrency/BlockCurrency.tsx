import React, {FC} from 'react';

import './block.currency.modules.css'

const BlockCurrency: FC<{ currency: string, changeCurrency: any; price: number; changePrice: any }> = ({
                                                                                                           currency,
                                                                                                           changeCurrency,
                                                                                                           price,
                                                                                                           changePrice
                                                                                                       }) => {


    const currencyList = ['UAH', 'USD', 'EUR'];

    return (
        <div>
            {currencyList.map(cur => (
                <ul>
                    <li onClick={() => changeCurrency(cur)} className={currency === cur ? 'active' : ''}>{cur}</li>
                </ul>
            ))}
            <input type="text" value={price} onChange={e => changePrice(e.target.value)}/>
        </div>
    );
};

export default BlockCurrency;