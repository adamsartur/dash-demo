import { Input } from "./components/Form/input";
import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
