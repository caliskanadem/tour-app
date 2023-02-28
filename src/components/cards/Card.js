import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt="img" />
          <p className="par">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
