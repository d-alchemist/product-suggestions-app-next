import { Box, Flex, Text, Badge } from "@chakra-ui/react";

const badges = [
  { text: "All", selected: true },
  { text: "UI", selected: false },
  { text: "UX", selected: false },
  { text: "Enhancement", selected: false },
  { text: "Bug", selected: false },
  { text: "Feature", selected: false },
];

const issues = [
  { text: "Planned", number: "2", color: "orange-primary" },
  { text: "In-Progress", number: "3", color: "pink-primary" },
  { text: "Live", number: "1", color: "blue" },
];

export default function SideNav() {
  return (
    <Flex flexDir="column" gap="5">
      <Box
        p="7"
        borderRadius="10"
        bgRepeat="no-repeat"
        bgSize="cover"
        className="sidebar-bg"
      >
        <Box pt="10" pb="2" color="white">
          <Text fontSize="xl" fontWeight="bold">
            Frontend Mentor
          </Text>
          <Text fontSize="15px" fontWeight="medium" opacity="0.75">
            Feedback Board
          </Text>
        </Box>
      </Box>
      <Flex p="7" gap="5" flexWrap="wrap" bg="white" borderRadius="10">
        {badges.map((badge) => (
          <Badge
            bg={badge.selected ? "primary" : "light-primary"}
            color={badge.selected ? "white" : "primary"}
            py="2"
            borderRadius="10"
            px="5"
            fontSize="13"
            key={badge.text}
          >
            {badge.text}
          </Badge>
        ))}
      </Flex>
      <Box bg="white" borderRadius="10">
        <Box px="5" py="8">
          <Flex justify="space-between" alignItems="center">
            <Text fontSize="large" color="secondary" fontWeight="bold">
              Roadmap
            </Text>
            <Text
              fontWeight="bold"
              fontSize="13"
              textDecor="underline"
              color="primary"
            >
              View
            </Text>
          </Flex>
          <Flex flexDir="column" gap="2" mt="2">
            {issues.map((issue) => (
              <RoadMapIssues
                color={issue.color}
                number={issue.number}
                text={issue.text}
                key={issue.text}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

const RoadMapIssues = ({
  color,
  text,
  number,
}: {
  color: string;
  text: string;
  number: string;
}) => {
  return (
    <Flex w="auto" alignItems="center">
      <Box rounded="full" h="2.5" w="2.5" bg={color}></Box>
      <Text ml="4" color="light-secondary">
        {text}
      </Text>
      <Text
        ml="auto"
        color="light-secondary"
        fontWeight="bold"
      >
        {number}
      </Text>
    </Flex>
  );
};
