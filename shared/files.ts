
export namespace Files {
  export class FileSystemObject {
    path: string;
    name: string;
  }

  // export class Folder implements FileSystemObject {
  //   folders: Folder[];
  //   files: File[];

  //   constructor(public path: string, public name: string) {
  //     this.folders = [];
  //     this.files = [];
  //   }
  // }

  // export class File implements FileSystemObject {
  //   type: string;

  //   constructor(public path: string, public name: string) {

  //   }
  // }
}

export namespace TreeView {
  export class Node {
    isExpanded: boolean = false;
    children: Node[] = [];

    constructor(public id: any, public name: string) {

    }
  }
}
