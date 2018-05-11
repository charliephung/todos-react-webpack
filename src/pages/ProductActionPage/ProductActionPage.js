import React, { Component } from 'react';
// Api request
import apiCaller from '../../utils/apiCaller';
import { connect } from "react-redux";
import { actRequestAddProduct, actRequestUpdateProduct } from "../../actions/index";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            txtName: "",
            numPrice: "",
            chkbStatus: ""
        }
    }

    // Get id from URL
    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let { id } = match.params;
            apiCaller("GET", `products/${id}`, null).then(res => {
                this.setState({
                    id: id,
                    txtName: res.data.name,
                    numPrice: res.data.price,
                    chkbStatus: res.data.status
                })
            });
        }
    }

    onChange = e => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name
        this.setState({
            [name]: value
        });
    }
    onSave = e => {
        e.preventDefault();
        let { id, txtName, numPrice, chkbStatus } = this.state;
        let { history } = this.props;
        let body = {
            name: txtName,
            price: numPrice,
            status: chkbStatus
        }
        if (id === "") {
            this.props.actRequestAddProduct(body);
            history.push("/products-list");
        } else {
            this.props.actRequestUpdateProduct(id, body);
            history.push("/products-list");
        }
    }

    render() {
        let { txtName, numPrice, chkbStatus } = this.state;
        return (
            <div className="container">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form
                        onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Product:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product name"
                                name="txtName"
                                onChange={this.onChange}
                                value={txtName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Product price"
                                name="numPrice"
                                onChange={this.onChange}
                                value={numPrice}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status:
                            <input
                                    type="checkbox"
                                    className="form-control"
                                    name="chkbStatus"
                                    onChange={this.onChange}
                                    checked={chkbStatus}
                                />
                                Available
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => this.props.history.goBack()}
                        >
                            Back
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actRequestAddProduct: product => {
            dispatch(actRequestAddProduct(product));
        },
        actRequestUpdateProduct: (id, product) => {
            dispatch(actRequestUpdateProduct(id, product));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);
