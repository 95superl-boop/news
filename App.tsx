import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SinglePost from './pages/SinglePost';
import FlashNewsPage from './pages/FlashNewsPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPath.startsWith('#/post/')) {
      const postId = parseInt(currentPath.split('/').pop() || '1');
      return <SinglePost postId={postId} />;
    }
    if (currentPath === '#/flash') {
      return <FlashNewsPage />;
    }
    return <HomePage />;
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default App;
