"use client"

import { useContext } from "react"
import { SidebarContext } from "../providers"
import { ImCancelCircle } from "react-icons/im";




export default function Cart() {

    const { showCart, setShowCart, addItem } = useContext(SidebarContext)

    function handleCartClosing() {
        setShowCart(false)
    }

    return (
        <>
            {showCart &&
                <div className="md:block hidden w-4/5 h-128 m-auto absolute inset-x-0 bg-slate-200 rounded-md">

                    <div className="flex justify-end px-16 items-center py-8 text-lg">
                        <ImCancelCircle className="cursor-pointer" onClick={handleCartClosing} />
                    </div>

                    {
                        addItem.length == 0
                            ?
                            <div>
                                <h1>Cart is empty, add an item to view cart</h1>
                            </div>
                            :
                            <table>
                                <thead>
                                    <tr>
                                        <th>product</th>
                                        <th>amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addItem.map((item, index) => (

                                        <tr key={index}>
                                            <td>{item.title}</td>
                                            <td>{item.amount}</td>
                                        </tr>

                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>total amount</td>
                                    </tr>
                                </tfoot>
                            </table>
                    }

                    <div>{addItem[0].title}</div>

                </div>
            }
        </>
    )
}