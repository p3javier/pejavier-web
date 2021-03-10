const dummy = (
  <>
    <p>
      My journey as developer started back in 2013 when I had my first contact
      with computer programming at the University.
    </p>
    <p>
      I've learned there the fundamentals of programming with Python that
      already was very popular at time and it is a great starting point for a
      newbie."
    </p>
    <p>
      After that I was playing around with Python as well as Matlab, but it
      wasn't until late 2018 when I consider I started to code seriously.
    </p>
    <p>
      I learned the basics of JavaScript in one week and after that I went to a
      competition at IronHack, with the objective to get a full grant to study
      there at the web development bootcamp. Finally I just got a partial grant
      and that wasn't enough for me cause the school also was in a different
      city, etc.
    </p>
    <p>
      The next stop in my journey was Poland where I've started to work at
      Majorel, which is an outsourcing company, in this case of Google. Few
      months after started working there...
    </p>
  </>
);

const TextBlock = () => {
  return <div className="w-3/4 xs:w-1/2 text-white">{dummy}</div>;
};

export default TextBlock;
