import React from "react";
import { TabGroup } from "@statikly/funk";

const Tabs = () => {
  return (
    <div className="flex flex-wrap  mx-32 outline-none">
      <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full h-12 px-12 mx-8 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Personal Website
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full h-12 px-12 mx-8 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Mapa Melange
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full h-12 px-12 mx-8 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Extremum e-commerce
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full h-12 px-12 mx-8 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            chrome extension
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="w-max p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <p>
            My journey as developer started back in 2013 when I had my first
            contact with computer programming at the University.
          </p>
          <p>
            I've learned there the fundamentals of programming with Python that
            already was very popular at time and it is a great starting point
            for a newbie."
          </p>
          <p>
            After that I was playing around with Python as well as Matlab, but
            it wasn't until late 2018 when I consider I started to code
            seriously.
          </p>
          <p>
            I learned the basics of JavaScript in one week and after that I went
            to a competition at IronHack, with the objective to get a full grant
            to study there at the web development bootcamp. Finally I just got a
            partial grant and that wasn't enough for me cause the school also
            was in a different city, etc.
          </p>
          <p>
            The next stop in my journey was Poland where I've started to work at
            Majorel, which is an outsourcing company, in this case of Google.
            Few months after started working there...
          </p>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="p-12 transition-all transform h-48 flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          <label className="font-semibold mb-1" htmlFor="input">
            Input
          </label>
          <input
            id="input"
            type="text"
            className="border border-gray-400 px-8 h-12"
            placeholder="Focus me!"
          />
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 3
        </TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
};

export default Tabs;
