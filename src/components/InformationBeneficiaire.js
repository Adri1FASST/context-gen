import {Alert, AlertIcon, Grid, Input} from "@chakra-ui/react";
import React from "react";

const InformationBeneficiaire = () => {

    return <Grid gap={4}>
        <Input size='md' w={"100%"} p={2} rounded={"md"}/>
        <Alert status='warning'>
            <AlertIcon/>
            A venir
        </Alert>
    </Grid>
}

export default InformationBeneficiaire
