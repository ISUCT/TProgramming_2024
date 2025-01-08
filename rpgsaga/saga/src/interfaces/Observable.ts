export interface Observer {
  update(): void
}

export interface Observable {
  add(obs: Observer): void
  remove(): void
  notify(): void
}
