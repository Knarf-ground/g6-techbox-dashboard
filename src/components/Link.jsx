import React from "react";
import { VscAccount, VscTag } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

    function Links() {
        return (
                <section className='sidebarMenu'>
                    <ul className='menuList'>
                        <li>
                            <Link to="./user" className='item'>
                                <VscAccount className='sidebar__icon'/>
                                    Users
                                </Link>
                        </li>
                        <li className='menuList'>
                            <Link to='./products' className='item'>
                                <VscTag className='sidebar__icon'/>
                                    Productos
                            </Link>
                        </li>
                    </ul>
                </section>
           
        );
    }

export default Links;
