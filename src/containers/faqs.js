import faqsData from "../fixtures/faqs.json";
import React from "react";
import { Accordion, OptForm } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try It Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your Email to create or renew your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
