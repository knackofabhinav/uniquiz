import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Quiz } from "../../utils/quizData.types";


export function QuizCard({ quizItem }: { quizItem: Quiz }) {
    return (
        <Link to={`/quiz/${quizItem._id}`}>
            <Flex m="2rem" _hover={{ boxShadow: "dark-lg" }} boxShadow="lg" transition='all 0.5s ease-in-out' width="25rem" rounded="md" justify="center" direction="column" align="center" >
                <Image
                    m="1rem"
                    w='50%'
                    src={quizItem.coverUrl}
                    alt={quizItem.name}
                />
                <Flex direction="column" p="1rem">
                    <Text fontWeight="bold" fontStyle="italic" fontSize="2xl">{quizItem.name}</Text>
                    <Text >{quizItem.questions.length} Questions</Text>
                </Flex>
            </Flex>
        </Link >
    );
}