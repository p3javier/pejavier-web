import React, { FC } from "react";
import { TabGroup } from "@statikly/funk";

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const Tabs: FC<ParentCompProps> = (props) => {
  const { childComp } = props;
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
          className="w-max h-full p-12 transition-all transform"
          activeClassName="opacity-100 duration-500 translate-x-0 bg-white bg-opacity-25 rounded-2xl text-lg"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          {childComp}
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
