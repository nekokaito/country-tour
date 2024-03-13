
const Country = ({country}) => {
    const {name, flags} = country;
    const myStyle = {
    border: '2px solid skyblue',
    margin: '15px',
    padding: '15px',
    borderRadius: '16px'
    }
    
    return (
        <div style={myStyle}>
            <p>Name: {name?.common}</p>
            <img  src={flags.png} alt="" />
        </div>
    );
};

export default Country;