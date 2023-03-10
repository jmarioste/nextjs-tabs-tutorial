import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
const AccountPage = () => {
  const tabs = ["profile", "subscription", "settings"];
  const router = useRouter();
  const _selectedTab = (router.query.tab as string) ?? "profile";
  const selectedIndex = tabs.indexOf(_selectedTab) ?? 0;
  if (!router.isReady) {
    return null;
  }
  return (
    <div className="p-4">
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(index) => {
          const tab = tabs.at(index);
          router.replace(`/account/${tab}`, undefined, { shallow: true });
        }}
      >
        <Tab.List className={"tabs tabs-boxed"}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              as={Link}
              href={`/account/${tab}`}
              // use classNames to toggle the tab-active state easily
              className={classNames({
                "tab m-2 capitalize": true,
                "tab-active": selectedIndex === index,
              })}
              shallow
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className={"p-2 bg-base-200 my-4 rounded-md text-base-content"}
        >
          <Tab.Panel>Pofile Content</Tab.Panel>
          <Tab.Panel>Subscription Content</Tab.Panel>
          <Tab.Panel>Settings Content</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <pre>Current Location : {window.location.href}</pre>
    </div>
  );
};
export default AccountPage;
