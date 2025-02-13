import BlogSection from '@/components/home/Blogs';
import HeroPage from '@/components/home/HeroPage';
import Projects from '@/components/home/Projects';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <Projects />
      <BlogSection />
    </div>
  );
};

export default HomePage