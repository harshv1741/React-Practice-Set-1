/* eslint-disable react/prop-types */
function Stationary({ header, items }) {
    return (
        <div>
            <h3>{header}</h3>
            <ul>
                {
                    items.map((items) => (
                        <li key={items}>
                           {items} 
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Stationary;
