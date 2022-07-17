import Logo from '../assets/logo.svg'

const hackerNewsLink = () :JSX.Element => <a
  href="https://news.ycombinator.com/submitted?id=whoishiring"
  target="_blank"
  rel="noopener noreferrer"
  >
  hackernews
</a>

function JobsList() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="intro">
          <img src={Logo} alt="logo"/>
          <p>
            # Results from {hackerNewsLink()}
          </p>
        </div>
      </div>
    </header>
  );
}

export default JobsList;
