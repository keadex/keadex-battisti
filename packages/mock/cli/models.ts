export interface MockMap {
  graphqlService: string,
  mockFileName: string
}

export interface MockProfile {
  name: string,
  mocksMap: MockMap[]
}

export interface MockConfig {
  profiles: MockProfile[]
}