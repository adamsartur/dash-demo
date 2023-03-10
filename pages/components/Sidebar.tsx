import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >
            General
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Users
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >
            Automation
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Forms
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Automations
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
