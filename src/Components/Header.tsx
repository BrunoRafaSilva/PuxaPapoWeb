interface HeaderProps {
  headerTitle: string;
  headerSubtitle1: string;
  headerSubtitle2: string;
}

const Header: React.FC<HeaderProps> = ({
  headerTitle,
  headerSubtitle1,
  headerSubtitle2,
}) => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="px-6 py-8 text-center">
        <h1 className="text-7xl font-bold mb-1 text-white">{headerTitle}</h1>
        <h2 className="text-lg opacity-90">{headerSubtitle1}</h2>
        <h2 className="text-lg opacity-90">{headerSubtitle2}</h2>
      </div>
    </header>
  );
};

export { Header };
