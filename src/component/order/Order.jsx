import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import MenuJson from "../../menu.json";
import MenuQueenBreakfast from "../menuQueenBreakfast/MenuQueenBreakfast";
import MenuQueenLunch from "../menuQueenLunch/MenuQueenLunch";
import OrderDetail from "../orderDetail/OderDetail"
import ModalWindowWaiter from "../modalWindow/ModalWindow"
import "./Order.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ClientOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            showBreakfast: true,
            showLunch: false,
            showModal: false,
            showOrder: []
        };
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Waiters">
                <div className="Intro-body">
                    <WoodLogo />
                    <div className="Menu-buttons">
                        <div className="Buttons-container">
                            <button className="OptionMenu" onClick={() => this.displayBreakfast()}>Queen breakfast</button>
                            <button className="OptionMenu" onClick={() => this.displayLunch()}>Queen Lunch</button>
                        </div>
                        {
                            this.state.showBreakfast ?
                                <div>
                                    <MenuQueenBreakfast updateItemProducts={this.updateProduct} />
                                </div>
                                : null
                        }
                        {
                            this.state.showLunch ?
                                <div>
                                    <MenuQueenLunch />
                                </div>
                                : null
                        }
                        <div>
                            <BackButton path="/waiter" />
                        </div>
                    </div>
                    <div className="Total-order">
                        <OrderDetail showModal={this.displayModal} />
                    </div>
                    <div>
                        <ModalWindowWaiter />
                    </div>
                </div>
            </div>
        );
    }
    displayBreakfast() {
        this.setState({
            showBreakfast: true,
            showLunch: false,
            showModal: false
        })
    }
    displayLunch() {
        this.setState({
            showLunch: true,
            showBreakfast: false,
            showModal: false
        })
    }
    displayModal() {
        console.log("displayModal");
    }
    updateProduct = () => {
        this.setState(previousState => ({
            showOrder: [
                ...previousState.showOrder,
                { producto: "algo", precio: "1000" }
            ]
        }))


    }

    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;