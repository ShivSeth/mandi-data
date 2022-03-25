interface SearchBarProps {
    onClick: Function,
    inputText: Function,
    disabled: boolean,
    dataTest: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onClick,
    inputText,
    disabled,
    dataTest }) => {
  return (
    <div>
      <div className="search-container" data-test={dataTest}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          onChange={(e) => {
            inputText(e.target.value);
          }}
        />
        <button
          type="button"
          disabled={disabled}
          onClick={(event:any) => onClick}
        >
          Search
        </button>
      </div>
      
    </div>
  );
};

export default SearchBar;
