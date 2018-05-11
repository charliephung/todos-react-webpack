import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menu = [
    {
        name: "Home Page",
        to: "/",
        exact: true
    },
    {
        name: "Product Page",
        to: "/products-list",
        exact: false
    }
]

const MenuLink = (({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? "active" : "";

                return (
                    <li className={active}>
                        <Link to={to} >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
})

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" >API</a>
                </div>

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        {this.showMenu(menu)}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a >Login</a></li>
                        <li><a >Signup</a></li>

                    </ul>
                </div>
                {/* <!-- /.navbar-collapse --> */}
            </nav>
        );
    }
    showMenu = (menu) => {
        let result = null;

        if (menu.length > 0) {
            result = menu.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;
