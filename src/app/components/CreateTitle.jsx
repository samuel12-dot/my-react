export default function CreateTitle({ title, color, tc }){
    return (
        <h2 className={`${tc} uppercase text-3xl text-center py-8 border-b-8 ${color}`}>{title}</h2>
    )
}