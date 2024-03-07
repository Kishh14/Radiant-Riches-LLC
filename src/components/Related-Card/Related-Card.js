import "./Related-Card.scss";

const RelatedCard = ({ cardImage }) => {
  return (
    <>
      <div className="related-card">
        <img src={cardImage} alt="builder-1" />
        <div className="badges">
          <span>20% Off</span>
          <span>Limited Time</span>
        </div>
        <h5>Webbuilder 1</h5>
        <p>Computer Modern Classic wix support</p>
        <div className="price-info">
          <p className="price">$39.96</p>
          <p className="mrp">$49.96</p>
          <p className="discount">(20% Off)</p>
        </div>
        <button>View Deal</button>
      </div>
    </>
  );
};

export default RelatedCard;
