import React, { FC } from "react";
import { TabGroup } from "@statikly/funk";

interface ParentCompProps {
  personalWebsite?: React.ReactNode;
  mapaMelange?: React.ReactNode;
  extremumEcommerce?: React.ReactNode;
}

const tabClass =
  "my-4 text-lg subpixel-antialiased font-semibold nm-flat-gray-200 rounded-full h-12 px-12 mx-8 transition-colors duration-150 focus:outline-none";
const tabActiveClass = "bg-black text-black nm-inset-blue-300-lg";
const tabInactiveClass = "text-black hover:nm-convex-gray-200-lg";

const tabPanelClass = "h-full p-12 transition-all transform";
const activeTabPanelClass =
  "opacity-100 duration-500 translate-x-0 bg-white bg-opacity-25 rounded-2xl text-lg";
const inactiveTabPanelClass = "absolute opacity-0 -translate-x-2";

const Tabs: FC<ParentCompProps> = ({
  personalWebsite,
  mapaMelange,
  extremumEcommerce,
}) => {
  return (
    <div className="flex flex-wrap  mx-32 outline-none">
      <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className={tabClass}
            activeClassName={tabActiveClass}
            inactiveClassName={tabInactiveClass}
          >
            Personal Website
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className={tabClass}
            activeClassName={tabActiveClass}
            inactiveClassName={tabInactiveClass}
          >
            Mapa Melange
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className={tabClass}
            activeClassName={tabActiveClass}
            inactiveClassName={tabInactiveClass}
          >
            Extremum e-commerce
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className={tabClass}
            activeClassName={tabActiveClass}
            inactiveClassName={tabInactiveClass}
          >
            chrome extension
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className={tabPanelClass}
          activeClassName={activeTabPanelClass}
          inactiveClassName={inactiveTabPanelClass}
        >
          {personalWebsite}
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className={tabPanelClass}
          activeClassName={activeTabPanelClass}
          inactiveClassName={inactiveTabPanelClass}
        >
          {mapaMelange}
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className={tabPanelClass}
          activeClassName={activeTabPanelClass}
          inactiveClassName={inactiveTabPanelClass}
        >
          {extremumEcommerce}
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className={tabPanelClass}
          activeClassName={activeTabPanelClass}
          inactiveClassName={inactiveTabPanelClass}
        >
          {mapaMelange}
        </TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
};

export default Tabs;
