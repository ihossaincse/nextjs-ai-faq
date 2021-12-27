import { Box, Button, Flex, Heading, Spacer, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const Navbar = ({ colorFlag }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const firstUpdate = useRef(true);

    useEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;  
        }
        toggleColorMode();
    }, [colorFlag]);

    console.log(colorFlag);
    
    return (
        <div>
            <Flex align="center" boxShadow="base" p="2" mb="2">
                <Box p="2">
                    <Heading size="xl">E-commerce Support</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button onClick={toggleColorMode} colorScheme="teal">
                    Toggle Color Mode
                    </Button>
                </Box>
            </Flex>
        </div>
    )
}

export default Navbar
