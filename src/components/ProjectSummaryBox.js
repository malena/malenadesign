import "./ProjectSummaryBox.css";

function ProjectSummaryBox({ className, items }) {
  return (
    <div className={`cases-gray-box ${className}`}>
      <ul className="case-roles">
        {items.map((item) => (
          <li key={item.id} className="cases-role">
            <p>
              <strong>{item.title}</strong> {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSummaryBox;
