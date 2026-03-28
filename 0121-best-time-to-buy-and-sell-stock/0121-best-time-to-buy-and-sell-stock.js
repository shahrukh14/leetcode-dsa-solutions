/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        // update minimum buying price
        if (price < minPrice) {
            minPrice = price;
        }

        // calculate profit if sold today
        let profit = price - minPrice;

        // update max profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}