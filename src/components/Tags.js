import "./Tags.css";

function Tags({ items }) {
  return (
    <ul className="cases-tags">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Tags;
