# Commas & Chaos — Project Instructions

## Sites Under Management

| Site | Domain | CMS | Purpose |
|------|--------|-----|---------|
| **Commas & Chaos** | commasandchaos.com | Static HTML/Vite on Hostinger | Amisha Sharma's freelance copywriting portfolio + blog |
| **The Brand Crush** | thebrandcrush.com | WordPress + Elementor + Rank Math | Contrarian marketing analysis publication |
| **Audaz Revista** | audazrevista.com | WordPress + Elementor + Rank Math | Spanish language, culture & travel publication |

---

## GEO (Generative Engine Optimization) — All 3 Sites

The goal is to rank in **both** traditional Google search AND AI-powered search (ChatGPT, Claude, Perplexity, Google AI Overviews). Apply these rules when creating or editing content on ANY of the three sites.

### 1. llms.txt — AI Crawler Summary Files

Every site MUST have a `/llms.txt` file at its root. This is a plain-text Markdown file that AI crawlers read to understand the site.

**Format:**
```markdown
# [Site Name]

[1-2 sentence description of what the site is and who runs it]

## [Section headers: Services, Topics, About, Contact, etc.]
[Structured, extractable facts — not marketing fluff]
```

**File locations:**
- commasandchaos.com → `/llms.txt` (already created in repo root)
- thebrandcrush.com → Upload via WordPress media or create as a page (needs server-side placement)
- audazrevista.com → Upload via WordPress media or create as a page (needs server-side placement)

**For WordPress sites (Brand Crush & Audaz):** Since we can't directly place files at the web root via API, create a WordPress page at `/llms-txt` with the content, OR add a redirect rule from `/llms.txt` to the page. Better: ask Amisha to upload via Hostinger file manager.

### 2. robots.txt — AI Crawler Access

All three sites must explicitly allow AI crawlers:

```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: cohere-ai
Allow: /
```

- commasandchaos.com → Already configured in `robots.txt`
- thebrandcrush.com → Configure via WordPress Settings → Reading, or edit via Rank Math
- audazrevista.com → Configure via WordPress Settings → Reading, or edit via Rank Math

### 3. Answer Capsules — MANDATORY for Every Page & Blog Post

Every page and blog post MUST open with an **answer capsule** in the first 100 words — a 1-2 sentence, factual, extractable answer to the page's primary question.

**Why:** 44.2% of all LLM citations come from the first 30% of a page's text. Pages with strong answer capsules get cited 2.1x more.

**Format:**
```
[Direct answer to the implied question, stating who/what/where clearly]
[One supporting fact with a number or credential]
```

**Example (commasandchaos homepage):**
> Amisha Sharma is a freelance copywriter based in Delhi, India, with 5+ years of experience writing conversion-focused copy for 100+ brands across the US, UK, and Australia. An ISB alumna, she specializes in website copy, landing pages, email sequences, and SEO content for SaaS, fintech, and D2C brands.

**Example (Brand Crush blog post):**
> Jupiter's marketing strategy outperformed BYJU'S by focusing on financial literacy education rather than aggressive acquisition spending. Here's what the numbers reveal about why one Indian fintech scaled while the other collapsed.

**Example (Audaz blog post):**
> The 15 best Spanish learning apps in 2026 are Duolingo, Babbel, Pimsleur, Busuu, Rosetta Stone, SpanishPod101, Lingvist, Memrise, Tandem, HelloTalk, Anki, Clozemaster, Beelinguapp, Mango Languages, and Rocket Spanish. Here's how each one compares by price, method, and level.

### 4. Structured Data (JSON-LD Schema) — Per Site

**commasandchaos.com (already has Person schema, add these):**
- `Article` schema on every blog post (headline, author, datePublished, dateModified, description)
- `FAQPage` schema on any page/post with Q&A content
- `BreadcrumbList` schema sitewide
- `Service` schema on service pages (already has ProfessionalService)

**thebrandcrush.com (via Rank Math):**
- `Article` schema on every post (Rank Math handles this automatically)
- `FAQPage` schema on posts with FAQ sections
- `Organization` schema on homepage
- `Person` schema for author pages
- Ensure Rank Math → Schema settings are set to "Article" for posts

**audazrevista.com (via Rank Math):**
- Same as Brand Crush
- Additionally: `HowTo` schema on tutorial/guide posts (e.g., "How to order coffee in Spanish")
- `ItemList` schema on listicle posts (e.g., "15 best Spanish learning apps")

### 5. Heading Structure for AI Extraction

Structure all content with H2/H3 headings **phrased as questions** when possible. AI models extract Q&A pairs from heading+paragraph combos.

**Do this:**
```html
<h2>How much does a freelance copywriter cost in 2026?</h2>
<p>A freelance copywriter in India charges between $50-300 per page for website copy...</p>
```

**Not this:**
```html
<h2>Pricing</h2>
<p>Let's talk about what you can expect to invest...</p>
```

### 6. Internal Linking for Topical Authority

Every blog post must link to:
- At least 2 other posts in the same topic cluster
- The relevant pillar/service page
- The homepage (via author name or site name mention)

This builds topical authority signals that both Google and AI models use.

### 7. Freshness Signals

Content updated within 30 days gets 3.2x more AI citations. Rules:
- Update `dateModified` in schema markup when editing any post
- Update `<lastmod>` in sitemap.xml when any page changes
- Review and refresh top 10 posts monthly (add current year data, update stats)
- commasandchaos.com: Update sitemap.xml `<lastmod>` dates on every deploy

