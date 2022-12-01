const coinsList = document.getElementById('coins-list');

const createNewLi = (name, symbol, value) => {
  const li = document.createElement('li');
  li.innerText = `${name} (${symbol}): ${Number(value).toFixed(2)}`;
  coinsList.appendChild(li);
};

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const request = await fetch(url);
  const json = await request.json();
  const { data } = json;
  return data.slice(0, 10);
};

const fillCoinsList = async () => {
  const data = await fetchCoins();
  coinsList.innerHTML = '';
  data.forEach((coin) => {
    const { name, symbol, priceUsd } = coin;
    createNewLi(name, symbol, priceUsd);
  });
};

window.onload = async () => {
  await fillCoinsList();
};