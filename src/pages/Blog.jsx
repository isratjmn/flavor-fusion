import React from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import SingleBlog from "../component/SingleBlog";
const ref = React.createRef();

const Blog = () => {
	const blogs = useLoaderData();
	return (
		<>
			<div
				className="blog-banner pt-24 px-20 bg-[url('https://images.unsplash.com/photo-1648655515959-217953fa53ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-opacity-100  h-[60vh] relative z-80 flex justify-center items-center"
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					objectFit: "cover",
				}}
			>
				<div className="z-50">
					<Pdf targetRef={ref} filename="code-example.pdf">
						{({ toPdf }) => (
							<button
								onClick={toPdf}
								title="Download pdf"
								className=" btn-primary "
							>
								Download To Pdf
							</button>
						)}
					</Pdf>
				</div>
			</div>
			<div className="md:px-20 my-28">
				<div ref={ref}>
					<h2 className="text-center font-popins text-3xl font-extrabold">
						{" "}
						Some Blogs With Answers
					</h2>
					<div className="grid md:grid-cols-2 gap-8 mt-20">
						{blogs.map((blog) => (
							<SingleBlog key={blog.id} blog={blog} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
