import { FaNairaSign } from "react-icons/fa6";
import Image from "next/image";


export default function ProductCard({ src, title, amount }) {
    return (
        <section className="flex flex-col items-center gap-2 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src={`/${src > 5 ? 0 : 0}.jpg`} alt={title} width={300} height={500} className="cursor-pointer hover:scale-110 transition-all"/>
            <h2 className="font-semibold">{title}</h2>
            <p className="flex items-center gap-2">
                <FaNairaSign />
                <span>{amount}</span>
            </p>
        </section>
    )
}