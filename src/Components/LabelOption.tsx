interface LabelOptionProps {
  title: string;
}

const LabelOption: React.FC<LabelOptionProps> = ({ title }) => {
  return (
    <label className="text-red-500 font-medium peer-disabled:cursor-not-allowed">
      {title}
    </label>
  );
};

export { LabelOption };
