import React, { useState } from 'react'
import { products } from '../data/products'

function ProductsTable() {

    const [productList, setproductList] = useState(products)
    const [isSorted, setisSorted] = useState(false)
    const [tax, settax] = useState(20)


    const sortByUnitPrice = () => {
        //State referans tipli datalarda yeni bir referans almazsa ASLA DEĞİŞMEZ

        if (isSorted == false) {
            let sortedProducts = productList.sort((a, b) => a.unitPrice - b.unitPrice)
            setproductList([...sortedProducts])
            setisSorted(true)
        }
        else {
            // let sortedProducts = productList.sort((b, a) => a.unitPrice - b.unitPrice)
            let sortedProducts = productList.reverse()
            setproductList([...sortedProducts])
            setisSorted(false)
        }





    }

    const filter1 = () => {
        let filteredProducts = products.filter(q => q.unitPrice < 30)
        setproductList(filteredProducts)
    }

    const filter2 = () => {
        let filteredProducts = products.filter(q => q.unitPrice > 30 && q.unitPrice < 100)
        setproductList(filteredProducts)
    }

    const filter3 = () => {
        let filteredProducts = products.filter(q => q.unitPrice > 100)
        setproductList(filteredProducts)
    }

    const refresh = () => {
        setproductList(products)
    }

    const taxChange1 = () => {
        settax(10)
    }
    const taxChange2 = () => {
        settax(20)
    }

    return (<>
        <h1>Length: {productList.length}</h1>
        <div>
            <button onClick={() => filter1()}>0-30 $</button>
            <button onClick={() => filter2()}>30$ - 100$</button>
            <button onClick={() => filter3()}>100$ +</button>
            <button onClick={() => refresh()}>Refresh</button>
            <button onClick={() => taxChange1()}>Tax - %10</button>
            <button onClick={() => taxChange2()}>Tax - %20</button>


        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={() => sortByUnitPrice()}>Unit Price</th>
                    <th>Stock</th>
                    <th>Tax Price %{tax}</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((item) => {

                        let bgColor = ""

                        if (item.unitsInStock == 0)
                            bgColor = "tomato"

                        return <tr style={{ backgroundColor: bgColor }}>
                            <td>{item.id}</td>
                            <td>{item.name?.toUpperCase()}</td>
                            <td>{item.unitPrice?.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>
                            <td>
                                {(item.unitPrice * (tax / 100)).toFixed(2)}
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductsTable

//Stokta olmayan ürünlerin SATIRININ arkaplan rengini kırmızı yha