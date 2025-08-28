import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>; // Narrow to string keys for React usage

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  /** First name of the person */
  firstName: string;
  /** Last name of the person */
  lastName: string;
  /** The name you want to display, allows variations like nicknames */
  name: string;
  /** Role or job title */
  role: string;
  /** Path to avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** Languages spoken */
  languages?: string[];
};


/**
 * Social link configuration.
 */
export type Social = Array<{
  /** Name of the social platform */
  name: string;
  /** Icon for the social platform
   * The icons are a part of "src/resources/icons.ts" file.
   * If you need a different icon, import it there and reference it everywhere else
   */
  icon: IconName;
  /**
   * The link to the social platform
   *
   * The link is not validated by code, make sure it's correct
   */
  link: string;
}>;

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  /** Path to the page
   *
   * The path should be relative to the public directory
   */
  path: `/${string}` | string;
  /** Label for navigation or display */
  label: string;
  /** Title of the page */
  title: string;
  /** Description for SEO and metadata */
  description: string;
  /** OG Image should be put inside `public/images` folder */
  image?: `/images/${string}` | string;
}


/**
 * @description Configuration for the Home page, including sections for avatar, introduction, work experience, and technical skills.
 */
export interface Home extends BasePageConfig {
  /** Avatar section configuration */
  avatar: {
    /** Whether to display the avatar */
    display: boolean;
  };

  /** Introduction section */
  intro: {
    /** Whether to display the introduction */
    display: boolean;
    /** Title of the introduction section */
    title: string;
    /** Description of the introduction section */
    description: React.ReactNode;
  };
  /** Work experience section */
  work: {
    /** Whether to display work experience */
    display: boolean;
    /** Title for the work experience section */
    title: string;
    /** List of work experiences */
    experiences: Array<{
      /** Company name */
      company: string;
      /** Timeframe of employment */
      timeframe: string;
      /** Role or job title */
      role: string;
      /** Achievements at the company */
      achievements: React.ReactNode[];
      /** Images related to the experience */
      images?: Array<{
        /** Image source path */
        src: string;
        /** Image alt text */
        alt: string;
        /** Image width ratio */
        width: number;
        /** Image height ratio */
        height: number;
      }>;
    }>;
  };

  /** Technical skills section */
  technical: {
    /** Whether to display technical skills section */
    display: boolean;
    /** Title for the technical skills section */
    title: string;
    /** List of technical skills */
    skills: Array<{
      /** Skill title */
      title: string;
      /** Skill description */
      description: React.ReactNode;
      /** Images related to the skill */
      images?: Array<{
        /** Image source path */
        src: string;
        /** Image alt text */
        alt: string;
        /** Image width ratio */
        width: number;
        /** Image height ratio */
        height: number;
      }>;
    }>;
  };
}

/**
 * Blog page configuration.
 * @description Configuration for the Blog page, including metadata and navigation label.
 */
export interface Blog extends BasePageConfig {
  display: boolean;
}

/**
 * @description Configuration for the Photography page, including metadata, navigation label, and image list.
 */
export interface Photography extends BasePageConfig {
  /** List of images in the gallery */
  images: Array<{
    /** Image source path */
    src: string;
    /** Image alt text */
    alt: string;
    /** Image orientation (horizontal/vertical) */
    orientation: string;
  }>;
}
