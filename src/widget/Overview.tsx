import { FC } from "react";
import SingleStatView from "../components/SingleStatView";

const Overview: FC = () => {
  return (
    <div className="rows-6">
      <SingleStatView />
      <SingleStatView />
      <SingleStatView />
      <SingleStatView />
      <SingleStatView />
      <SingleStatView />
    </div>
  );
};
export default Overview;
