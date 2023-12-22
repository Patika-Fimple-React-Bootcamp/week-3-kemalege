import  { Component } from "react";
import Modal from "../../ui/Modal/Modal";
import productCard from "./productCard.module.css";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedProduct: this.props.product
        };
    }

    handleSubmitUpdate = () => {
        const { setProductList, product } = this.props;
        const { updatedProduct } = this.state;
        setProductList(prev => prev.map(item => item.id === product.id ? updatedProduct : item));
        toast.success("Ürün başarıyla güncellendi !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    handleUpdate = (event) => {
        const { updatedProduct } = this.state;
        this.setState({ updatedProduct: { ...updatedProduct, [event.target.id]: event.target.value } });
    };

    handleDelete = () => {
        const { onDelete, product } = this.props;
        onDelete(product.id);
    };

    render() {
        const { updatedProduct } = this.state;
        const { product } = this.props;

        return (
            <div className={productCard['content-wrapper']}>
                <div className={productCard.content}>
                    <img
                        className={productCard.image}
                        src={updatedProduct.image}
                        alt="product"
                    />
                    <p className={productCard.title}>{product.title}</p>
                    <p className={productCard.price}>$ {product.price}</p>
                    <div className={productCard['button-container']}>
                        <Modal product={updatedProduct} handleUpdate={this.handleUpdate} handleSubmitUpdate={this.handleSubmitUpdate} />
                        <button className={productCard.button} onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    setProductList: PropTypes.func.isRequired,
};

export default ProductCard;
