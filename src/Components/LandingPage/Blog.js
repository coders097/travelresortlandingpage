import React from 'react';
import '../../css/Blog.css';
import testImg from '../../images/7010408-relaxing-resort-evening.jpg';

const Blog = () => {
    return (
        <section id="blog" className="blog">
            <h1>Latest Articles & News</h1>
            <div className="blog-view">
                <div className="blog-card">
                    <img src={testImg} alt=""></img>
                    <div className="blog-details">
                        <h2>Have a Family Party</h2>
                        <p><i className="fa fa-calendar" aria-hidden="true"></i> On March 2021</p>
                        <p>When you host a party or family reunion you feel like all younger memories getting
                            inside your beautiful mind.
                        </p>
                    </div>
                </div>
                <div className="blog-card">
                    <img src={testImg} alt=""></img>
                    <div className="blog-details">
                        <h2>Have a Family Party</h2>
                        <p><i className="fa fa-calendar" aria-hidden="true"></i> On March 2021</p>
                        <p>When you host a party or family reunion you feel like all younger memories getting
                            inside your beautiful mind.
                        </p>
                    </div>
                </div>
                <div className="blog-card">
                    <img src={testImg} alt=""></img>
                    <div className="blog-details">
                        <h2>Have a Family Party</h2>
                        <p><i className="fa fa-calendar" aria-hidden="true"></i> On March 2021</p>
                        <p>When you host a party or family reunion you feel like all younger memories getting
                            inside your beautiful mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;