import React, { Component } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from "react-redux";
// React Router
import { Link } from "react-router-dom";
// Actions
import { actRequestProduct, actRequestDeleteProduct } from "../../actions/index";



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    // Execute after 1st time render call
    componentDidMount() {
        this.props.actRequestProduct();
    }

    // Handle event
    onDelete = id => {
        if (confirm(`Are you sure ?`))//eslint-disable-line
            this.props.actRequestDeleteProduct(id);
    }

    render() {
        // Get data from store
        let { products } = this.props;
        return (
            <div className="container">
                <Link
                    to="/product/add"
                    className="btn btn-primary">
                    Add product
                </Link>
                <br />
                <ProductsList>
                    {/* pass <ProductItem/> to <ProductsList/> in children */}
                    {this.showProductItems(products)}
                </ProductsList>
            </div>
        );
    }

    showProductItems = products => {
        let result = null;
        if (products.length > 0) {
            result = products.map((ele, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={ele}
                        index={index}
                        onDelete={this.onDelete} />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actRequestProduct: () => {
            dispatch(actRequestProduct());
        },
        actRequestDeleteProduct: id => {
            dispatch(actRequestDeleteProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
