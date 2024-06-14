import React from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

const InterestsForm = () => {
    return (
        <Stack spacing={4} mt={8}>
            <Box>
                <Text>Softwares</Text>
                <Input type="password" placeholder='********' />
            </Box>
            <Box>
                <Text>Nova senha</Text>
                <Input type="password" placeholder='********' />
            </Box>
            <Box>
                <Text>Confirmar nova senha</Text>
                <Input type="password" placeholder='********' />
            </Box>
            <Button colorScheme='orange'>Alterar senha</Button>
        </Stack>
    );
}

export default InterestsForm;
