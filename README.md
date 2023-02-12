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
  click B_0 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_1 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/base";
    E_0(["Base"]);
  end;
  M(["index.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "hold";
    I_1_0(["hold"]);
    I_1_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/base";
    E_0(["type Base"]);
    E_1(["const Base"]);
  end;
  M(["index.d.ts"])
  subgraph "hold";
    I_0_0(["Get"]);
    I_0_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
