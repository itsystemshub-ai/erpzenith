# 📚 ERP Zenith Skills Registry

Professional AI skills collection for the ERP Zenith ecosystem. This unified registry centralizes all AI/dev skills across the workspace into categorized domains.

## 📦 Installation

### Install All Skills

```bash
npm install
```

### Install Specific Skill Dependencies

```bash
npm run skills:install
```

## 🗂️ Categories

| Category | Skills | Description |
|----------|--------|-------------|
| **ai-ml** | 58 | AI/ML implementations, agents, LLM apps |
| **automation** | 95+ | Workflow automation, n8n, integrations |
| **backend** | 112 | Backend patterns, APIs, frameworks |
| **business** | 40 | Business logic, analytics |
| **database** | 38 | Database patterns, ORMs, migrations |
| **devops** | 154 | CI/CD, deployment, monitoring |
| **frontend** | 130 | UI/UX, React, Vue, styling |
| **gaming** | 16 | Game development patterns |
| **marketing-and-sales** | 35 | Marketing automation, CRM |
| **security** | 28 | Security best practices |
| **seo** | 25 | SEO optimization |
| **uncategorized** | 331 | Additional skills pending categorization |

**Total**: 757+ skills

## 🌟 Featured Skills

### BCV Exchange Rate Automation (`tasa-bcv`)

Professional automation tool for scraping and generating visual reports of Venezuelan Central Bank (BCV) exchange rates.

**Usage**:
```bash
# Run once
npm run skills:tasa-bcv

# Run with watch mode
npm run skills:tasa-bcv:watch
```

**Output**: Generates three PNG reports in `output/`:
- `tasa_1.png` - Official BCV exchange rate
- `tasa_2.png` - Comparative bank rates
- `tasa_3.png` - Weekly intervention rate

[View Full Documentation](automation/tasa-bcv/SKILL.md)

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run skills:tasa-bcv` | Run BCV rate scraper |
| `npm run skills:tasa-bcv:watch` | Run with auto-reload |
| `npm run skills:install` | Install skill dependencies |

## 📁 Structure

```
packages/skills/
├── ai-ml/                    # AI & Machine Learning skills
├── automation/               # Automation workflows
│   └── tasa-bcv/            # BCV Exchange Rate Automation
├── backend/                  # Backend development skills
├── business/                 # Business logic skills
├── database/                 # Database skills
├── devops/                   # DevOps practices
├── frontend/                 # Frontend development
├── gaming/                   # Game development
├── marketing-and-sales/      # Marketing automation
├── security/                 # Security best practices
├── seo/                      # SEO optimization
├── uncategorized/            # Uncategorized skills
├── package.json             # Skills workspace config
└── README.md                # This file
```

## 🤖 LLM Usage

For AI assistants, refer to [`LLM_INDEX.md`](unified-personal-skills/LLM_INDEX.md) for an optimized list of skills and paths to supply as context.

### Quick Reference

```markdown
- n8n-mcp-tools-expert: `automation/n8n-mcp-tools-expert/SKILL.md`
- n8n-code-python: `automation/n8n-code-python/SKILL.md`
- tasa-bcv: `automation/tasa-bcv/SKILL.md`
- browser-automation: `automation/browser-automation/SKILL.md`
```

## 🔗 Integration

### With n8n Workflows

Skills can be invoked from n8n workflows using the MCP server:

```javascript
// Example: Use tasa-bcv in n8n Code node
const { exec } = require('child_process');
exec('npm run skills:tasa-bcv', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
```

### With CI/CD

Add scheduled tasks to your CI/CD pipeline:

```yaml
# GitHub Actions example
jobs:
  tasa-bcv:
    runs-on: ubuntu-latest
    schedule:
      - cron: '0 8 * * 1-5'  # Weekdays at 8 AM
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run skills:tasa-bcv
```

## 📝 Skill Format

Each skill follows a standardized format:

```markdown
---
name: skill-name
description: Brief description
source: GitHub URL
risk: safe|moderate|high
---

# Skill Name

## When to Use This Skill

## Features

## Quick Start

## API Reference

## Best Practices

## Troubleshooting
```

## 🔄 Duplicates Handling

During migration, if multiple skills shared the exact same name across different repositories:
- **Exact Match**: Only one copy was kept to reduce redundancy
- **Differences Found**: Contents were merged within the same file under `<!-- MERGED CONTENT FROM DUPLICATE SOURCE: path -->`

## 📊 Statistics

- **Total Skills**: 757+
- **Categories**: 12
- **Active Integrations**: 1 (tasa-bcv)
- **Last Updated**: 2026-03-19

## 🛠️ Development

### Adding a New Skill

1. Create directory in appropriate category:
   ```bash
   mkdir packages/skills/category/skill-name
   ```

2. Add `SKILL.md` with proper frontmatter:
   ```markdown
   ---
   name: skill-name
   description: Description
   ---
   ```

3. Update this README with new skill info

### Updating Skills

Skills are synced from `unified-personal-skills/` directory. To update:

```bash
# Manual sync (PowerShell)
Get-ChildItem -Path 'unified-personal-skills' -Directory | ForEach-Object {
  $category = $_.Name
  $dest = 'packages\skills\' + $category
  Copy-Item -Path ($_.FullName + '\*') -Destination $dest -Recurse -Force
}
```

## 📄 License

PROPRIETARY - ERP Zenith Team

## 👥 Authors

- **ERP Zenith Team** - Core Development
- **José Piedra** - tasa-bcv automation
- **Unified Skills Contributors** - See individual SKILL.md files

## 🙏 Acknowledgments

- Original skills from [n8n-skills](https://github.com/czlonkowski/n8n-skills)
- BCV data from [Banco Central de Venezuela](https://www.bcv.org.ve)
- Tesseract.js for OCR capabilities
- Puppeteer for browser automation
