import { FC } from "react";
import SingleStatView from "../components/SingleStatView";

const Overview: FC = () => {
  return (
    <div className="columns-6">
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
