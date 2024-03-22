import { Badge, Flex } from "@chakra-ui/react";
import SuggestionBar from "./SuggestionBar";
import SuggestionCard from "./SuggestionCard";

const suggestions = [
  {
    id: "1",
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack",
    badge: "Enhancement",
    comments: 2,
    upvotes: "112",
    upvotePlace: "center",
  },
  {
    id: "2",
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    badge: "Feature",
    comments: 4,
    upvotes: "99",
    upvotePlace: "end",
  },
  {
    id: "3",
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    badge: "Feature",
    comments: 1,
    upvotes: "65",
    upvotePlace: "end",
  },
  {
    id: "4",
    title: "Allow image/video upload to feedback",
    description: "Images and screencasts can enhance comments on solutions.",
    badge: "Enhancement",
    comments: 2,
    upvotes: "51",
    upvotePlace: "start",
  },
  {
    id: "5",
    title: "Ability to follow others",
    description: "Stay updated on comments and solutions other people post.",
    badge: "Feature",
    comments: 3,
    upvotes: "42",
    upvotePlace: "end",
  },
  {
    id: "6",
    title: "Preview images not loading",
    description:
      "Challenge preview images are missing when you apply a filter.",
    badge: "Bug",
    comments: 0,
    upvotes: "3",
    upvotePlace: "center",
  },
];

export default function Suggestions() {
  return (
    <Flex flexDir="column" gap="5">
      <SuggestionBar />
      {suggestions.map((suggestion) => (
        <SuggestionCard
          comments={suggestion.comments}
          description={suggestion.description}
          placement={suggestion.upvotePlace}
          title={suggestion.title}
          upvotes={suggestion.upvotes}
          key={suggestion.id}
          badge={
            <Badge
              bg="light-primary"
              color="primary"
              px="3"
              py="2"
              fontSize="13"
              borderRadius="10"
              fontWeight="semibold"
            >
              {suggestion.badge}
            </Badge>
          }
        />
      ))}
    </Flex>
  );
}
