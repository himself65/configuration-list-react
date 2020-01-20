export type ConfigurationItem = {
  name: string
  value: ConfigurationItem
}[] | string[] | string

export type Configuration = {
  name: string
  value: ConfigurationItem
}

export type ConfigurationListProps = {
  list: Configuration
}
