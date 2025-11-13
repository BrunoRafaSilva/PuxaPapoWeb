interface ChipOption {
  value: string;
  label: string;
  emoji?: string;
  tooltip?: string;
}

interface ChipSelectProps {
  options: ChipOption[];
  selected: string[];
  onSelect: (value: string) => void;
  className?: string;
}

export const ChipSelect = ({
  options,
  selected,
  onSelect,
  className,
}: ChipSelectProps) => {
  const handleClick = (value: string) => {
    onSelect(value);
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className || ""}`}>
      {options.map((option) => {
        const isSelected = selected.includes(option.value);

        const buttonClasses = [
          "relative inline-flex items-center gap-2 px-4 py-2.5 rounded-[1vw] text-sm font-medium",
          isSelected
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
            : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400",
        ].join(" ");

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleClick(option.value)}
            className={buttonClasses}
            title={option.tooltip}
          >
            {option.emoji && (
              <span className="text-lg leading-none">{option.emoji}</span>
            )}
            <span>{option.label}</span>
            {option.tooltip && <span className="text-xs opacity-70">?</span>}
          </button>
        );
      })}
    </div>
  );
};
