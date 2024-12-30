function About() {
  return (
    <div className="container mx-auto p-4 text-black dark:text-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I am Raul Arghir, a passionate photographer and videographer
            with a deep love for capturing the beauty of the world through my
            lens. My journey into photography and videography began at a young
            age, and over the years, it has grown into a fulfilling career and a
            lifelong passion.
          </p>
          <p className="mb-4">
            I specialize in various forms of photography, including landscape,
            portrait, and event photography. Each photograph I take is a
            testament to my dedication to capturing the perfect moment, the
            essence of a scene, or the emotion of a subject. My videography work
            spans from creating cinematic wedding films to producing engaging
            promotional videos for businesses. I believe that every video should
            tell a compelling story, and I strive to bring that narrative to
            life through my work.
          </p>
          <p className="mb-4">
            I am constantly learning and evolving in my craft, always seeking
            new techniques and technologies to enhance my work. Whether I am
            behind the camera or in front of a computer screen, my goal is to
            create stunning visuals that leave a lasting impression. Thank you
            for visiting my website, and I look forward to connecting with you!
          </p>
          <form className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
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
        <div className="lg:w-1/2 p-4">
          <img
            src="src\assets\2.jpeg"
            alt="Photo of Me"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
