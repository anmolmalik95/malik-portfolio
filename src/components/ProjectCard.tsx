"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars?: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const hasBody = description?.trim() || content?.trim();

  return (
    <SmartLink href={href} className="project-card-clickable">
      <Column fillWidth gap="m">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
        <Flex
          s={{ direction: "column" }}
          fillWidth
          paddingX="s"
          paddingTop="12"
          paddingBottom="24"
          gap="l"
        >
          {title && (
            <Flex flex={5}>
              <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {title}
              </Heading>
            </Flex>
          )}

          {hasBody && (
            <Column flex={7} gap="16">
              {description?.trim() && (
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {description}
                </Text>
              )}

              {content?.trim() && (
                <Text variant="body-default-s">
                  Read case study →
                </Text>
              )}

              {link && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  View project (external)
                </Text>
              )}
            </Column>
          )}
        </Flex>
      </Column>
    </SmartLink>
  );
};
