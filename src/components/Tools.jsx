import React from 'react';

export default function Tools() {
  const col = 'grid grid-cols-2 gap-6';
  const imgClass = 'w-20 mx-auto transform transition-transform duration-300 hover:scale-110';

  return (
    <div className="w-full px-6 sm:px-12 md:px-20 min-h-screen bg-gray-900">
      <div className="text-center">
        <h1
          id="tools"
          className="pt-32 pb-10 text-3xl md:text-4xl font-bold text-white"
        >
          <span className="inline-block border-b-4 border-blue-400 pb-5">
            Tech Stack
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10 text-center text-white">
        <div>
          <h3 className="text-lg font-semibold my-3">FRONT END</h3>
          <div className={col}>
            <img src="/images/tools/html.svg" className={imgClass} alt="HTML" />
            <img src="/images/tools/css.svg" className={imgClass} alt="CSS" />
            <img src="/images/tools/javascript.svg" className={imgClass} alt="JavaScript" />
            <img src="/images/tools/react.svg" className={imgClass} alt="React" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold my-3">BACK END</h3>
          <div className={col}>
            <img src="/images/tools/nodejs.svg" className={imgClass} alt="Node.js" />
            <img src="/images/tools/expressjs.svg" className={imgClass} alt="Express.js" />
            <img src="/images/tools/mongodb.svg" className={imgClass} alt="MongoDB" />
            <img src="/images/tools/heroku.svg" className={imgClass} alt="Heroku" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold my-3">TOOLS</h3>
          <div className={col}>
            <img src="/images/tools/git.svg" className={imgClass} alt="Git" />
            <img src="/images/tools/postman.svg" className={imgClass} alt="Postman" />
            <img src="/images/tools/sublime.svg" className={imgClass} alt="Sublime Text" />
            <img src="/images/tools/js.svg" className={imgClass} alt="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  );
}
