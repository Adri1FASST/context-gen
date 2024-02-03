import {Field} from "formik";
import {
    Checkbox, Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid, GridItem,
    Input, InputGroup, InputLeftAddon, InputLeftElement, Radio,
    RadioGroup,
    Select,
    Stack, Tag
} from "@chakra-ui/react";
import {head, isNil} from "ramda";
import {decrochageOptions, networkOptions, roleOptions} from "../lib/options";
import DatePicker from "react-datepicker";
import React from "react";
import {validateBrokerId, validateName} from "../validations/validations";
import {map} from 'ramda'
import '../app/date-picker.css'
import moment from 'moment'
import {PhoneIcon} from "@chakra-ui/icons";

const Adherent = ({props}) => {

    return <Grid templateColumns='repeat(2, 1fr)' gap={12}>
        <Field name='subscriptionStatus' validate={validateName}>
            {({field, form}) => (
                <FormControl
                    isInvalid={form.errors.subscriptionStatus && form.touched.subscriptionStatus}>
                    <FormLabel>Statut</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.subscriptionStatus}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='customerFirstName' validate={validateName}>
            {({field, form}) => (
                <FormControl
                    isInvalid={form.errors.customerFirstName && form.touched.customerFirstName}>
                    <FormLabel>Prénom</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.customerFirstName}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='customerLastName' validate={validateName}>
            {({field, form}) => (
                <FormControl
                    isInvalid={form.errors.customerLastName && form.touched.customerLastName}>
                    <FormLabel>Nom</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.customerLastName}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='customerPhoneNumber' validate={validateName}>
            {({field, form}) => (
                <FormControl size='md' isInvalid={form.errors.customerPhoneNumber && form.touched.customerPhoneNumber}>
                    <FormLabel>Numéro de téléphone</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PhoneIcon color='gray.300'/>
                        </InputLeftElement>
                        <Input type='tel' placeholder='téléphone' {...field}/>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.customerPhoneNumber}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    </Grid>
}

export default Adherent
