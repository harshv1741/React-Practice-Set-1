function Prodcuts2() {
  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 }
  ];

  return (
    <div>
      <ul>
        {products
          .filter((products) => products.sales > products.quantity)
          .map((product) => (
            <li key={product.name}>
              Name: {product.name}, Quantity: {product.quantity}, Sales: {product.sales}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Prodcuts2;
