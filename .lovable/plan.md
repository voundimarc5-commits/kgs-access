

# KGS Access -- Full Business Website Rebuild

## Overview

This is a major transformation from the current single-page generic access control site into a multi-page, product-driven, commercially-ready website featuring the F7 and F18 smart locks with real specifications, compliance details, and a structure ready for UK/Europe market entry.

## Current State

The site is a single landing page (`/`) with generic "smart access control" messaging, no real products, no specifications, and no multi-page routing. The design system (dark hero, cool blue/chrome palette, Space Grotesk + Inter fonts) is solid and will be retained.

## What Changes

### 1. Multi-Page Architecture

The site moves from a single page to a proper multi-page application using React Router:

- **/** -- Homepage (reworked hero + product overview + trust signals)
- **/products** -- Products overview (F7 & F18 cards, comparison table)
- **/products/f7** -- F7 Smart Lock detailed page
- **/products/f18** -- F18 Smart Lock detailed page
- **/solutions** -- Solutions by audience (homeowners, Airbnb, property managers, businesses)
- **/compliance** -- CE & RoHS certifications, import quality, data responsibility
- **/about** -- About KGS Access / Kora Global Systems
- **/contact** -- Professional inquiry / pre-order lead capture form

### 2. Updated Positioning & Content

**Before:** Generic "enterprise access control platform" with abstract features (IoT-ready, multi-site scalability, identity-based access).

**After:** Concrete product company selling certified smart locks (F7 & F18) with real specs, targeting residential, rental, and small commercial markets in UK & Europe.

Key messaging shift:
- Tagline: "Secure Access. Simplified."
- Company: Kora Global Systems (US-based, operating internationally)
- Products: F7 (universal smart lock) and F18 (advanced/reinforced door lock)
- No pricing displayed -- value/security/service focus

### 3. Detailed File Plan

#### New Files to Create

| File | Purpose |
|------|---------|
| `src/components/Layout.tsx` | Shared layout with updated Navbar + Footer for all pages |
| `src/pages/Products.tsx` | Products overview: F7 & F18 cards + comparison table |
| `src/pages/ProductF7.tsx` | F7 detailed page: specs, features, use cases, certifications |
| `src/pages/ProductF18.tsx` | F18 detailed page: specs, features, use cases, certifications |
| `src/pages/Solutions.tsx` | Solutions by segment (homeowners, Airbnb, property managers, small business) |
| `src/pages/Compliance.tsx` | CE & RoHS explanation, import quality, hardware responsibility |
| `src/pages/About.tsx` | Company story, US-based, international ops, long-term vision |
| `src/pages/Contact.tsx` | Professional lead capture form (name, email, company, message) |
| `src/components/ProductSpecTable.tsx` | Reusable spec table component for F7/F18 pages |
| `src/components/ComparisonTable.tsx` | Side-by-side F7 vs F18 comparison table |
| `src/components/CertificationBadges.tsx` | CE + RoHS badge display component |
| `src/data/products.ts` | Centralized product data (specs, features, certifications) for F7 & F18 |

#### Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add all new routes, wrap with Layout |
| `src/components/Navbar.tsx` | Multi-page navigation (Products dropdown, Solutions, Compliance, About, Contact CTA) |
| `src/components/Footer.tsx` | Update: US-based company, operating regions UK & Europe (add UK), site navigation links |
| `src/components/HeroSection.tsx` | New tagline "Secure Access. Simplified.", updated value prop, product-focused CTAs |
| `src/components/WhatIsSection.tsx` | Rewrite: KGS Access designs smart lock solutions for residential, rentals, commercial |
| `src/components/FeaturesSection.tsx` | Replace with product highlights: F7 & F18 preview cards linking to detail pages |
| `src/components/UseCasesSection.tsx` | Updated: Apartments, Airbnb/rentals, property managers, small businesses |
| `src/components/VariantsSection.tsx` | Replace with concrete F7/F18 positioning (no longer "two variants planned" -- they exist) |
| `src/components/WhySection.tsx` | Update: US-based Kora Global Systems, certified hardware, professional support |
| `src/components/CTASection.tsx` | Link to /contact page instead of mailto |
| `src/pages/Index.tsx` | Restructured homepage sections |

### 4. Product Data (F7 & F18)

All product specifications will be stored in `src/data/products.ts` as a single source of truth:

**F7 Smart Lock:**
- Body: Aluminum alloy
- Unlock methods: Fingerprint (semiconductor), Passcode, RFID card, Mobile App
- App: Tuya + TTLock
- Connectivity: Bluetooth BLE, Wi-Fi via gateway
- Emergency power: USB-C
- Battery: 4x AA (12 months typical)
- Voltage: 4.5-9V
- Capacity: 120 fingerprints, 1000 IC cards, unlimited passwords
- Unlock time: 1.5s
- Certifications: CE (RED), RoHS
- Positioning: Universal, most standard doors

**F18 Smart Lock:**
- Body: Aluminum alloy
- Triple locking system (3 bolts)
- Same unlock methods as F7
- Bluetooth 5.0 BLE
- Higher mechanical security
- Certifications: CE, RoHS
- Positioning: Reinforced/thick doors, high-security

### 5. Compliance Page Content

- CE compliance explanation (Radio Equipment Directive -- EU/UK accepted)
- RoHS compliance (environmental & material safety)
- UK & EU market suitability
- Import quality assurance (DDP shipping)
- Professional business resale compliance
- Written in simple, non-technical language

### 6. Design Approach

- Retain the existing dark/chrome/cyan design system entirely
- Product pages use the light background sections for spec tables and readability
- Dark hero sections on each page for visual consistency
- Apple/Stripe-inspired minimalism: generous whitespace, clear typography hierarchy
- No "cheap gadget" aesthetics -- enterprise SaaS feeling maintained
- Comparison table styled with the existing card/border system

### 7. Legal & Compliance Guardrails

- Company presented as US-based (Kora Global Systems)
- Operating regions: UK & Europe (updated from Africa & Europe per new brief)
- No pricing displayed anywhere
- No uncertified product claims
- No invented partnerships or fake certifications
- Only CE and RoHS mentioned (verified)
- No exaggerated AI/crypto language

## Implementation Sequence

1. Create `src/data/products.ts` (product data foundation)
2. Create shared components (`Layout`, `ProductSpecTable`, `ComparisonTable`, `CertificationBadges`)
3. Create all new pages (Products, ProductF7, ProductF18, Solutions, Compliance, About, Contact)
4. Update existing components (Navbar, Footer, Hero, all homepage sections)
5. Update `App.tsx` with routing
6. Update `Index.tsx` with restructured homepage

