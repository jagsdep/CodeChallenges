

         const best = prices => {
            let buyingPrice = prices[0];
            let profits = [];
            for (let i = 0; i < prices.length; i++) {
                if (prices[i] < buyingPrice) {
                    buyingPrice = prices[i]
                }
                profits.push(prices[i] - buyingPrice)
            }
            return Math.max(...profits);
        }

        console.log(best([1, 100]))
       

