import { Box, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { FC, useState } from "react";
import MainStat from "./components/MainStat/MainStat";
import Overview from "./pages/Overview";
import { Stat, StatName } from "./types/Stats";

const CharacterSheet: FC = () => {

    const [str, setStr] = useState<Stat>({score: 20, type: StatName.STRENGTH})
    const [dex, setDex] = useState<Stat>({score: 20, type: StatName.DEXTERITY})
    const [con, setCon] = useState<Stat>({score: 20, type: StatName.CONSTITUTION})
    const [int, setInt] = useState<Stat>({score: 20, type: StatName.INTELLIGENCE})
    const [wis, setWis] = useState<Stat>({score: 20, type: StatName.WISDOM})
    const [cha, setCha] = useState<Stat>({score: 20, type: StatName.CHARISMA})

    const abilityNames = [str,dex, con, int, wis, cha]

    return (
    <Container>
        <Typography variant="h2">Spheres of Power 5E</Typography>
        <Box width={"100%"} border={"1px solid black"}>
    
        <Stack direction={"row"} spacing={2}>
            {abilityNames.map((name) => (
            <MainStat key={name.type} value={name}/>
            ))}
        </Stack>
        </Box>
        <Overview />
    </Container>)
}


export default CharacterSheet;