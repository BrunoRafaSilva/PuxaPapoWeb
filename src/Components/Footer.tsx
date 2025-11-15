import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="w-full text-center py-6 bg-gray-50 border-t border-gray-200">
    <div className="flex justify-center items-center gap-6">
      <a
        href="https://www.linkedin.com/in/brunorlsilva/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://github.com/BrunoRafaSilva"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub size={32} />
      </a>
    </div>
    <p className="mt-3 text-sm text-gray-500">Developed by Bruno Rafael Lucena da Silva</p>
  </footer>
);

export { Footer };
