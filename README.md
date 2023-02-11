# base

~~~~~ sh
npm install e53e04ac/base
~~~~~

~~~~~ mjs
import { Base } from 'e53e04ac/base';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_1(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  click B_0 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_1 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "hold";
    B_1_0(["hold"]);
    B_1_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "hold";
    B_0_0(["Get"]);
    B_0_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
~~~~~
