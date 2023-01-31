import { Tab } from "@headlessui/react";
import React from "react";

const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab aria-selected="true">Profile</Tab>
        <Tab>Subscription</Tab>
        <Tab>Settings</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Pofile Content</Tab.Panel>
        <Tab.Panel>Subscription Content</Tab.Panel>
        <Tab.Panel>Settings Content</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
