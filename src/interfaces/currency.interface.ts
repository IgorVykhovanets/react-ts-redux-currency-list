export interface ICurrency {
    "base": string;
    "rates": {
        "USD": number;
        "EUR": number;
        "UAH": number;
    },
    "source": string;
    "localISODate": string;
    "putISODate": string;
}