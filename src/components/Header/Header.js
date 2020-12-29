import React from "react";
import "./Header.css";
import logo from "../../components/Logo/InvizaShield-Logo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="header-logo">
            <Link id="logo" className="logo" to="/"><img src={logo} alt="Logo" /></Link>
            <Link id="menu" className="menu" to="/menu">Menu</Link>
        </section>
    )
}