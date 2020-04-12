export type ServiceType = {
  displayName: string,
  icon: () => JSX.Element,
  order: number
  description: string,
}
