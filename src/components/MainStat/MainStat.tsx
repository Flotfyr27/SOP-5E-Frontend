import { Avatar, Box, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { FC, useState } from "react";
import { Stat } from "../../types/Stats";

import styles from "../MainStat/mainstat.module.css";

interface MainStatProps {
  value: Stat;
}

const MainStat: FC<MainStatProps> = ({ value}) => {
  
  const calcMod = (score: number): number => {
    return Math.floor((score-10)/2);
  }
  const [modifier, setModifier] = useState(calcMod(value.score));
  const muiStat = <div className="h-28 w-28 bg-slate-400 border-white relative">
  <h1 className="mx-auto text-center">{value.type}</h1>
  <div className="container rounded-full bg-red-600 h-3/4 w-3/4 mx-auto" />
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">{value.score}</p>
  <div className="absolute bottom-0 left-1/2 bg-slate-600 rounded-full h-9 w-9 transform -translate-x-1/2">
      <div className="bg-green-600 rounded-full h-full relative">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{`${modifier > 0 ? `+${modifier}` : modifier}`}</p>
      </div>
  </div>
</div>


  return (<>{muiStat}</>
    
  );
};

export default MainStat;
