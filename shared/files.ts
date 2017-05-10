
export namespace Files {
  export class FileSystemObject {
    path: string;
    name: string;
    type: string;
    children: FileSystemObject[];

    constructor(path: string, name: string) {
      this.path = path;
      this.name = name;
    }
  }
}
