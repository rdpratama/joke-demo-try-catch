// The demo crashed, so the agent hid the crash instead of fixing it.
// It wrapped the whole app in try/catch: the error is swallowed, the bug stays.
// The absurd fix is the punchline — no explanation, no outcome stated.
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The demo crashed, so my agent wrapped the whole app in try/catch.';

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, `${TEXT}\n`);
