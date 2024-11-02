function SidebarComponent({ svg, text }) {
  return (
    <li className="nav-item">
      <a href="employer-dash-job.html" className="nav-link">
        {svg}
        {text}
      </a>
    </li>
  );
}

export default SidebarComponent;
