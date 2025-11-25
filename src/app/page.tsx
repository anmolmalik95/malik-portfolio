import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="12"
      horizontal="center"
      className="page-animate"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO BLOCK (unchanged sizes) */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {/* Headline */}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          {/* Subline */}
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>

          {/* Three horizontal CTAs */}
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="center"
            paddingLeft="12"
          >
            <Row gap="12" wrap horizontal="center">
              <Button
                href={work.path}
                variant="secondary"
                size="m"
                weight="default"
              >
                My work
              </Button>
              <Button
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
              >
                About me
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="m"
                weight="default"
              >
                Contact
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* FEATURED PROJECTS SECTION */}
      <RevealFx translateY="16" delay={0.6} fillWidth horizontal="center">
        <Column fillWidth gap="20" horizontal="center">
          <Heading variant="heading-strong-l" align="center">
            Featured Projects
          </Heading>
          <Projects range={[1, 1]} />
        </Column>
      </RevealFx>
    </Column>
  );
}
