import Image from "next/image";
import {
  Column,
  Row,
  Heading,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, blog, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: blog.image,
    path: blog.path,
  });
}

export default function HobbiesPage() {
  return (
    <Column
      maxWidth="m"
      paddingTop="24"
      paddingBottom="48"
      gap="48"
      className="page-animate"
    >
      {/* SEO */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={blog.path}
        title={blog.title}
        description={blog.description}
        image={blog.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <Column gap="16" horizontal="center" s={{ textAlign: "center" }}>
        <Heading variant="display-strong-l">
          Life outside of tech
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          When I am not staring at a terminal or a slide deck, this is what I am
          usually up to. These are the things that keep me grounded and remind
          me there is more to life than latency and grades.
        </Text>
      </Column>

      {/* MOTORCYCLES */}
      <Column gap="24">
        {/* Riding motorcycles */}
        <Column gap="12">
          <Heading variant="heading-strong-m">Riding motorcycles</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Riding is the easiest way for me to get out of my own head. The road
            forces you to pay attention to what is right in front of you, and
            the bike gives you immediate feedback for every small decision you
            make. It's focused, steady, and a kind of peace you can't really get
            anywhere else.
          </Text>

          <Row className="hobbies-image-row">
            <div className="hobbies-image-card">
              <Image
                src="/images/hobbies/moto-riding-1.jpg"
                alt="Riding a motorcycle"
                width={600}
                height={360}
              />
            </div>
            <div className="hobbies-image-card">
              <Image
                src="/images/hobbies/moto-riding-2.jpg"
                alt="On the road on a bike"
                width={600}
                height={360}
              />
            </div>
          </Row>
        </Column>

        {/* Wrenching */}
        <Column gap="12">
          <Heading variant="heading-strong-m">Wrenching &amp; volunteering</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            On some weekends, I help out at a local motorcycle workshop. It's
            unpaid and mostly unglamorous: changing oil, cleaning parts, holding
            fairings in place, sweeping the floor. It's physically tiring work
            that gives me a real respect for the people who do it every day, but
            I never leave the workshop without a smile.
          </Text>

          <Row className="hobbies-image-row">
            <div className="hobbies-image-card">
              <Image
                src="/images/hobbies/moto-wrench-1.jpg"
                alt="Working on a motorcycle"
                width={600}
                height={360}
              />
            </div>
            <div className="hobbies-image-card hobbies-image-card--tall">
              <Image
                src="/images/hobbies/moto-review.png"
                alt="Google review from a motorcycle workshop"
                width={600}
                height={360}
              />
            </div>
          </Row>
        </Column>
      </Column>

      {/* DOG */}
      <Column gap="16">
        <Heading variant="heading-strong-l">Maya the dog</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          When I'm not on a bike or in front of a screen, I'm probably hanging out with my
          dog, Maya. She has a talent for dragging me outdoors, getting me
          moving, and reminding me to keep things simple; in the best ways.
        </Text>

        <Row className="hobbies-image-row">
          <div className="hobbies-image-card">
            <Image
              src="/images/hobbies/dog-1.jpg"
              alt="Walking my dog"
              width={600}
              height={360}
            />
          </div>
          <div className="hobbies-image-card">
            <Image
              src="/images/hobbies/dog-2.jpg"
              alt="Relaxing with my dog"
              width={600}
              height={360}
            />
          </div>
        </Row>
      </Column>

      {/* MTG */}
      <Column gap="12">
        <Heading variant="heading-strong-l">Magic: The Gathering</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I've played Magic on and off for years. I enjoy the strategic side:
          building decks, thinking in probabilities, and making small decisions
          that still fit into a larger gameplan. It is a nice mix of
          problem-solving and social time, with zero real-world stakes attached.
        </Text>
      </Column>

      {/* Guitar */}
      <Column gap="16">
        <Heading variant="heading-strong-l">Guitar</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I'm very much a bedroom guitarist. I mostly play for myself late at
          night or in between tasks, learning songs I like, messing around with
          tones, and recording the occasional cover track. It's one of the easiest
          ways for me to unwind after a long day.
        </Text>
      </Column>

      {/* Reading */}
      <Column gap="16">
        <Heading variant="heading-strong-l">What I'm reading now</Heading>

        <Text variant="body-default-m" onBackground="neutral-weak">
          I try to always have one book going for fun and one that sharpens how
          I think. The mix changes over time, but reading is one habit I keep
          coming back to.
        </Text>

        {/* Book covers */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          {/* Circe */}
          <a
            href="https://www.goodreads.com/book/show/36249078-circe"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "130px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "165px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/images/hobbies/books/circe.jpg"
                  alt="Circe book cover"
                  width={110}
                  height={165}
                />
              </div>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                }}
              >
                <strong>Circe</strong>
                <br />
                Madeline Miller
              </p>
            </div>
          </a>

          {/* Algorithms Illuminated */}
          <a
            href="https://www.goodreads.com/book/show/36323236-algorithms-illuminated-part-1"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "130px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "165px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <Image
                  src="/images/hobbies/books/algorithms-illuminated.jpg"
                  alt="Algorithms Illuminated book cover"
                  width={110}
                  height={165}
                />
              </div>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "0.875rem",
                  lineHeight: 1.4,
                }}
              >
                <strong>Algorithms Illuminated (Part 1)</strong>
                <br />
                Tim Roughgarden
              </p>
            </div>
          </a>
        </div>
      </Column>
    </Column>
  );
}
