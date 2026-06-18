interface NavTabsProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function NavTabs({ activePage, onPageChange }: NavTabsProps) {
  const tabs = ["About", "Resume", "Portfolio"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li className="navbar-item" key={tab}>
            <button
              className={`navbar-link ${activePage === tab.toLowerCase() ? "active" : ""}`}
              data-nav-link
              onClick={() => onPageChange(tab.toLowerCase())}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
