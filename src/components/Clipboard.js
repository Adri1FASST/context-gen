import React from 'react'
import {Box, GridItem, Textarea} from "@chakra-ui/react";

const Clipboard = ({value}) => {

    return <GridItem colSpan={2}>
        <Textarea value={value} readOnly size='xl' width={"100%"} h={"100%"} minHeight={"70vh"} p={3} variant={"filled"}
                  borderRadius={"5px"}/>
    </GridItem>
}

export default Clipboard
