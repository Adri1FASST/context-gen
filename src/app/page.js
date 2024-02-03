// app/page.tsx
'use client'
import {
    Box,
    Button,
    Center,
    Container, Divider,
    Flex,
    Grid, GridItem,
    Heading,
    Select,
    useClipboard,
    useColorMode
} from "@chakra-ui/react";
import Image from "next/image";
import './globals.css'
import styles from "./page.module.css";
import ContextForm from "@/components/ContextForm";
import Clipboard from "@/components/Clipboard";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import {useState} from "react";

export default function Page() {
    const {colorMode, toggleColorMode} = useColorMode()

    const [environment, setEnvironment] = useState('dev')

    const {onCopy, value, setValue} = useClipboard("");

    return <main className={styles.main}>
        <Flex flexDirection={"row"} alignItems={'center'} justifyContent={"space-between"} p={2} mb={12}>
            <Select defaultValue={environment} w={"150px"} onChange={(e) => setEnvironment(e.target.value)}>
                <option value='dev'>Dev</option>
                <option value='recette'>Recette</option>
            </Select>
            <Center>
                <Heading as='h1' size='lg' fontSize='50px'>Context Gen</Heading>
                <Image
                    src="/react.svg"
                    alt="React Logo"
                    className={"App-logo"}
                    width={100}
                    height={24}
                    priority
                />
            </Center>

            <Button onClick={toggleColorMode} mr={3}>
                {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
            </Button>
        </Flex>

        <Grid templateColumns='repeat(4, 1fr)' gap={12} px={10}>

            <ContextForm setValue={setValue} value={value} onCopy={onCopy} colorMode={colorMode}
                         environment={environment}/>

            <Clipboard value={value}/>
        </Grid>
    </main>
}
