import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import modal from "./modal.module.css";
import PropTypes from 'prop-types';

const Modal = ({product, handleUpdate, handleSubmitUpdate}) => {

    const {title, price, description, category} = product;

    return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className={`${modal.Button} ${modal.violet}`}>Edit</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={modal.DialogOverlay} />
            <Dialog.Content className={modal.DialogContent}>
                <Dialog.Title className={modal.DialogTitle}>Edit Product</Dialog.Title>
                <Dialog.Description className={modal.DialogDescription}>
                    Edit product information
                </Dialog.Description>
                <fieldset className={modal.Fieldset}>
                    <label className={modal.Label} htmlFor="title">
                        Title
                    </label>
                    <input className={modal.Input} id="title" value={title} onChange={handleUpdate} />
                </fieldset>
                <fieldset className={modal.Fieldset}>
                    <label className={modal.Label} htmlFor="price">
                        Price
                    </label>
                    <input className={modal.Input} id="price" type='number' min={0} value={price} onChange={handleUpdate} />
                </fieldset>
                <fieldset className={modal.Fieldset}>
                    <label className={modal.Label} htmlFor="description">
                        Description
                    </label>
                    <input className={modal.Input} id="description" value={description} onChange={handleUpdate} />
                </fieldset>
                <fieldset className={modal.Fieldset}>
                    <label className={modal.Label} htmlFor="category">
                        Categoty
                    </label>
                    <input className={modal.Input} id="category" value={category} onChange={handleUpdate} />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Dialog.Close asChild>
                        <button onClick={handleSubmitUpdate} className={`${modal.Button} ${modal.green}`}>Save changes</button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                    <button className={modal.IconButton} aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>)
};

Modal.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleSubmitUpdate: PropTypes.func.isRequired,
};


export default Modal;