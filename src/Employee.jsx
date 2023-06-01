
// eslint-disable-next-line react/prop-types
function Employee({name, designation, education}){
    return(
        <div>
            <h2>Employee Card</h2>
            <h3>
                <span style={{color: 'red'}}>Name: </span>{name}
            </h3>
            <h3>
                <span style={{color: 'green'}}>Designation: </span>{designation}
            </h3>
            <h3>
                <span style={{color: 'blue'}}>Education: </span>{education}
            </h3>
        </div>
    )
}

export default Employee