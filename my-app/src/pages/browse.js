import React from "react";
import { useContent } from '../hooks';


export default function Browse() {

    const {series} = useContent('series');
    const {films} = useContent('films');
    console.log(series)
    console.log(films)




    //this utility is going to allow us to pass in the series and films
    
    return <p>Hello form the BROWSE </p>


}