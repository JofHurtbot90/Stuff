import React from 'react';

function Portfolio(props) {
    return (
        <div classname="portfolio">
            {props.children}
        </div>
    )
}

export default Portfolio;