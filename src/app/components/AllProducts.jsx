import { products } from "../data"
import ProductCard from "./ProductCard"

export default function AllProducts(){

    const productCards = products.sort(() => Math.random() - 0.5).map((product) => (
        <ProductCard key={product.id} src={product.image.slice(-1)} title={product.name} amount={product.amount}/>
    ))
    
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 max-w-4/5 mx-auto">{productCards}</div>
    )
}