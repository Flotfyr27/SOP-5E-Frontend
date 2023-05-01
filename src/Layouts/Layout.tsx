import { FC } from "react";

const Layout: FC = () => {
  return (
    <>
      <div
        id="outer"
        className="container m-auto grid grid-cols-5 grid-rows-5 gap-1 p-1 bg-green-500 h-screen"
      >
        <div id="level" className="container col-span-1 row-span-1 bg-red-500">
          AC/HP/TEMP/INIT/SPEED
        </div>
        <div
          id="tabBar"
          className="container col-span-4 row-span-1 bg-blue-500"
        >
          SPELLS/ACTIONS/INVENTORY/FEATURES
        </div>
        <div
          id="sidebar"
          className="container col-span-1 row-span-4 bg-orange-500"
        >
          STATS/PROFICIENCY/SAVING-THROWS
        </div>
        <div
          id="content"
          className="container col-span-4 row-span-4 bg-purple-500"
        >
          CONTENT/DETAILED-VIEW
        </div>
      </div>
    </>
  );
};
export default Layout;
