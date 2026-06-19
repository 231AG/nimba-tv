/**
 * Sanity GROQ Queries Placeholder
 *
 * These queries will be used once Sanity CMS is connected.
 * Currently, the app uses mock data from src/data/
 */

export const articleQueries = {
  all: `*[_type == "article"] | order(publishDate desc) {
    _id, title, slug, excerpt, featuredImage, author->{name, profilePhoto},
    category->{name, slug}, tags, publishDate, featured, "readingTime": round(length(pt::text(content)) / 5 / 200)
  }`,

  bySlug: `*[_type == "article" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, featuredImage,
    author->{name, position, bio, profilePhoto, socialLinks},
    category->{name, slug}, tags, publishDate, seoTitle, seoDescription, featured
  }`,

  featured: `*[_type == "article" && featured == true] | order(publishDate desc)[0...5]`,

  byCategory: `*[_type == "article" && category->slug.current == $slug] | order(publishDate desc)`,

  search: `*[_type == "article" && (
    title match $query + "*" ||
    excerpt match $query + "*" ||
    pt::text(content) match $query + "*"
  )] | order(publishDate desc)`,
};

export const categoryQueries = {
  all: `*[_type == "category"] | order(name asc) { _id, name, slug, description, icon }`,
  bySlug: `*[_type == "category" && slug.current == $slug][0]`,
};

export const authorQueries = {
  all: `*[_type == "author"] | order(name asc)`,
  byId: `*[_type == "author" && _id == $id][0]`,
};

export const videoQueries = {
  all: `*[_type == "video"] | order(publishDate desc)`,
  byType: `*[_type == "video" && type == $type] | order(publishDate desc)`,
  featured: `*[_type == "video"] | order(publishDate desc)[0...3]`,
};

export const homepageQueries = {
  settings: `*[_type == "homepageSettings"][0] {
    heroArticles[]->{ _id, title, slug, excerpt, featuredImage, category->{name, slug}, publishDate },
    breakingNews[]->{ title, slug },
    featuredVideos[]->{ title, thumbnail, youtubeUrl, description },
    communitySpotlight[]->{ _id, title, slug, excerpt, featuredImage, publishDate }
  }`,
};
