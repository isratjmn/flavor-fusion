import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';

const BlogLayout = () => {
    return (
        <div>
			<Header></Header>
			<Blog></Blog>
			<Footer></Footer>
		</div>
    );
};

export default BlogLayout;