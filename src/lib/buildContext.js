import {v4 as uuidv4} from 'uuid';
import {equals, isEmpty} from "ramda";
import moment from 'moment';

const buildContext = ({
                          environment,
                          network,
                          role,
                          originLabel,
                          subscriptionStatus,
                          cspLabel,
                          birthDate,
                          isCss,
                          brokerId,
                          decrochage
                      }) => (environment === 'dev' ? {
    externalId: uuidv4(),
    customer: {
        activePolicies: [
            {
                cancellationApplicant: 'CLIENT',
                name: 'CONCURRENCE_SANTE_ASSUREUR_AYANT_DROIT'
            }
        ],
        addresses: [
            {
                city: 'Angoulême',
                country: 'France',
                fields: [
                    '5 rue des lilas'
                ],
                zipCode: '31000'
            }
        ],
        bankAccounts: [
            {
                bankName: 'ALLIANZ BANQUE',
                bic: 'AGFBFRCC',
                iban: 'FR1817569000408261216145U10',
                ownerName: 'Test',
                type: 'PRELEVEMENT'
            }
        ],
        subscriptionStatus,
        birthCity: 'Lieoux',
        birthCountry: 'France',
        birthDate,
        birthName: 'Dupont',
        birthZipCode: '31800',
        civility: 'MISTER',
        customCsp: {
            externalId: '20',
            label: cspLabel
        },
        emails: [
            {
                value: 'marianne.stalter@fasst.io'
            }
        ],
        externalId: 'AAAA01',
        firstName: 'Jean',
        isMadelin: true,
        madelinMonth: 'JUNE',
        isTns: true,
        lastName: 'Dupont',
        maritalStatus: 'COUPLE',
        phones: [
            {
                internationalCode: 'string',
                number: '0'
            }
        ],
        GDPRs: [
            {
                isConsent: false
            }
        ],
        socialSecurity: {
            isTeletransmission: true,
            key: '37',
            number: '1870831300200',
            organismCode: '',
            regime: 'REGIME_GLOBAL',
            twinsRank: '1',
            isCSS: isCss,
            dateCSS: "1970-01-01T05:37:00.101Z",
            isAlsaceMoselle: false
        }
    },
    grantees: [{
        externalId: 'B_01',
        firstName: 'Josianne',
        lastName: 'Dupont',
        customCsp: {
            externalId: '1',
            label: 'label'
        },
        attachedSocialSecurities: [
            {
                entityId: 'B_01',
                type: 'grantee'
            }
        ],
        birthDate: '19850219',
        civility: 'MISS',
        isTNS: true,
        type: 'SPOUSE',
        socialSecurity: {
            isTeletransmission: true,
            key: '81',
            number: '2850250005200',
            organismCode: '',
            regime: 'REGIME_GLOBAL',
            twinsRank: '1',
            isAlsaceMoselle: false
        }
    }],
    collectionNeeds: [
        {
            budget: 'Moins de 50 euros',
            relations: [
                {
                    entityId: 'AAAA01',
                    type: 'customer'
                }
            ],
            healthNeeds: [
                {
                    level: '1',
                    module: 'HOSPITALISATION'
                },
                {
                    level: '2',
                    module: 'SOINS_COURANTS'
                },
                {
                    level: '3',
                    module: 'OPTIQUE'
                },
                {
                    level: '2',
                    module: 'DENTAIRE'
                },
                {
                    level: '2',
                    module: 'AIDE_AUDITIVE'
                }
            ]
        },
        {
            budget: 'Moins de 50 euros',
            relations: [
                {
                    entityId: 'B_01',
                    type: 'grantee'
                }
            ],
            healthNeeds: [
                {
                    level: '3',
                    module: 'HOSPITALISATION'
                },
                {
                    level: '1',
                    module: 'SOINS_COURANTS'
                },
                {
                    level: '1',
                    module: 'OPTIQUE'
                },
                {
                    level: '2',
                    module: 'DENTAIRE'
                },
                {
                    level: '3',
                    module: 'AIDE_AUDITIVE'
                }
            ]
        }
    ],
    offers: [
        {
            effectDate: moment().add(1, 'day').format("YYYY-MM-DD"),
            packs: [
                {
                    customerId: 'AAAA01',
                    pricings: [
                        {
                            moduleId: 'PAVMOINS80'
                        }
                    ]
                },
                {
                    granteeId: 'B_01',
                    pricings: [
                        {
                            moduleId: 'PAVMOINS80'
                        }
                    ]
                }
            ]
        }
    ],
    svcs: [
        {
            isExternal: true,
            label: equals(decrochage, 'aucun') ? null : decrochage,
            metadata: `{"quoteInsuranceName":"NOM_ASSUREUR_DEVIS","quoteInsuranceId":"CODE_ASSUREUR_DEVIS","opportunityType":"OPP_TYPE","opportunityId":"NUM_OPPORTUNITE","originCode":"OPP_CODE_ORIGINE","canal":${JSON.stringify(originLabel)},"ownershipId":"CODE_ACTEUR","agencyId":"CODE_SITE" ${!isEmpty(brokerId) ? `,${JSON.stringify("brokerId")}:${JSON.stringify(brokerId)}` : ""}}`
        }
    ],
    users: [
        {
            addresses: [
                {
                    city: 'Angoulême',
                    country: 'France',
                    department: '31',
                    fields: [
                        '10 rue de la gare'
                    ],
                    zipCode: '31000'
                }
            ],
            emails: [
                {
                    value: 'marianne.stalter@fasst.io'
                }
            ],
            externalId: 'USER01',
            firstName: 'Test',
            lastName: 'Test',
            network: equals(network, "aucun") ? null : network,
            phones: [
                {
                    internationalCode: '+33',
                    number: '102020305'
                }
            ],
            roles: [
                role
            ],
            companyName: 'test',
            ORIAS: '0'
        }
    ]
} : {
    externalId: uuidv4(),
    customer: {
        activePolicies: [
            {
                cancellationApplicant: 'CLIENT',
                name: 'CONCURRENCE_SANTE_ASSUREUR_AYANT_DROIT'
            }
        ],
        addresses: [
            {
                city: 'Angoulême',
                country: 'France',
                fields: [
                    '5 rue des lilas'
                ],
                zipCode: '31000'
            }
        ],
        bankAccounts: [
            {
                bankName: 'ALLIANZ BANQUE',
                bic: 'AGFBFRCC',
                iban: 'FR1817569000408261216145U10',
                ownerName: 'Test',
                type: 'PRELEVEMENT'
            }
        ],
        subscriptionStatus,
        birthCity: 'Lieoux',
        birthCountry: 'France',
        birthDate,
        birthName: 'Dupont',
        birthZipCode: '31800',
        civility: 'MISTER',
        customCsp: {
            externalId: '20',
            label: cspLabel
        },
        emails: [
            {
                value: 'marianne.stalter@fasst.io'
            }
        ],
        externalId: 'AAAA01',
        firstName: 'Jean',
        isMadelin: true,
        madelinMonth: 'JUNE',
        isTns: true,
        lastName: 'Dupont',
        maritalStatus: 'COUPLE',
        phones: [
            {
                internationalCode: 'string',
                number: '0'
            }
        ],
        GDPRs: [
            {
                isConsent: false
            }
        ],
        socialSecurity: {
            isTeletransmission: true,
            key: '37',
            number: '1870831300200',
            organismCode: '',
            regime: 'REGIME_GLOBAL',
            twinsRank: '1',
            isCSS: isCss,
            dateCSS: "1970-01-01T05:37:00.101Z",
            isAlsaceMoselle: false
        }
    },
    grantees: [{
        externalId: 'B_01',
        firstName: 'Josianne',
        lastName: 'Dupont',
        customCsp: {
            externalId: '1',
            label: 'label'
        },
        attachedSocialSecurities: [
            {
                entityId: 'B_01',
                type: 'grantee'
            }
        ],
        birthDate: '19850219',
        civility: 'MISS',
        isTNS: true,
        type: 'SPOUSE',
        socialSecurity: {
            isTeletransmission: true,
            key: '81',
            number: '2850250005200',
            organismCode: '',
            regime: 'REGIME_GLOBAL',
            twinsRank: '1',
            isAlsaceMoselle: false
        }
    }],
    collectionNeeds: [
        {
            budget: 'Moins de 50 euros',
            relations: [
                {
                    entityId: 'AAAA01',
                    type: 'customer'
                }
            ],
            healthNeeds: [
                {
                    level: '1',
                    module: 'HOSPITALISATION'
                },
                {
                    level: '2',
                    module: 'SOINS_COURANTS'
                },
                {
                    level: '3',
                    module: 'OPTIQUE'
                },
                {
                    level: '2',
                    module: 'DENTAIRE'
                },
                {
                    level: '2',
                    module: 'AIDE_AUDITIVE'
                }
            ]
        },
        {
            budget: 'Moins de 50 euros',
            relations: [
                {
                    entityId: 'B_01',
                    type: 'grantee'
                }
            ],
            healthNeeds: [
                {
                    level: '3',
                    module: 'HOSPITALISATION'
                },
                {
                    level: '1',
                    module: 'SOINS_COURANTS'
                },
                {
                    level: '1',
                    module: 'OPTIQUE'
                },
                {
                    level: '2',
                    module: 'DENTAIRE'
                },
                {
                    level: '3',
                    module: 'AIDE_AUDITIVE'
                }
            ]
        }
    ],
    offers: [
        {
            effectDate: moment().add(1, 'day').format("YYYY-MM-DD"),
            packs: [
                {
                    customerId: 'AAAA01',
                    pricings: [
                        {
                            moduleId: 'PAVMOINS80'
                        }
                    ]
                },
                {
                    granteeId: 'B_01',
                    pricings: [
                        {
                            moduleId: 'PAVMOINS80'
                        }
                    ]
                }
            ]
        }
    ],
    svcs: [
        {
            isExternal: true,
            label: equals(decrochage, 'aucun') ? null : decrochage,
            metadata: `{"quoteInsuranceName":"NOM_ASSUREUR_DEVIS","quoteInsuranceId":"CODE_ASSUREUR_DEVIS","opportunityType":"OPP_TYPE","opportunityId":"NUM_OPPORTUNITE","originCode":"OPP_CODE_ORIGINE","canal":${JSON.stringify(originLabel)},"ownershipId":"CODE_ACTEUR","agencyId":"CODE_SITE" ${!isEmpty(brokerId) ? `,${JSON.stringify("brokerId")}:${JSON.stringify(brokerId)}` : ""}}`
        }
    ],
    users: [
        {
            addresses: [
                {
                    city: 'Angoulême',
                    country: 'France',
                    department: '31',
                    fields: [
                        '10 rue de la gare'
                    ],
                    zipCode: '31000'
                }
            ],
            emails: [
                {
                    value: 'marianne.stalter@fasst.io'
                }
            ],
            externalId: 'USER01',
            firstName: 'Test',
            lastName: 'Test',
            network: equals(network, "aucun") ? null : network,
            phones: [
                {
                    internationalCode: '+33',
                    number: '102020305'
                }
            ],
            roles: [
                role
            ],
            companyName: 'test',
            ORIAS: '0'
        }
    ]
})

export default buildContext;
