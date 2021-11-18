import React, {useContext ,createContext, useState} from 'react'
import { Container, Inner,Frame, Title,Item,Header,Body } from './styles/accordian'

const ToggleContext = createContext();

export default function Accordian({children, ...restProps}){

    return (
        <Container{...restProps}>
        <Inner>{children}
        </Inner>

        </Container>
    )


}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {

    return <Title {...restProps}>{children}</Title>
}

Accordian.Frame = function AccordianFrame({ children, ...restProps }) {

    return <Frame {...restProps}>{children}</Frame>
}


//this is where all the state is going to be passed
Accordian.Item = function AccordianItem({ children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)
   
    //Using a Provider to pass the value to the Header, The provider provies the ability to access the store, To get my components to actually use and update the store for state,

return <ToggleContext.Provider value = {{ toggleShow, setToggleShow}} >
    <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
};

Accordian.Header = function AccordianHeader({ children, ...restProps}) {

   const{toggleShow, setToggleShow} = useContext(ToggleContext)

   //We want to return the chlild value
return (
    <Header 
        onClick={() => setToggleShow ((toggleShow) => !toggleShow)}  
    {...restProps}
        >
        {children}
    </Header>
        );

};

Accordian.Body = function AccordianBody({ children, ...restProps}) {

    const { toggleShow } = useContext(ToggleContext);
//The question mark ? is an alternative to an if statement best used in the case where one of two values will be assigned to a variable based on a conditional statement.
//Conditional Ternary Operator

    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
