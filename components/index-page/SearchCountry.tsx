import styled from "@emotion/styled";
import { TextField } from "@mui/material"

interface Props {
    searchCountry: string;
    setSearchCountry: React.Dispatch<React.SetStateAction<string>>
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& label': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&:hover fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
            color: 'white'
        },
    },
    '& input': {
        color: 'white'
    },
});

const SearchCountry: React.FC<Props> = ({ searchCountry, setSearchCountry }) => {
    return (
        <CssTextField
            id="searchCountry label"
            label="Search Country"
            variant="outlined"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            autoComplete="off"
        />
    )
}

export default SearchCountry