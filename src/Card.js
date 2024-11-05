const Card = ({user}) => {
    const {ime,prezime,gender,age,hobby,number} = user;
    return (  
        <div className="card" key={ime}>
            <p>{ime} {prezime}</p>
            <p>gender: {gender}</p>
            <p>Age: {age}</p>
            <p>hobby: {hobby}</p> 
            <p>hobby: {number}</p>
        </div>
    );
}
 
export default Card;