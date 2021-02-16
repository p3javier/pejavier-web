import React from "react";
import { TabGroup } from "@statikly/funk";

const Tabs = () => {
  return (
    <div className="container flex flex-wrap  px-8 outline-none">
      <TabGroup numTabs={3} direction={TabGroup.direction.VERTICAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full w-full h-12 px-12 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Tab 1
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full w-full h-12 px-12 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Tab with input
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full w-full h-12 px-12 transition-colors duration-150 focus:outline-none"
            activeClassName="bg-black text-black nm-inset-blue-300-lg"
            inactiveClassName="text-black hover:nm-convex-gray-200-lg"
          >
            Tab 3
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 1
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
