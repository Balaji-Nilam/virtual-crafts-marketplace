import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setCategory }) => {
    const categories = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

    return (
        <nav>
            <ul>
                {categories.map(cat => (
                    <li key={cat}>
                        <Link to={`/category/${cat}`} onClick={() => setCategory(cat)}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
