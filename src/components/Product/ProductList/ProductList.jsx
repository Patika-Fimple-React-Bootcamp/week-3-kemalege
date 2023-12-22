import { useEffect } from "react"
import useProducts from "../../../api/getProducts"
import ProductCard from "../ProductCard/ProductCard"
import { toast } from "react-toastify";

const ProductList = () => {

    const { loading, getProducts, productList, setProductList } = useProducts()
    
    useEffect(() => {
        getProducts()
    }, [])

    const handleDeleteProduct = (productId) => {
        const updatedProductList = productList.filter(product => product.id !== productId);
        setProductList(updatedProductList);
        toast.success("Ürün başarıyla silindi !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    return (
        !loading && productList ? (
            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gridGap: "2rem", margin: "2rem" }}>
                {productList?.map((product) => (
                    <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct} setProductList={setProductList} />
                ))}
            </section>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default ProductList