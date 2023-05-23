import axios from "axios";
import { useEffect, useState } from "react";
import { Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles";
import CommonButton from "../CommonButton";
import RecipeContainer from "../RecipeContainer";

export default function Main(){
    const [recipeTitle, setRecipeTitle] = useState(null);
    const [recipeImage, setRecipeImage] = useState(null);
    const [recipeIngredients, setRecipeIngredients] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
        headers: {
            'X-RapidAPI-Key': '96f6a1e178msha2d3be65e4682a8p18d692jsn9db863df63cd',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
    };

    useEffect(() => {
        changeRecipeOfDay();
    }, []);

    async function changeRecipeOfDay(){
        const response = await axios.request(options);

        setRecipeTitle(response.data[0].title);
        setRecipeImage(response.data[0].image);
        setRecipeIngredients(response.data[0].ingredients);
    }

    return(
        <SafeAreaView>
            <ScrollView>    
                <RecipeContainer>
                    <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Recipe of day:</Text>
                    <Text style={{color: 'black', fontSize: 30}}>{recipeTitle}</Text>

                    <Image source={{uri: recipeImage}} style={{width: 300, height: 300}}></Image>

                    {recipeIngredients.map((ingredient, index) => {
                        return <Text style={{color: 'black', fontSize: 20, alignSelf: 'flex-start'}}>{index + 1}) - {ingredient}</Text>
                    })}

                    <CommonButton onClick={changeRecipeOfDay} title={"Другой рецепт"} style={styles.button}></CommonButton>
                </RecipeContainer>
            </ScrollView>
        </SafeAreaView>
    );
}        