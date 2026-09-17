# G1 WordPress Local Baseline Validation

Validation-only snapshot for the `conversion-leak-audit` project.

It is not the production site and does not deploy anything.

Scope:
- WordPress 7.1
- SaasLauncher 2.0.18
- Gutenberg / Full Site Editing baseline
- six public pages
- disabled URL-input placeholder
- local HTTP verification

Out of scope:
- Scanner integration
- payments
- production secrets
- VPS / domain / HTTPS
- shared infrastructure

Expected pages:
- Home
- How it works
- Demo
- Pricing
- FAQ
- Blog

The baseline intentionally uses only WordPress core blocks so it does not depend on a page builder or paid plugin.
