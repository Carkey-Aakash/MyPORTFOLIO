import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Akash Karki</p>
          <p className="text-gray-400">
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
         
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Akash Karki. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
