import { Flex } from "@chakra-ui/react";
import { useData } from "../../contexts/DataProvider";
import { QuizCard } from "../QuizCard/QuizCard"


export default function QuizGrid() {
    const {
        state: { allQuizzes },
    } = useData();
    return (
        <Flex wrap="wrap" justify="center">
            {allQuizzes?.map((quizItem) => (
                <QuizCard quizItem={quizItem} />
            ))}
        </Flex>
    );
}
