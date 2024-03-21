import { ContentfulResponse } from "@/types/contentful.type";
import { appConfig } from "@/utils/config";

const { baseUrl, spaceId, environtmentId, accessToken } = appConfig;

export const getEntryBySlug = async (
  slug: string,
): Promise<ContentfulResponse> => {
  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environtmentId}/entries?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
    { next: { revalidate: 10 } },
  );

  const data = await response.json();
  return data;
};
