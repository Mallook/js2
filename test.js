function convertCurrency(event) {
    event.preventDefault();

    const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      const currencySelect = document.getElementById('exchange');
      const selectedCurrency = currencySelect.value;


      const usdRate = 0.29;  
      const dinarRate = 0.21;  

       
      let result;
      switch (selectedCurrency) {
        case 'usd':
          result = amount * usdRate;
          break;
        case 'dinar':
          result = amount * dinarRate;
          break;
        case 'nis':
          result = amount;
          break;
        default:
          result = 'Invalid selection';
      }

      const resultParagraph = document.getElementById('result');
      resultParagraph.textContent = `Equivalent value: ${result.toFixed(2)} ${selectedCurrency.toUpperCase()}`;
    }