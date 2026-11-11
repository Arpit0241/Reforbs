import { canonicalUrl } from "@/lib/siteUrl";
import { SITE_CONFIG } from "@/data/site";
import type { PropertyItem } from "@/data/properties";

export interface BreadcrumbItemInput {
  name: string;
  path: string;
}

export interface FaqSchemaInput {
  question: string;
  answer: string;
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": canonicalUrl("/#organization"),
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalName,
    url: canonicalUrl("/"),
    logo: canonicalUrl("/assets/reforbs-logo-white.png"),
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.primaryPhoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.headquarters.streetAddress,
      addressLocality: SITE_CONFIG.headquarters.addressLocality,
      addressRegion: SITE_CONFIG.headquarters.addressRegion,
      postalCode: SITE_CONFIG.headquarters.postalCode,
      addressCountry: SITE_CONFIG.headquarters.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    sameAs: SITE_CONFIG.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.primaryPhoneE164,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": canonicalUrl("/#website"),
    name: SITE_CONFIG.brandName,
    url: canonicalUrl("/"),
    publisher: {
      "@id": canonicalUrl("/#organization"),
    },
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItemInput[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items: FaqSchemaInput[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildPropertySchema(item: PropertyItem): Record<string, unknown>[] {
  const prices = item.roomOptions.map((r) => r.priceInr);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const url = canonicalUrl(item.slug);

  const lodgingNode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${url}#residence`,
    name: `${item.name} — ${SITE_CONFIG.brandName}`,
    description: item.answerFirstSummary || item.description,
    url,
    telephone: item.contactPhone,
    email: SITE_CONFIG.email,
    image: item.imagesMeta.map((img) => canonicalUrl(img.src)),
    priceRange:
      minPrice === maxPrice
        ? `₹${minPrice.toLocaleString("en-IN")}/month`
        : `₹${minPrice.toLocaleString("en-IN")} - ₹${maxPrice.toLocaleString("en-IN")}/month`,
    address: {
      "@type": "PostalAddress",
      streetAddress: item.streetAddress,
      addressLocality: item.locality,
      addressRegion: "Maharashtra",
      postalCode: item.pincode,
      addressCountry: "IN",
    },
    parentOrganization: {
      "@id": canonicalUrl("/#organization"),
    },
    hasMap: item.googleMapsUrl,
    amenityFeature: item.amenitiesList.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.name,
      value: a.included,
    })),
    makesOffer: item.roomOptions.map((ro) => ({
      "@type": "Offer",
      name: `${ro.type} at ${item.name}`,
      price: ro.priceInr,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: ro.priceInr,
        priceCurrency: "INR",
        unitText: "MONTH",
      },
      itemOffered: {
        "@type": "Accommodation",
        name: `${item.name} — ${ro.type}`,
        description: `${ro.occupancy}. Security Deposit: ${ro.depositDisplay}. ${ro.features.join(". ")}.`,
      },
    })),
  };

  // Only emit GeoCoordinates if explicitly verified against building entrance / owner listing
  if (item.geoVerified) {
    lodgingNode.geo = {
      "@type": "GeoCoordinates",
      latitude: item.lat,
      longitude: item.lng,
    };
  }

  // Strictly omit AggregateRating unless verified first-party / GBP aggregate data is supplied
  if (item.verifiedRating) {
    lodgingNode.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: item.verifiedRating.ratingValue,
      reviewCount: item.verifiedRating.reviewCount,
    };
  }

  const categoryPath =
    item.category === "Co-Living"
      ? "/coliving"
      : item.isGuesthouse
      ? "/corporate-stays"
      : "/student-housing";

  const nodes: Record<string, unknown>[] = [
    lodgingNode,
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Properties", path: "/properties" },
      { name: item.category, path: categoryPath },
      { name: item.name, path: item.slug },
    ]),
  ];

  if (item.faq && item.faq.length > 0) {
    nodes.push(buildFaqSchema(item.faq));
  }

  return nodes;
}

export function buildPropertyListSchema(
  title: string,
  path: string,
  items: PropertyItem[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: canonicalUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      url: canonicalUrl(item.slug),
    })),
  };
}
