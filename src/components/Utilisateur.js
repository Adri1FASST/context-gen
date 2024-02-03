import {Field} from "formik";
import {
    Checkbox, Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid, GridItem,
    Input, Radio,
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

const Utilisateur = ({props}) => {

    return <Grid templateColumns='repeat(2, 1fr)' gap={12}>
        <Field name='role' validate={validateName}>
            {({field, form}) => (
                <FormControl size='md' isInvalid={form.errors.role && form.touched.role}>
                    <FormLabel>Role</FormLabel>
                    <Select
                        {...field}
                        defaultValue={head(roleOptions)}
                    >
                        {map(({label, value}) => <option value={value}>{label}</option>, roleOptions)}
                    </Select>
                    <FormErrorMessage>{form.errors.role}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='brokerId' validate={validateBrokerId}>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.brokerId && form.touched.brokerId}>
                    <FormLabel>BrokerId</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.brokerId}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='network'>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.network && form.touched.network}>
                    <FormLabel>Réseau</FormLabel>
                    <Select
                        {...field}
                        defaultValue={head(networkOptions)}
                    >
                        {map(({label, value}) => <option value={value}>{label}</option>, networkOptions)}
                    </Select>
                    <FormErrorMessage>{form.errors.network}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='isCss'>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.isCss && form.touched.isCss}>
                    <FormLabel>Complémentaire Santé Solidaire</FormLabel>
                    <RadioGroup defaultValue={field.value}
                                onChange={(value) => props.setFieldValue('isCss', value)}>
                        <Stack spacing={5} direction='row'>
                            <Radio value='true'>
                                Oui
                            </Radio>
                            <Radio value='false'>
                                Non
                            </Radio>
                        </Stack>
                    </RadioGroup>
                    <FormErrorMessage>{form.errors.isCss}</FormErrorMessage>
                </FormControl>
            )}
        </Field>

        <Field name='decrochage'>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.decrochage && form.touched.decrochage}>
                    <FormLabel>Décrochage</FormLabel>
                    <Select
                        {...field}
                        defaultValue={head(decrochageOptions)}
                    >
                        {map(({label, value}) => <option value={value}>{label}</option>, decrochageOptions)}
                    </Select>
                    <FormErrorMessage>{form.errors.decrochage}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='cspLabel' validate={validateName}>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.cspLabel && form.touched.cspLabel}>
                    <FormLabel>Label CSP</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.cspLabel}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='originLabel' validate={validateName}>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.originLabel && form.touched.originLabel}>
                    <FormLabel>Canal</FormLabel>
                    <Input size='md' w={"100%"} p={2} rounded={"md"} {...field}/>
                    <FormErrorMessage>{form.errors.originLabel}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='birthDate' validate={validateName}>
            {({field, form}) => (
                <FormControl isInvalid={form.errors.birthDate && form.touched.birthDate}>
                    <FormLabel htmlFor="published-date">
                        Date de naissance
                        <Tag size={"sm"} variant='outline'
                             colorScheme='blue' ml={1}>
                            {isNil(field.value) ? "?" : moment().diff(moment(field.value), 'years')} ans
                        </Tag>
                    </FormLabel>
                    <DatePicker
                        id="published-date"
                        {...field}
                        locale="fr"
                        selected={field.value}
                        dateFormat="P"
                        onChange={(date) => props.setFieldValue('birthDate', date)}
                    />

                    <FormErrorMessage>{form.errors.birthDate}</FormErrorMessage>
                </FormControl>
            )
            }
        </Field>
    </Grid>
}

export default Utilisateur
