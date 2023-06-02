function Products() {
  // For Question Number 4
  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 }
  ];

  return (
    <div>
      <h3>Product Names</h3>
      <ul>
        {products
          .sort((a, b) => a.sales - b.sales)
          .map((product) => (
            <li key={product.name}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default Products;
