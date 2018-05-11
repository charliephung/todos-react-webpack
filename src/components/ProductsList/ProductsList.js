import React, { Component } from 'react';

class ProductsList extends Component {
    render() {
        return (
            <div className="panel panel-default">


                <div className="panel-heading">
                    <h3 className="panel-title">Products list</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* from productlistpage */}
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductsList;
