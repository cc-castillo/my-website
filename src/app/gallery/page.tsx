import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, photography, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    description: photography.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(photography.title)}`,
    path: photography.path,
  });
}

export default function Photography() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        description={photography.description}
        path={photography.path}
        image={`/api/og/generate?title=${encodeURIComponent(photography.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${photography.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
