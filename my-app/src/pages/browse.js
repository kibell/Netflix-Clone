import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from '../hooks';
import selectionFilter from "../utils/selection-filter";


export default function Browse() {

    const {series} = useContent('series');
    const {films} = useContent('films');


    const slides = selectionFilter({series, films})



    console.log(series)
    console.log(films)
    console.log(slides)



    //this utility is going to allow us to pass in the series and films

    return <BrowseContainer slides={slides} />


}