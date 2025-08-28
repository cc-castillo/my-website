import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  IconButton,
  Text,
  Meta,
  Schema,
  Line,
  TiltFx,
  RevealFx
} from "@once-ui-system/core";
import { baseURL, home, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    description: home.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m"
        mobileDirection="row" 
        horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex>
        {home.avatar.display && (
          <TiltFx aspectRatio={3.5 / 4} radius="l">
          <Avatar src={person.avatar} size="xl"/>
          </TiltFx>
        )}
      </Flex>

       <Column gap="16" fillWidth horizontal="center">
        <Line background="accent-alpha-medium"/>
          <TiltFx radius="l">
         <Heading 
            className={styles.textAlign} 
             variant="display-default-s"
            onBackground="accent-medium"
            marginBottom="8">
              {person.name}
          </Heading>
          </TiltFx>
      </Column>
      <Text variant="heading-default-m" onBackground="brand-weak" className={styles.textAlign}>
        {person.role}
      </Text>
           <Line background="accent-alpha-medium" marginTop="16"/>
 
      <RevealFx>
      <Flex horizontal="space-around">
          {home.intro.display && (
            <Column 
            textVariant="body-default-m" 
            onBackground="brand-medium"
            marginLeft="64"
            marginRight="64"
            marginTop="16">
              {home.intro.description}
            </Column>
          )}
          </Flex>
          </RevealFx>
                 <Flex horizontal="center">
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}

      </Flex>
              {home.work.display && (
            <>
    <TiltFx radius="l" aspectRatio="auto">
              <Heading id={home.work.title} className={styles.textAlign}
                onBackground="brand-weak"
                variant="heading-default-xl"
                marginTop="32">
                {home.title}
                <Line background="accent-alpha-weak" marginTop="8" fillWidth/>
              </Heading>
</TiltFx>
              <Column fillWidth gap="l">
                {home.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} marginLeft="64">
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="accent-medium" marginRight="80">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16" marginLeft="16" marginRight="16">
                      {experience.achievements.map((achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
              
                  </Column>
                ))}
              </Column>
            </>
          )}

          {home.technical.display && (
            <>
              <TiltFx radius="l" aspectRatio="auto">
                <Heading
                  id={home.technical.title}
                  onBackground="brand-weak"
                  variant="heading-default-xl"
                  margin="32"
                >
                  {home.technical.title}
                  <Line background="accent-alpha-weak" marginTop="8" />
                </Heading>
              </TiltFx>
              <Column gap="2">
                <Flex wrap horizontal="space-between">
                  {home.technical.skills.map((skill, index) => (
                    <Column
                      as="ul"
                      key={`${skill}-${index}`}
                      marginLeft="80"
                    >
                      <Text
                        as="li"
                        id={skill.title}
                        onBackground="brand-strong"
                        variant="body-default-m"
                      >
                        {skill.title}
                      </Text>
                    </Column>
                  ))}
                </Flex>
              </Column>
            </>
          )}
    </Column>
  );
}
