import { ReactElement } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ICONS } from "@/utils/constants";

type Props = {
  badge: ReactElement;
  placement: string;
  upvotes: string;
  title: string;
  description: string;
  comments: number;
};

export default function SuggestionCard({
  badge,
  placement,
  upvotes,
  title,
  description,
  comments,
}: Props) {
  return (
    <Flex bg="white" borderRadius="10" px="6" py="6">
      <Flex
        mr="5"
        bg="light-primary"
        flexDir="column"
        alignSelf="start"
        borderRadius="10"
        gap="1.5"
        py="4"
        minW="10"
        px="3"
      >
        <Flex w="full" justify={placement}>
          <Image h="2.5" w="2.5" src={ICONS.chevronUp} alt="chevron up icon" />
        </Flex>
        <Text
          color="secondary"
          textAlign="center"
          fontSize="13px"
          fontWeight="bold"
        >
          {upvotes}
        </Text>
      </Flex>
      <Flex flexDir="column" gap="4">
        <Text
          fontWeight="bold"
          lineHeight="1"
          fontSize="large"
          color="secondary"
        >
          {title}
        </Text>
        <Text color="light-secondary" lineHeight="1" fontWeight="normal" maxW="full">
          {description}
        </Text>
        <Box>{badge}</Box>
      </Flex>
      <Box ml="auto" my="auto">
        <Flex alignItems="center" gap="3">
          <Image src={ICONS.commentIcon} h="5" w="5" alt="comment icon" />
          <Text
            opacity={`${comments < 1 ? "0.5" : "1"}`}
            color="secondary"
            fontWeight="bold"
          >
            {comments}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
