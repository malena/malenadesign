import "./ProjectSummaryBox.css";

function ProjectSummaryBox({ items }) {
  return (
    <div className="cases-gray-box">
      <ul className="case-roles">
        {items.map((item) => (
          <li className="cases-role">
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
