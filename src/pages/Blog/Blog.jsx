import React from "react";
import bannerBlog from "./../../assets/images/blog_banner.jpg";

const Blog = () => {
	return (
		<div>
            <div>
				<img
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center",
                        objectFit: 'cover'
					}}
					className="h-[350px] w-full opacity-60"
					src={bannerBlog}
					alt="Banner"
				/>
				;
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					<div className=" lg:mt-8 py-8 mx-auto lg:mb-0">
						<h2 className="mx-auto font-sans font-bold tracking-normal text-red-600 text-3xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
							Blog
						</h2>
					</div>
				</div>
			</div>
			<div>
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"></h2>
					</div>
				</div>
				<div className="max-w-screen-xl w-[90%] mx-auto my-24">
					<div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="bg-red-200 p-8">
								<h3 className="mb-4 text-2xl font-bold">
									1. Tell us the differences between
									uncontrolled and controlled components.
								</h3>
								<p className="text-gray-700">
									Here are the main differences between
									controlled and uncontrolled components:
									State management: Uncontrolled components
									manage their state internally, while
									controlled components have their state
									managed by their parent component. Input
									handling: Uncontrolled components handle
									user input themselves, while controlled
									components rely on the parent component to
									handle user input and update their state.
									<br />
									Readability: Controlled components are
									generally more readable and easier to debug
									than uncontrolled components since all state
									changes happen in one place. Performance:
									Uncontrolled components may perform better
									than controlled components in certain
									scenarios since they do not have to update
									the parent components state on every user
									input.
								</p>
							</div>
							<div className="bg-red-200 p-8">
								<h3 className="mb-4 text-2xl font-bold">
									2. What is a custom hook, and why will you
									create a custom hook?
								</h3>
								<p className="text-gray-700">
									In React, a custom hook is a reusable
									function that encapsulates some logic and
									state, allowing it to be shared across
									multiple components. Custom hooks allow
									developers to abstract away complex logic
									and state management from their components,
									making the code more modular and easier to
									maintain.
								</p>
							</div>
						</div>
						<div className="space-y-8">
							<div className="bg-red-200 p-8">
								<h3 className="mb-4 text-2xl font-bold">
									3. Tell us the difference between nodejs and
									express js.
								</h3>
								<p className="text-gray-700">
									Node.js provides a JavaScript runtime
									environment for running server-side code,
									while Express.js is a web application
									framework built on top of Node.js that
									provides a set of tools and APIs for
									building web applications and APIs. While
									Node.js can be used to build web
									applications directly, Express.js provides a
									more convenient and efficient way to do so,
									by providing a structure and tools for
									handling common web development tasks.
								</p>
							</div>
							<div className="bg-red-200 p-8">
								<h3 className="mb-4 text-2xl font-bold">
									4. How to validate React props using
									PropTypes
								</h3>
								<p className="text-gray-700">
									React PropTypes is a built-in typechecking
									feature in React that allows you to define
									the expected types of props that a component
									should receive. PropTypes helps to ensure
									that components are used correctly and that
									the data being passed to them is of the
									expected type, thus reducing the likelihood
									of runtime errors..
									<br />
									<br />
									By using PropTypes to validate props, you
									can catch errors early in the development
									process and ensure that your components are
									used correctly. It is considered a best
									practice to use PropTypes in your React
									projects.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
