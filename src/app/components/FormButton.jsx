export default function FormButton({data, color}){
    return (
        <button type="submit" className={`w-3/5 p-6 ${color} text-white rounded-md transition duration-300 cursor-pointer`}>
            {data}
        </button>
    )
}