# base

~~~~~ sh
npm install e53e04ac/base
~~~~~

~~~~~ mjs
import { Base } from 'base';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["hold"]);
  end;
  subgraph "devDependencies";
    B_1(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/hold\n050a2db413598fe87670b5b6bd34b804776a3657"]);
  end;
  subgraph "npmjs";
    C_1(["@types/node\n18.14.6"]);
  end;
  A ----> B_0;
  A ----> B_1;
  B_0 ----> C_0;
  B_1 ----> C_1;
  click C_0 "https://github.com/e53e04ac/hold/tree/050a2db413598fe87670b5b6bd34b804776a3657";
  click C_1 "https://www.npmjs.com/package/@types/node/v/18.14.6";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/base";
    E_0(["namespace Base"]);
    E_1(["type Base"]);
    E_2(["const Base"]);
  end;
  M["index.d.ts"]
  subgraph "hold";
    I_0_0(["Get"]);
    I_0_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/base";
    E_0(["Base"]);
  end;
  M["index.mjs"]
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
