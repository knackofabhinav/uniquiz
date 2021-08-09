import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useData } from "../../contexts/DataProvider";
import { Option, Question } from "../../utils/quizData.types";

export default function Result() {
    const {
        state: { score, currentQuiz },
    } = useData();

    const optionColor = (option: Option, question: Question) => {
        if (option.isAnswer) return "teal"
        if (option._id === question.selectedOptionId && !option.isAnswer) {
            return "#E53E3E"
        }
    }
    return (
        <div>
            <Header title="Result" />
            <Flex direction="column" px="2rem" py="2rem">
                <Text fontWeight="bold" fontSize="4xl">
                    Final Score: <Text color="teal">{score} / {currentQuiz?.totalScore}</Text>
                </Text>

                {currentQuiz?.questions.map((question) => (
                    <Flex direction="column" my="2rem">
                        <Text fontWeight="bold" fontSize="lg" my="1rem">{question.question}</Text>
                        {question.options.map((option) => (
                            <Flex justifyContent="center">
                                <Text rounded="lg"
                                    w="90%"
                                    my="2"
                                    p="1rem"
                                    maxWidth="40rem"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    boxShadow="dark-lg"
                                    backgroundColor={optionColor(option, question)}
                                >
                                    {option.option}
                                </Text>
                            </Flex>
                        ))}
                        <Text fontSize="lg" fontWeight="bold" py="1rem">Explaination:</Text>
                        <Text fontSize="lg" fontWeight="bold" fontStyle="oblique" color="teal">{question.options.map(option => option?.explaination)}</Text>
                    </Flex>
                ))}
                <Link to="/"><Button>Let's Play Some More Quiz?</Button></Link>
            </Flex>
        </div>
    );
}
