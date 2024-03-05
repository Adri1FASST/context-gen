import React from 'react'
import {Form, Formik} from 'formik';
import {Box, Button, Divider, Flex, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import buildContext from "../lib/buildContext";
import {assoc, compose, isEmpty, modify} from "ramda";
import {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
import {useToast} from '@chakra-ui/react'
import {CopyIcon, RepeatClockIcon} from '@chakra-ui/icons'
import moment from 'moment';
import Utilisateur from "./Utilisateur";
import InformationBeneficiaire from "./InformationBeneficiaire";
import Adherent from "@/components/Adherent";

registerLocale('fr', fr)

const ContextForm = ({value, setValue, onCopy, environment}) => {

    const toast = useToast()

    // const [diffBirthDate, setDiffBirthDate] = useState()

    return <GridItem colSpan={2}>
        <Flex>
            <Tabs display={"flex"} variant='unstyled'>
                <Grid templateColumns='repeat(5, 1fr)' gap={5}>
                    <GridItem colSpan={1}>
                        <TabList
                            flexDirection={"column"}>
                            <Tab borderRadius={"5px"} px={"4px"} mb={10} w={"130px"}
                                 _selected={{color: 'white', bg: 'blue.500'}}>Utilisateur</Tab>
                            <Tab borderRadius={"5px"} px={"4px"} mb={10} w={"130px"}
                                 _selected={{color: 'white', bg: 'blue.500'}}>Adhérent</Tab>
                            <Tab borderRadius={"5px"} px={"4px"} mb={10} w={"130px"}
                                 _selected={{color: 'white', bg: 'blue.500'}}>Bénéficiaire(s)</Tab>
                        </TabList>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Divider orientation='vertical'/>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Formik
                            initialValues={{
                                "network": "Sofraco",
                                "from": "salesForce",
                                "role": "BROKER",
                                "brokerId": 123,
                                "originLabel": "Site internet MI",
                                "subscriptionStatus": "MEMBER",
                                "cspLabel": "Agent territorial",
                                "birthDate": new Date(2002, 1, 30),
                                "isCss": "false",
                                "decrochage": "salesforce",
                                "customerPhoneNumber": "0610203040",
                                "customerFirstName": "Jean",
                                "customerLastName": "Dupont",
                            }}
                            onSubmit={(values, actions) => {
                                const response = compose(
                                    c => JSON.stringify(c, null, 4),
                                    buildContext,
                                    assoc('environment', environment),
                                    modify('birthDate', date => moment(date).format('YYYY-MM-DD')),
                                    modify('isCss', JSON.parse)
                                )(values)

                                setValue(response)

                                actions.setSubmitting(false)
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <TabPanels>
                                        <TabPanel p={0}>
                                            <Utilisateur props={props}/>
                                        </TabPanel>
                                        <TabPanel p={0}>
                                            <Adherent props={props}/>
                                        </TabPanel>
                                        <TabPanel p={0}>
                                            <InformationBeneficiaire/>
                                        </TabPanel>
                                    </TabPanels>
                                    <Flex className={"button-container"} borderTopRadius={"5px"}>
                                        <Button
                                            mt={3}
                                            mb={1}
                                            colorScheme='teal'
                                            isLoading={props.isSubmitting}
                                            type='submit'
                                            onClick={() =>
                                                toast({
                                                    position: 'bottom-left',
                                                    render: () => (
                                                        <Box color='white' p={3} borderRadius={"5px"}
                                                             bg={`${isEmpty(props.errors) ? 'green' : 'red'}.500`}>
                                                            {isEmpty(props.errors) ? "Un nouveau contexte a été généré" : "Une erreur est survenue"}
                                                        </Box>
                                                    ),
                                                })
                                            }

                                        >
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Let's generate !
                                        </Button>
                                        <Button
                                            isDisabled={isEmpty(value)}
                                            mt={3}
                                            mb={1}
                                            onClick={() => {
                                                toast({
                                                    position: 'bottom-left',
                                                    render: () => (
                                                        <Box color='white' p={3} borderRadius={"5px"} bg='blue.500'>
                                                            Le contexte a bien été copié
                                                        </Box>
                                                    ),
                                                })
                                                onCopy()
                                            }
                                            }
                                            colorScheme='messenger'
                                            isLoading={props.isSubmitting}
                                            type='button'
                                        >
                                            Copy
                                            <CopyIcon ml={2}/>
                                        </Button>

                                        <Button
                                            mt={3}
                                            mb={1}
                                            onClick={() => window.location.reload()}
                                            colorScheme='red'
                                            type='button'
                                        >
                                            <RepeatClockIcon/>
                                        </Button>

                                    </Flex>
                                </Form>
                            )
                            }
                        </Formik>
                    </GridItem>
                </Grid>
            </Tabs>
        </Flex>
    </GridItem>
}

export default ContextForm
