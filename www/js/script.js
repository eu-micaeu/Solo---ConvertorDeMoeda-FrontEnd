const conversionRates = {
    USD: 1,
    EUR: 1.19,
    BRL: 5
  };
  
  const convert = () => {
    const amount = document.querySelector("#amount").value;
    const from = document.querySelector("#from").value;
    const to = document.querySelector("#to").value;
  
    const convertedAmount = amount * conversionRates[to] / conversionRates[from];
    document.querySelector("#convertedAmount").innerHTML = convertedAmount.toFixed(2);
  };
  
  document.querySelector("#convert").addEventListener("click", convert);