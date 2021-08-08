import { Flex, } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import QuizGrid from "../../components/QuizGrid/QuizGrid";
import { useData } from "../../contexts/DataContext";

export default function Home() {
    const { dispatch } = useData();
    useEffect(() => {
        dispatch({ type: "RESET_STATE" });
    }, []);

    return (
        <Flex direction="column" justify="center">
            <Header title={"UniQuiz"} />
            <QuizGrid />
        </Flex>
    );
}
