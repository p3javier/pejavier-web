import React from "react";
import { TabGroup } from "@statikly/funk";

const Tabs = () => {
  return (
    <div className="container h-screen w-screen flex flex-wrap">
      <TabGroup numTabs={3} direction={TabGroup.direction.VERTICAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="w-full h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Tab 1
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="w-full h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Tab with input
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="w-full h-12 px-12 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
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
