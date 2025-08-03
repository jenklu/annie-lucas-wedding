#!/usr/bin/env node
/**
 * generate-invite-map.js
 *
 * Usage:
 *   node generate-invite-map.js               # assumes ./guest-list.csv
 *   node generate-invite-map.js path/to/file  # explicit CSV path
 *
 * Output:
 *   1) JS object literal for your component
 *   2) Validation summary (counts, tag mismatches, duplicate hashes)
 */

import fs from 'fs/promises';
import path from 'path';
import Papa from 'papaparse';
import crypto from 'crypto';

/* ------------------------------------------------------------------ */
/*  CONFIGURATION — edit if your route slugs ever change              */
/* ------------------------------------------------------------------ */
const weddingOnly = ['wedding', 'after-party'];
const welcomeReception = ['welcome-party', 'wedding', 'after-party'];
const weddingParty = ['all']; // full access

/* ------------------------------------------------------------------ */
/*  INPUT FILE                                                        */
/* ------------------------------------------------------------------ */
const CSV = process.argv[2] || 'guest-list.csv';

/* ------------------------------------------------------------------ */
/*  UTILITIES                                                         */
/* ------------------------------------------------------------------ */
async function sha256Hex(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                              */
/* ------------------------------------------------------------------ */
(async () => {
  /* 1. read & parse CSV */
  const csvText = await fs.readFile(path.resolve(CSV), 'utf8');
  const { data: rows } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  /* 2. build map + gather validation info */
  const hashedNames = {};
  const stats = { weddingOnly: 0, welcomeReception: 0, weddingParty: 0 };
  const issues = []; // rows whose tags conflict with mapping
  const dupes = new Map(); // hash → [name1, name2]

  for (const row of rows) {
    const first = row['first name']?.trim() ?? '';
    const last = row['last name']?.trim() ?? '';
    if (!first || !last) continue; // skip blank lines / partial rows

    const tagsStr = (row.tags || '').toLowerCase();
    const hashKey = await sha256Hex(`${first} ${last}`.toLowerCase()); // mirrors browser logic

    /* decide invitation list */
    let bucket = 'weddingOnly';
    if (tagsStr.includes('wedding party')) bucket = 'weddingParty';
    else if (tagsStr.includes('welcome reception')) bucket = 'welcomeReception';

    stats[bucket]++;

    /* duplicate detection */
    if (hashKey in hashedNames) {
      const list = dupes.get(hashKey) || [];
      list.push(`${first} ${last}`);
      dupes.set(hashKey, list);
    }

    hashedNames[hashKey] = { weddingOnly, welcomeReception, weddingParty }[bucket];

    /* lightweight rule check */
    const expected =
      (bucket === 'weddingOnly' &&
        !tagsStr.includes('welcome reception') &&
        !tagsStr.includes('wedding party')) ||
      (bucket === 'welcomeReception' &&
        tagsStr.includes('welcome reception') &&
        !tagsStr.includes('wedding party')) ||
      (bucket === 'weddingParty' && tagsStr.includes('wedding party'));

    if (!expected) issues.push(`${first} ${last}  (tags = "${row.tags}")`);
  }

  /* 3. emit copy-paste snippet */
  const snippetLines = [
    "const weddingOnly      = ['wedding', 'after-party'];",
    "const welcomeReception = ['welcome-party', 'wedding', 'after-party'];",
    "const weddingParty     = ['all'];",
    '',
    'const hashedNames = {',
    ...Object.entries(hashedNames).map(([h, arr]) => {
      const ref =
        arr === weddingOnly
          ? 'weddingOnly'
          : arr === welcomeReception
            ? 'welcomeReception'
            : 'weddingParty';
      return `  '${h}': ${ref},`;
    }),
    '};',
  ];

  console.log('\n\n───────── copy / paste below ─────────\n');
  console.log(snippetLines.join('\n'));
  console.log('\n───────── end snippet ─────────\n');

  /* 4. validation report */
  console.log('Validation summary');
  console.table(stats);

  if (issues.length) {
    console.warn('\nTag mismatches (row tags didn’t match derived bucket):');
    issues.forEach((s) => console.warn('  ' + s));
  }

  if (dupes.size) {
    console.warn('\n⚠️  Duplicate first-&-last combinations (same hash):');
    for (const [hash, names] of dupes.entries()) {
      console.warn(`  ${hash}  ←  ${names.join(', ')}`);
    }
  }
})();
