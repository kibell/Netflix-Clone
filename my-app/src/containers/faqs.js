import React from 'react'
import faqsData from '../fixtures/faqs.json'
import { Accordian } from '../components'

export function FaqsContainer() {
    return(
        <Accordian>
            <Accordian.Title>Frequently Ask Questions</Accordian.Title>
            {faqsData.map(item => 
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Header>{item.body}</Accordian.Header>
                </Accordian.Item>
            )}
            <Accordian.Item>

            </Accordian.Item>
        </Accordian>
    )

}