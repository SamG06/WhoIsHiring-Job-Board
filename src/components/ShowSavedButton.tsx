import { useSaved } from "../context/saved-context";

function JobsList() {
  const { saved, showSaved, setShowSaved } = useSaved();

  const buttonText = () => {
    if (showSaved) return "Show All Jobs";

    if (saved.length) return "Show Saved Jobs";

    return "No Jobs Saved";
  };

  return (
    <button
      type="button"
      className="save-button"
      onClick={() => {
        setShowSaved(!showSaved);
      }}
      disabled={!saved.length && !showSaved}
    >
      {buttonText()}
    </button>
  );
}

export default JobsList;
