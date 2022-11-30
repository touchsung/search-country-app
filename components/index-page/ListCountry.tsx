import { gql, useQuery } from "@apollo/client";
import { Avatar, Box, Icon, TextField, Typography } from "@mui/material"

interface Props {
    searchCountry: string;
    errorText: string;
    setErrorText: React.Dispatch<React.SetStateAction<string>>
}

const ListCountry: React.FC<Props> = ({ errorText, setErrorText, searchCountry }) => {

    const GET_LOCATIONS = gql`
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
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (!loading && !data?.country && searchCountry.length > 0) {
        setTimeout(() => setErrorText("Not Found"), 1000)
    } else if (searchCountry.length === 0) {
        setErrorText("")
    }
    return (
        <Box position="absolute" top='70px'>
            <Typography color='white' fontSize='24px' fontWeight='500'>{data?.country?.name || errorText}</Typography>
        </Box>
    )
}

export default ListCountry