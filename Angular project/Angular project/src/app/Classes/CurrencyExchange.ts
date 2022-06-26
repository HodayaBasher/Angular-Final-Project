// {
//     "date": "2018-02-22",
//     "historical": true,
//     "info": {
//       "quote": 0.71681,
//       "timestamp": 1519343999
//     },
//     "query": {
//       "amount": 30,
//       "from": "USD",
//       "to": "GBP"
//     },
//     "result": 21.5043,
//     "success": true
//   }

//מחלקה במבנה החוזר משרת חיצוני
//מחלקת המרת מטבע
export class CurrencyExchange {
    constructor(
        public date?: string,
        public historical?: boolean,
        public info?: { quote?: number, timestamp?: number },
        public query?: { amount?: number, from?: string, to?: string },
        public result?: number,
        public success?: boolean
    ) { }
}