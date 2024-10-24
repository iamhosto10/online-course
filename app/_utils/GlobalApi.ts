import request, { gql } from "graphql-request";

const GraphURL = `https://us-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_API_EY}/master`;

const getCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalCharapters
        sourceCode
        tag
        slug
      }
    }
  `;

  const result = await request(GraphURL, query);
  return result;
};

const GetSideBar = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        url
        banner {
          id
          url
        }
      }
    }
  `;

  const result = await request(GraphURL, query);
  return result;
};

const GetCourseBySlug = async (slug: string) => {
  const query =
    gql`
    query GetCourseBySlug {
      courseList(where: { slug: "` +
    slug +
    `" }) {
        author
        demoUrl
        description
        free
        id
        name
        slug
        sourceCode
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalCharapters
        tag
      }
    }
  `;

  const result = await request(GraphURL, query);
  return result;
};
export default {
  getCourseList,
  GetSideBar,
  GetCourseBySlug,
};
