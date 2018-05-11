import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductItem extends Component {


    onDelete = id => {
        this.props.onDelete(id);
    }

    render() {
        let { product } = this.props;
        let statusName = product.status ? "Available" : "Out of order";
        let statusClass = product.status ? "success" : "warning";

        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-xs btn-success">
                        Edit
                    </Link>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-xs btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
