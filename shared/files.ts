
export module B2Shared {

  export namespace TreeView {
    export class Node {
      isExpanded: boolean = false;
      hasChildren: boolean;
      children: Node[] = [];

      constructor(public id: any, public name: string) {

      }
    }
  }

  namespace Files {
    export class FileSystemObject {
      path: string;
      name: string;
    }
  }
}
