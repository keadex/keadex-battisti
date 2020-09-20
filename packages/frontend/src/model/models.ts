// -------- BASE RESPONSE
export interface BaseResponse<T> {
  data?: Query<T>;
}

// -------- QUERY
export interface Query<T> {
  experiences?: T;
  quotes?: T;
  experienceGraph?: T;
}

// -------- QUOTE
export interface Quote {
  quote: string;
  author: string;
  image?: string;
}


// --------  TASK
export interface Task {
  id: string
}


// --------  COMPANY
export interface Company {
  name: string,
  from: string,
  to?: string,
  city: string,
  country: string,
  logoFilename: string
}


// --------  CUSTOMER
export interface Customer {
  id: string,
  name: string,
  logoFilename: string
}


// --------  SECTOR
export interface Sector {
  id: string
}


// --------  SKILL
export interface Skill {
  name: string,
  usagePercentage: number
}


// --------  EXPERIENCE
export interface Experience {
  id: string,
  from: string,
  to?: string,
  avatarFilename: string,
  tasks: Task[],
  companies: Company[],
  customers: Customer[],
  sectors: Sector[],
  skills: Skill[]
}


// --------  FORCE GRAPH
export namespace ForceGraph {
  
  export interface Node {
    id: string,
    name: string,
    val: number,
    group: number
  }

  export interface Link {
    source: string,
    target: string
  }

  export interface Graph {
    nodes: Node[],
    links: Link[]
  }
}

// --------  COOKIEBOT CookieConsent
export interface CookieConsent {
  stamp: string,
  necessary: boolean,
  preferences: boolean,
  statistics: boolean,
  marketing: boolean,
  ver: number,
  utc: number,
  region: string
}
