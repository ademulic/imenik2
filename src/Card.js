const Card = ({user}) => {
    const {ime,prezime,gender,age,hobby} = user;
    return (  
        <div className="card" key={ime}>
            <p>{ime} {prezime}</p>
            <p>gender: {gender}</p>
            <p>Age: {age}</p>
            <p>hobby: {hobby}</p>
        </div>
    );
}
 
export default Card;