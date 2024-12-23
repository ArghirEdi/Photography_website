function About() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 p-4">
          <img
            src="/path/to/your/photo.jpg"
            alt="Your Name"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I am [Your Name], a passionate web developer with a love for
            creating beautiful and functional websites. I have experience in
            various web technologies and enjoy learning new things every day.
          </p>
          <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