### 8. Brand Mention Distribution (Off-Site)

Brand web mentions correlate 0.664 with AI visibility (vs 0.218 for backlinks). Prioritize mentions on:
- **YouTube** (0.737 correlation — highest)
- **LinkedIn** (weekly thought leadership posts)
- **Reddit** (r/copywriting, r/freelanceWriters, r/marketing for commasandchaos; r/learnspanish for Audaz; r/marketing for Brand Crush)
- **Medium/Substack** (syndicate best posts)
- **HARO/Connectively** (journalist queries for backlinks)
- 4+ platform mentions make a brand 2.8x more likely to appear in ChatGPT responses

---

## commasandchaos.com — Specific Rules

### Tech Stack
- Static HTML + Vite 5.0 + vanilla CSS/JS
- Hosting: Hostinger (git deploy from `main` branch)
- GitHub: github.com/shisha-ami/commasandchaos.git
- No CMS — blog posts will be static HTML pages

### Target Keywords
| Priority | Keyword | Target Page |
|----------|---------|-------------|
| 1 | Amisha Sharma | Homepage + About |
| 2 | Freelance writer India | Homepage + pillar blog posts |
| 3 | Freelance copywriter India | Services + blog cluster |
| 4 | Hire freelance writer India | Friday blog posts (client-facing) |
| 5 | Freelance writer Delhi | About page + local schema |
| 6 | SaaS copywriter / fintech copywriter | Industry pages + Thursday posts |

### Blog Content Pillars (5 per week)
- **Monday**: SEO & Content Strategy (educational, targets marketing managers)
- **Tuesday**: Copywriting Craft & Techniques (skill-based, targets business owners)
- **Wednesday**: AI + Future of Writing (thought leadership, trending topics)
- **Thursday**: Industry Deep-Dives & Case Studies (authority, niche keywords)
- **Friday**: Hiring a Writer (client-facing, highest commercial intent)

### Content Calendar
See: `/Users/amisha/Documents/Personal Claude Projects/CALENDARS/commasandchaos-content-calendar.md`

### Blog Post Template Requirements
Every commasandchaos blog post must include:
1. Answer capsule in first 100 words
2. H2/H3 headings phrased as questions
3. 1,200-2,000 words minimum
4. FAQ section at bottom (3-5 questions) with FAQPage schema
5. Internal links to 2+ related posts + relevant service page
6. One clear CTA (contact form, discovery call, or WhatsApp)
7. Author byline: "Amisha Sharma" with link to about page
8. `Article` JSON-LD schema (headline, author, datePublished, description, image)
9. Meta title format: `[Post Title] | Amisha Sharma — commasandchaos.com`
10. Meta description: 150-160 chars, includes primary keyword, ends with value prop

---

## thebrandcrush.com — Specific Rules

### Voice
Mark Manson-esque: blunt, punchy, no hedging, earned irreverence. See memory: `feedback_brand_crush_tone.md`

### GEO Additions Needed
- [ ] Create llms.txt content (about Brand Crush, its mission, content pillars, author)
- [ ] Verify robots.txt allows AI crawlers (check via Rank Math or WP settings)
- [ ] Ensure all posts have Article schema via Rank Math
- [ ] Add FAQPage schema to posts with FAQ sections
- [ ] Add answer capsules to top 20 highest-traffic posts

### Content Calendar
Existing calendar covers Brand Crush. Continue using the established pillar schedule:
- Monday: Campaign Dissection or Failure Analysis
- Wednesday: Manipulation Tactics or Reality Check
- Friday: Industry Intelligence or Quick Debunk

---

## audazrevista.com — Specific Rules

### GEO Additions Needed
- [ ] Create llms.txt content (about Audaz, Spanish learning focus, content categories)
- [ ] Verify robots.txt allows AI crawlers
- [ ] Add HowTo schema to tutorial posts
- [ ] Add ItemList schema to listicle posts
- [ ] Add answer capsules to top 20 highest-traffic posts

### Content Calendar
Existing calendar covers Audaz. Continue using established categories:
- Language Learning (apps, methods, guides)
- Grammar & Vocabulary (verbs, phrases, pronunciation)
- Culture & Travel (Spain, Latin America, expat life)
- Practical Spanish (real-world situations)
- Entertainment (movies, music, TV, books)

---

## Cross-Site Linking Strategy

The three sites should reference each other where natural:
- commasandchaos.com About page → mentions founding Audaz Revista and The Brand Crush (already done)
- Audaz "About" or "Team" page → links to Amisha's portfolio at commasandchaos.com
- Brand Crush "About" → links to commasandchaos.com
- Blog posts can cross-reference where relevant (e.g., a commasandchaos post about "building a brand voice" can cite Brand Crush as a case study)

This creates a verified identity web that AI models use to build entity confidence.

---

## Publishing Workflow

### commasandchaos.com (Static)
1. Write blog post as HTML (or markdown → HTML)
2. Add to vite.config.js entry points
3. Update sitemap.xml with new URL + today's date
4. Commit and push to main → auto-deploys on Hostinger
5. Submit new URL to Google Search Console

### Brand Crush & Audaz (WordPress)
1. Use Elementor MCP tools to create/update posts
2. Set Rank Math SEO (title, description, focus keyword, schema)
3. Upload featured image
4. Publish
5. Mark as published in content tracker

### All Sites — After Publishing
- Share on LinkedIn within 24 hours
- Cross-post or syndicate within 7 days
- Check Google indexing at T+3, T+7, T+14
