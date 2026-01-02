import { Metadata } from "next";
import { Row, Column, Text, Button } from "@once-ui-system/core";
import { person } from "@/resources";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch regarding roles, collaboration, or my upcoming credit-bearing internship (April 2026).",
};

export default function ContactPage() {
  return (
    <Row
      as="section"
      fillWidth
      paddingY="64"
      paddingX="16"
      horizontal="center"
      vertical="center"
      className="page-animate"
    >
      <Column
        maxWidth="m"
        gap="32"
        horizontal="center"
        s={{ textAlign: "center" }} // safe way to center text
      >
        {/* Heading */}
        <Text as="h1" variant="display-default-xl">
          Let’s get in touch
        </Text>

        {/* Subtitle */}
        <Row maxWidth="l" horizontal="center">
        <Text
            as="p"
            variant="body-default-l"
            onBackground="neutral-weak"
            style={{ textAlign: "center" }}
        >
            I’m currently looking for a{" "}
            <strong>6-month, credit-bearing internship starting April 2026 </strong>
            - ideally in AI, machine learning, infrastructure, or
            customer-facing technical roles such as pre-sales engineering and solutions architecture.
            <br /><br />
            Whether it's opportunities, collaboration, or just talking shop about
            AI, infra, or motorcycles - I’m always happy to chat.
        </Text>
        </Row>



        {/* Buttons */}
        <Row gap="20" horizontal="center" wrap>
          <Button
            href={`mailto:${person.email}`}
            label="Email me"
            prefixIcon="email"
            variant="secondary"
            size="m"
          />

          <Button
            href="https://linkedin.com/in/anmolmalik"
            label="Connect on LinkedIn"
            prefixIcon="linkedin"
            variant="secondary"
            size="m"
          />

          <Button
            href="tel:+6591458733"
            label="Call me"
            prefixIcon="phone"
            variant="secondary"
            size="m"
          />

          <Button
            href="https://wa.me/6591458733"
            label="WhatsApp me"
            prefixIcon="whatsapp"
            variant="secondary"
            size="m"
          />
        </Row>

        {/* Phone number text */}
        <Text variant="body-default-m" onBackground="neutral-weak">
          or just use: <strong>anmolmalik@hotmail.com / +65 9145 8733</strong>
        </Text>
      </Column>
    </Row>
  );
}
