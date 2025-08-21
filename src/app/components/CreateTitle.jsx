export default function CreateTitle({ title, color }){
    return (
        <h2 className={`uppercase text-3xl text-center py-8 border-b-8 ${color}`}>{title}</h2>
    )
}