const products =[
    {tittle: "cabbage", isFruit: false, id: 1},
    {tittle: "Garlic", isFruit: false, id:2},
    {tittle: "Apple", isFruit: false, id:3},
]; 
export default function ShoppingList() {
    const listItems = products.map(product =>
        <li 
        key={product.id}
        style={{
            color: product.isFruit? "magenta": "darkgreen"
        }}
        >
            {product.tittle}
        </li> 
        );
        return(
            <ul>{listItems}</ul>
        );
}