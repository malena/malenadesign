import "./QuoteBox.css";

function QuoteBox({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div className={`quote-gray-box ${item.className}`}>
          <div className="quote">
            {item.title && <h5 className="quote-title">{item.title}</h5>}
            {item.subtitle && (
              <h6 className="quote-subtitle">{item.subtitle}</h6>
            )}
            <p className="quote-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuoteBox;
