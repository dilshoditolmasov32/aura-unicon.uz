
export interface SeasonOrTime {
  id: string
  title: string
  icon: string
  image: string
}


export interface SelectOption {
  label: string
  value: string
  link?: string,
  image: string
  icon?: string
}

export interface VideoItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
}
