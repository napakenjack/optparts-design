type SearchSuggestionsProps = {
  items: string[];
  onPick?: (value: string) => void;
};

const SearchSuggestions = ({ items, onPick }: SearchSuggestionsProps) => (
  <div className="suggestions">
    {items.map((item) => (
      <button key={item} type="button" onClick={() => onPick?.(item)}>
        {item}
      </button>
    ))}
  </div>
);

export default SearchSuggestions;
