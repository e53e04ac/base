# base

~~~~~ sh
npm install e53e04ac/base
~~~~~

~~~~~ mjs
import { Base } from 'e53e04ac/base';
~~~~~

~~~~~ mermaid
graph LR;
  A(["base"]);
  B0(["e53e04ac/hold"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/base";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
