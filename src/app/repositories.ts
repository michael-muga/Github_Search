export class Repositories {
    constructor(
        public name: string,
        public repo_link: string,
        public created: Date,
        public cloned_url: string,
        public forks: number,
        public homepage: string,
        public description: string,
        public star: number
      ) {}
}
