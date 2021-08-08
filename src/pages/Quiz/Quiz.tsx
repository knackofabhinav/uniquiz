import { Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useData } from "../../contexts/DataContext";
import { Option, Question } from "../../utils/quizData.types";

export default function Quiz() {
    const [selectedOptionId, setSelectedOptionId] = useState("");
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { quizId } = useParams();
    const {
        state: { currentQuiz, questionNo, isClickEnabled, score },
        dispatch,
    } = useData();
    const currentQuestion = currentQuiz?.questions[questionNo] as Question;

    const optionColor = (option: Option) => {
        if (!isClickEnabled && option.isAnswer) return "teal"
        if (option._id === selectedOptionId &&
            !option.isAnswer &&
            !isClickEnabled) return "#E53E3E"
    }

    const updateQuestionAndScore = (option: Option) => {
        option.isAnswer
            ? dispatch({
                type: "INCREMENT_SCORE",
                payload: { score: currentQuestion?.points },
            })
            : dispatch({
                type: "DECREMENT_SCORE",
                payload: { score: currentQuestion?.negativePoints },
            });

        questionNo + 1 === currentQuiz?.questions.length
            ? navigate("/result", { replace: true })
            : dispatch({
                type: "INCREMENT_QUESTION_NO",
            });
    };

    const optionClickHandler = async (option: Option) => {
        setSelectedOptionId(() => option._id);
        dispatch({
            type: "SET_SELECTED_OPTION_ID",
            payload: { optionId: option._id, questionId: currentQuestion._id },
        });
        dispatch({ type: "DISABLE_CLICK" });
        setTimeout(() => {
            updateQuestionAndScore(option);
            dispatch({ type: "ENABLE_CLICK" });
        }, 1500);
    };

    useEffect(() => {
        dispatch({ type: "INITIALIZE_CURRENT_QUIZ", payload: { quizId } });
        return () => { };
    }, []);

    return currentQuiz && currentQuestion ? (
        <Flex direction="column" w="100%">
            <Header title={currentQuiz.name} />
            <Flex direction="column">
                <Flex my="2rem" justifyContent="space-around">
                    <Text color={isDark ? "white" : "black"} fontSize="xl">
                        Question No. <Text color="teal" fontSize="2xl" fontWeight="bold"> {questionNo + 1} /{" "}
                            {currentQuiz.questions.length}</Text>
                    </Text>
                    <Text fontSize="xl" >
                        Score: <Text fontWeight="bold" color="teal">{score}</Text>
                    </Text>
                </Flex>
                <Text fontSize="2xl" fontWeight="bold" fontStyle="italic" my="4">{currentQuestion.question}</Text>
                <Flex my={16} align="center" direction="column">
                    {currentQuestion.options.map((option) => {
                        return (
                            <Button
                                rounded="lg"
                                w="90%"
                                my="3"
                                p="2rem"
                                maxWidth="40rem"
                                fontSize="lg"
                                fontWeight="bold"
                                _hover={{ boxShadow: "dark-lg" }} boxShadow="lg" transition='all 0.5s ease-in-out'
                                backgroundColor={optionColor(option)}
                                disabled={!isClickEnabled}
                                onClick={() => optionClickHandler(option)}
                            >
                                {option.option}
                            </Button>
                        );
                    })}
                </Flex>
            </Flex>
        </Flex>
    ) : (<Flex direction="column" m="2rem">
        <Text fontWeight="bold" color="teal" fontSize="4xl">Something Wrong Happened?</Text>
        <Link to="/"><Button rounded="lg"
            w="90%"
            my="3"
            p="2rem"
            maxWidth="40rem"
            fontSize="lg"
            fontWeight="bold"
            _hover={{ boxShadow: "dark-lg" }} boxShadow="lg" transition='all 0.5s ease-in-out'>Go Back to Homepage. </Button></Link>
    </Flex>
    );
}
