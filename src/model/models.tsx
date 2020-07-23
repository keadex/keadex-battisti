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
  logo_filename: string
}


// --------  CUSTOMER
export interface Customer {
  id: string,
  name: string,
  logo_filename: string
}


// --------  SECTOR
export interface Sector {
  id: string
}


// --------  SKILL
export interface Skill {
  name: string,
  usage_percentage: number
}


// --------  EXPERIENCE
export interface Experience {
  id: string,
  from: string,
  to?: string,
  avatar_filename: string,
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
    val: number
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