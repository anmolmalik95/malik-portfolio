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
    path: "/hobbies",
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
        path={"/hobbies"}
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
          A look at what I do when I’m not building ML systems, debugging APIs,
          or studying. These are the hobbies that keep me grounded, curious,
          and human.
        </Text>
      </Column>

      {/* MOTORCYCLES */}
      <Column gap="24">
        {/* Riding motorcycles */}
        <Column gap="12">
          <Heading variant="heading-strong-m">Riding motorcycles</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I ride because it clears my head. There’s something very satisfying
            about being fully present on the road, paying attention to the small
            details, and covering distance one kilometre at a time. It’s my
            favourite way to reset after long stretches of work or study.
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
          <Heading variant="heading-strong-m">Wrenching & volunteering</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            On the weekends, I volunteer at a local motorcycle workshop – unpaid –
            mainly to learn and to be around people who genuinely love bikes.
            I help with basic servicing, small repairs, and the unglamorous
            tasks that still matter if you want machines to be safe and reliable.
            It taught me a lot about patience, responsibility, and how much
            trust people place in whoever works on their bike.
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

      {/* 🐕 DOG */}
      <Column gap="16">
        <Heading variant="heading-strong-l">Maya the dog</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          When I’m not on a bike or in front of a screen, I’m usually hanging
          out with my dog. She’s an excellent reminder to touch grass, keep a
          routine, and not take myself too seriously.
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
          I’ve played Magic on and off for years. I enjoy the strategy side of
          it: tuning decks, thinking in probabilities, and trying to navigate
          long matchups without throwing the game away. It scratches a similar
          itch to optimisation and debugging – except the worst that happens is
          you lose a match, not a production system.
        </Text>
      </Column>

      {/* Guitar */}
      <Column gap="16">
        <Heading variant="heading-strong-l">Guitar</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I’m a bedroom guitarist – I mostly play for myself, late at night or
          between tasks. A lot of it is learning songs I like, experimenting with
          tones, and occasionally recording little ideas. It’s one of the few
          hobbies that consistently puts me into “flow”.
        </Text>
      </Column>

      {/* Reading — book covers */}
      <Column gap="16">
        <Heading variant="heading-strong-l">What I’m reading now</Heading>

        <Text variant="body-default-m" onBackground="neutral-weak">
          I try to always read one book for fun and one that sharpens how I think.
        </Text>

        {/* Plain flex layout so captions are perfectly centred under each cover */}
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
                <strong>Algorithms Illuminated (Part 2)</strong>
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
