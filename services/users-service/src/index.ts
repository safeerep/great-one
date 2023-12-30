import start from "./start";
import dbConnection from "./config/dbConnection";
import envChecker from "./utils/checkers/envChecker";

( async () => {
    try {
        start;
        dbConnection();
        await envChecker()
    } catch (error) {
        console.log(`something went wrong`, error);
    }
})()