#!/usr/bin/env node
const { spawnSync } = require('child_process');
const os = require('os');
const path = require('path');
const isWindows = os.platform() === 'win32';
function log(msg) { console.error(msg); }
const projectPath = process.argv[2] || '.';
const absPath = path.resolve(projectPath);
log('Project: ' + absPath);
log('');
log('Running build...');
const buildResult = spawnSync('npm', ['run', 'build'], { cwd: absPath, stdio: 'inherit', shell: isWindows });
if (buildResult.status !== 0) { log('Build failed!'); process.exit(1); }
log('');
log('Deploying to Vercel (production)...');
log('');
const deployResult = spawnSync('vercel', ['--yes', '--prod'], { cwd: absPath, encoding: 'utf8', stdio: ['inherit', 'pipe', 'pipe'], timeout: 300000, shell: isWindows });
const output = (deployResult.stdout || '') + (deployResult.stderr || '');
log(output);
if (deployResult.status !== 0) { log('Deployment failed!'); process.exit(1); }
const aliasedMatch = output.match(/Aliased:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
const prodMatch = output.match(/Production:\s*(https:\/\/[a-zA-Z0-9.-]+\.vercel\.app)/i);
const url = aliasedMatch ? aliasedMatch[1] : (prodMatch ? prodMatch[1] : null);
log('');
log('========================================');
log('Deployment successful!');
log('========================================');
if (url) log('Your site is live: ' + url);
console.log(JSON.stringify({ status: 'success', url: url }));