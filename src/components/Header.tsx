"use client";

import { usePathname } from "next/navigation";
import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import { routes, display, blog, photography } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";


export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        padding="4"
        horizontal="center"
        data-border="rounded"
      >
      <Flex>
          <Flex
            background="brand-alpha-weak"
            border="transparent"
            radius="m-4"
            shadow="l"
            padding="4"
            zIndex={1}
          >
            <Flex 
            vertical="center" 
            horizontal="center"
            textVariant="body-default-s" suppressHydrationWarning>
            
              {display.themeSwitcher && (
                <>
                  <ThemeToggle />
                </>
              )}

            </Flex>

          </Flex>

        </Flex>
      </Flex>
    </>
  );
};
