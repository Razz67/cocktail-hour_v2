import React from "react";
import "./blog.css"

export default function Blogs() {
	return (
<div className="container mt-100 mt-60">
    <div className="row">
        <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Latest Blog &amp; News</h4>
                <p className="text-muted para-desc mx-auto mb-0">The Cocktail Hour is the place to go when you want to entertain your friends with the latest cocktail beverages.</p>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
                <div className="blog-img d-block overflow-hidden position-relative">
                    <img src="https://via.placeholder.com/350x280/FF7F50/000000" className="img-fluid rounded-top" alt="" />
                    <div className="overlay rounded-top bg-dark"></div>
                    <div className="post-meta">
                        <a href="#value" className="text-light d-block text-right like"><i className="mdi mdi-heart"></i> 33</a>
                        <a href="#value" className="text-light read-more">Read More <i className="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div className="content p-3">
                    <small className="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="#value" className="text-primary">Event</a></small>
                    <h4 className="mt-2"><a href="#value" className="text-dark title">Quick guide on drinking and driving.</a></h4>
                    <p className="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                    <div className="pt-3 mt-3 border-top d-flex">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                        <div className="author mt-2">
                            <h6 className="mb-0"><a href="#value" className="text-dark name">Lisa Marvel</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
                <div className="blog-img d-block overflow-hidden position-relative">
                    <img src="https://via.placeholder.com/350x280/6495ED/000000" className="img-fluid rounded-top" alt="" />
                    <div className="overlay rounded-top bg-dark"></div>
                    <div className="post-meta">
                        <a href="#value" className="text-light d-block text-right like"><i className="mdi mdi-heart"></i> 33</a>
                        <a href="#value" className="text-light read-more">Read More <i className="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div className="content p-3">
                    <small className="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="#value" className="text-primary">Safety</a></small>
                    <h4 className="mt-2"><a href="#value" className="text-dark title">Become A responsible drinker</a></h4>
                    <p className="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                    <div className="pt-3 mt-3 border-top d-flex">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                        <div className="author mt-2">
                            <h6 className="mb-0"><a href="#value" className="text-dark name">Joya Aafri</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="blog-post rounded border">
                <div className="blog-img d-block overflow-hidden position-relative">
                    <img src="https://via.placeholder.com/350x280/FF1493/000000" className="img-fluid rounded-top" alt="" />
                    <div className="overlay rounded-top bg-dark"></div>
                    <div className="post-meta">
                        <a href="#value" className="text-light d-block text-right like"><i className="mdi mdi-heart"></i> 33</a>
                        <a href="#value" className="text-light read-more">Read More <i className="mdi mdi-chevron-right"></i></a>
                    </div>
                </div>
                <div className="content p-3">
                    <small className="text-muted p float-right">19th Oct, 19</small>
                    <small><a href="#value" className="text-primary">Popular</a></small>
                    <h4 className="mt-2"><a href="#value" className="text-dark title">Quick guide on how to call an Uber.</a></h4>
                    <p className="text-muted mt-2">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                    <div className="pt-3 mt-3 border-top d-flex">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow" alt="" />
                        <div className="author mt-2">
                            <h6 className="mb-0"><a href="#value" className="text-dark name">Martin Sobhe</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
	);
};

