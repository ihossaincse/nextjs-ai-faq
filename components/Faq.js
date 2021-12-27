import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import FAQ_LIST from "../data/faq.json";

const Faq = ({ index, setIndex }) => {
    return (
        <Flex direction="column" p="4">
            <Box mb="8">
                <Heading size="lg">Frequently Asked Questions</Heading>
            </Box>
            <Accordion index={index}>
                {FAQ_LIST.map((faq) => (
                    <AccordionItem key={faq.id} id={`accordion-item-${faq.id}`} name={`accordion-item-${faq.id}`}>
                        <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                           <Box flex="1" textAlign="left">
                                <Text fontWeight="semibold" fontSize="2xl">{faq.question}</Text>
                           </Box>
                        </AccordionButton>  
                        <AccordionPanel pb="4">
                            {faq.answer}
                        </AccordionPanel>   
                    </AccordionItem>
                ))}
            </Accordion>
        </Flex>
    )
}

export default Faq
