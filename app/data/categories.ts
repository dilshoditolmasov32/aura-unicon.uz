export interface Category {
  id: number
  titleKey: string
  image: string
  views: string
}

export const categories: Category[] = [
  {
    id: 1,
    titleKey: "category_items.infrastructure_construction",
    image: "/images/doctor.webp",
    views: "1,117",
  },
  {
    id: 2,
    titleKey: "category_items.education_science",
    image: "/images/doska.webp",
    views: "1,117",
  },
  {
    id: 3,
    titleKey: "category_items.healthcare",
    image: "/images/maktab.webp",
    views: "1,117",
  },
  {
    id: 4,
    titleKey: "category_items.economy_business",
    image: "/images/kucha.webp",
    views: "1,117",
  },
  {
    id: 5,
    titleKey: "category_items.culture_art",
    image: "/images/zavod.webp",
    views: "1,117",
  },
  {
    id: 6,
    titleKey: "category_items.sport",
    image: "/images/fabrika.webp",
    views: "1,117",
  },
  {
    id: 7,
    titleKey: "category_items.technology",
    image: "/images/zavod.webp",
    views: "1,117",
  },
]