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
  return (
    <Card elevation={6} sx={{padding: "0.5rem", width: "7.5rem", height: "8rem", position: "relative"}}>
      <div className={styles.name}>
        <Typography >{value.type}</Typography>
      </div>
      <Avatar sx={{height: "5rem", width: "5rem", position:"absolute", left: "20%", right: "20%", bgcolor: "red"}}><Typography fontSize={"3rem"}>{value.score}</Typography></Avatar>
      <Avatar sx={{marginTop: 1, position:"absolute", left: "3rem", bottom: "0.5rem", bgcolor: "lightgrey"}}><Typography color={"black"}>{`${modifier >= 0 ? "+" : "-"}${modifier}`}</Typography></Avatar>
    </Card>
  );
};

export default MainStat;
