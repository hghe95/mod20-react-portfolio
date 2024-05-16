import React from `react`;
import { capitalizeFirstLetter } from "../../utils/helpers";

const Navbar = (props) => {
    const pages = [`AboutMe`, `Contact`, `Portfoilo`, `Resume`];
    return (
        <div className="pages centered">
            <ul className="nav nav-pages">
                {pages.map((page) => (
                    <li className={ props.currentPage === page ? "nav-item is-current" : "nav-item" }
                    key={pages}>
                        <a
                        href={'#'+ page.toLowerCase()}
                        onClick={() => props.handlePageChange(page)}
                        className={ props.currentPage === page ? "nav-link current" : "nav-link" }
                        >
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;