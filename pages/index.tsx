import { useState } from 'react'
import ListCountry from '../components/index-page/ListCountry'
import SearchCountry from '../components/index-page/SearchCountry'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Box } from '@mui/material';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

export default function Home() {
  const [searchCountry, setSearchCountry] = useState<string>("")
  const [errorText, setErrorText] = useState<string>("")
  return (
    <ApolloProvider client={client}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#bc4749"
        boxSizing="border-box"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <SearchCountry searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
          <ListCountry searchCountry={searchCountry} setErrorText={setErrorText} errorText={errorText} />
        </Box>
      </Box>
    </ApolloProvider>
  )
}
