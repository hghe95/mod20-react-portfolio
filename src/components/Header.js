import React from `react`;
import Navbar from `../Navbar`;

const Header = (props) => {
    const { currentPage, handlePageChange } = props;
    return (
        <header>
            <div>
                <h1>Henry He Portfolio</h1>
                {props.children}
            </div>
            <div>
                <Navbar
                    handlePageChange = {handlePageChange}
                    currentPage = {currentPage}
                >
                </Navbar>
            </div>
        </header>
    )
}

export default Header;