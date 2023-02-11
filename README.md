# base

~~~~~ sh
npm install e53e04ac/base
~~~~~

~~~~~ mjs
import { Base } from 'e53e04ac/base';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/base"]);
  subgraph "dependencies";
    B_0(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_1(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  click B_0 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_1 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/base"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:crypto"
    D0(["randomUUID"]);
  end;
  subgraph "hold"
    D1(["hold"]);
    D2(["unwrap"]);
    D3(["Get"]);
    D4(["ValueOrGet"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C1;
  D4 --import--> C1;
~~~~~
