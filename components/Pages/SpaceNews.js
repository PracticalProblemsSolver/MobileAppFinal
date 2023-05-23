import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeContainer from "../RecipeContainer";
import { useEffect, useState } from "react";

export default function RecipiesBook(){
    const [recipies, setRecipies] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://random-recipes.p.rapidapi.com/ai-quotes/10',
        headers: {
            'X-RapidAPI-Key': '96f6a1e178msha2d3be65e4682a8p18d692jsn9db863df63cd',
            'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com',
        }
    };

    useEffect(() => {
        getRecipies();
    }, []);

    async function getRecipies(){
        const response = await axios.request(options);

        console.log(response.data[0]);
    }

    return(
        <SafeAreaView>
            <ScrollView>
                {/* {recipies.map((recipe) => {
                    return(
                        <RecipeContainer>
                            <Text style={{color: 'black', fontSize: 30}}>{recipe.title}</Text>

                            <Image source={{uri: recipeImage}} style={{width: 300, height: 300}}></Image>

                            {recipe.ingredients.map((ingredient) => {
                                return(
                                    <Text style={{color: 'black', fontSize: 20, alignSelf: 'flex-start'}}> - {ingredient}</Text>
                                );
                            })}
                        
                        </RecipeContainer>
                    );
                })} */}
            </ScrollView>
        </SafeAreaView>
    );
}