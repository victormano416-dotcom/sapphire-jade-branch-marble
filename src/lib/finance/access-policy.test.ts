import assert from "node:assert/strict";
import test from "node:test";
import { isOwnerEmail, normalizeStatus } from "./access-policy.ts";

test("only the owner email is the owner", () => {
  assert.equal(isOwnerEmail("victormano416@gmail.com"), true);
  assert.equal(isOwnerEmail("  VictorMano416@Gmail.com "), true);
  assert.equal(isOwnerEmail("outra@gmail.com"), false);
  assert.equal(isOwnerEmail(null), false);
});

test("unknown access status stays pending", () => {
  assert.equal(normalizeStatus("approved"), "approved");
  assert.equal(normalizeStatus("blocked"), "blocked");
  assert.equal(normalizeStatus("pending"), "pending");
  assert.equal(normalizeStatus("admin"), "pending");
});
