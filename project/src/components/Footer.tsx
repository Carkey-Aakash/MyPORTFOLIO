import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Aakash Karki</p>
          <p className="text-gray-400">
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and React + TypeScript</span>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Aakash Karki. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
