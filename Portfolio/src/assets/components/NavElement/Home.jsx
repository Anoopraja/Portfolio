const Home = () => {
  return (
    <section id="home" className="relative top-10 md:top-30 min-h-screen flex flex-col space-y-8 justify-center items-center px-16">
      <h1 className="text-5xl font-bold md:text-6xl">
        Hi, I'm <span className="text-blue-600">Anoop lofi ❤️</span>
      </h1>

      <h2 className="text-2xl mt-4 text-gray-600">
        Frontend Developer | Python Programmer | Engineering Student
      </h2>

      <p className="mt-6 max-w-auto text-lg  text-gray-500 leading-8">
        I'm a passionate Computer Science student who enjoys building modern,
        responsive, and user-friendly web applications. I work with React,
        JavaScript, Tailwind CSS, and Python to turn ideas into real projects.
        I'm continuously learning new technologies, improving my problem-solving
        skills, and exploring app development, UI design, and AI. My goal is to
        create software that is both useful and visually appealing.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;