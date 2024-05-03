function getShippingCost(country) {
  let deliveryCity = country;
  let deliveryChina = 100;
  let deliveryChile = 250;
  let deliveryAustralia = 170;
  let deliveryJamaica = 120;
  switch (deliveryCity) {
    case 'China':
      return `Shipping to ${deliveryCity} will cost ${deliveryChina} credits`;
      break;
    case 'Chile':
      return `Shipping to ${deliveryCity} will cost ${deliveryChile} credits`;
      break;
    case 'Australia':
      return `Shipping to ${deliveryCity} will cost ${deliveryAustralia} credits`;
      break;
    case 'Jamaica':
      return `Shipping to ${deliveryCity} will cost ${deliveryJamaica} credits`;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
