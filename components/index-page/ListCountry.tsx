import { gql, useQuery } from "@apollo/client";
import { Avatar, Box, Icon, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

interface Props {
    searchCountry: string;
}

const ListCountry: React.FC<Props> = ({ searchCountry }) => {
    const [errorText, setErrorText] = useState<string>("")
    const GET_COUNTRY = gql`
        query Query {
            country(code: "${searchCountry.toUpperCase()}") {
                name
                native
                capital
                emoji
                currency
                languages {
                code
                name
                }
            }
        }
        `;
    const { data } = useQuery(GET_COUNTRY);

    useEffect(() => {
        if (!data?.country && searchCountry.length > 0) {
            setTimeout(() => setErrorText("Not Found"), 1000)
        }

        if (searchCountry.length === 0) {
            setErrorText("")
        }
    }, [searchCountry, data?.country])

    return (
        <Box
            position="absolute"
            top='70px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap={1}
        >
            {data?.country?.name ?
                <ReactCountryFlag
                    countryCode={searchCountry}
                    svg
                    style={{
                        width: '32px',
                        height: '32px',
                    }}
                    title={data?.country?.name}
                /> : null}
            <Typography color='white' fontSize='24px' fontWeight='500'>{data?.country?.name || errorText}</Typography>
        </Box >
    )
}

export default ListCountry