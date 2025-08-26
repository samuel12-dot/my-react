import React from 'react'
import { products } from '@/app/data'
import Image from 'next/image'
import { DiAndroid } from "react-icons/di";
import ProductCard from '@/app/components/ProductCard';


export default async function ProductDetailsPage({ params }) {


    const { slug } = await params

    const productInfo = products.find(product => product.name.toLowerCase().replace(/\s+/g), '-' === slug)

    const src = productInfo.image.slice(-1)

    const relatedProducts = products.filter(product => (product.category === productInfo.category || product.dealer === productInfo.dealer) && product.name !== productInfo.name)

    return (
        <div className='max-w-4xl mx-auto p-4 flex flex-wrap gap-4'>
            <section className='flex flex-col gap-y-5'>
                <h1 className='bg-slate-950 text-white py-5 px-4 text-4xl'>{productInfo.name}</h1>
                <p>{productInfo.productDetails}</p>


                <h2 className='bg-slate-950 text-green-500 py-5 px-4 text-2xl'>Product Category: {productInfo.category}</h2>

                <h2 className='bg-slate-950 text-green-500 py-5 px-4 text-2xl'>Product Amount: {productInfo.amount}</h2>

                <h2 className='bg-slate-950 text-green-500 py-5 px-4 text-2xl'>Product Dealer: {productInfo.dealer}</h2>


                <ul>
                    {productInfo.productDescription.map((desc, index) => {
                        return (
                            <li key={index} className='flex items-center gap-2'>
                                <DiAndroid className='inline text-green-500'/>
                                <span>{desc}</span>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <figure>
                <Image src={`/${src > 5 ? 0 : src}.jpg`} alt={productInfo.image} height={300} width={300} />
                <figcaption>{productInfo.name}</figcaption>
            </figure>

            <section>
                <h2>Related Products</h2>

                <div className='flex flex-wrap justify-center gap-4 p-4 max-w-4/5 mx-auto'>
                    {relatedProducts.map((product) => {
                        return (
                            <ProductCard src={product.image.slice(-1)} title={product.name} amount={product.amount} key={product.id}/>
                        )
                    }).sort(() => Math.random() - 0.5).slice(0, 3)}
                </div>
            </section>
        </div>
    )
}
