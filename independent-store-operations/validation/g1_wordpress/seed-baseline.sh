#!/usr/bin/env bash
set -euo pipefail

WP_PATH="${WP_PATH:-/tmp/conversion-leak-audit-wp}"
WP="php /tmp/wp-cli.phar --path=${WP_PATH}"
RESULT_DIR="${RESULT_DIR:-$PWD/independent-store-operations/validation/g1_wordpress/results}"
mkdir -p "$RESULT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Project-local child block theme. Parent SaasLauncher stays untouched.
CHILD="$WP_PATH/wp-content/themes/conversion-leak-audit-child"
mkdir -p "$CHILD/templates" "$WP_PATH/wp-content/mu-plugins"
cat > "$CHILD/style.css" <<'CSS'
/*
Theme Name: Conversion Leak Audit Child
Template: saaslauncher
Version: 0.1.0
Description: Minimal local baseline layer for Conversion Leak Audit.
*/
:root { --cla-accent:#5b4df5; --cla-border:#e6e9ef; --cla-muted:#5f6b7a; }
.cla-scan-shell{max-width:840px;margin:2rem auto;padding:1.25rem;border:1px solid var(--cla-border);border-radius:20px;background:#fff;box-shadow:0 18px 60px rgba(17,24,39,.08)}
.cla-scan-form{display:grid;grid-template-columns:1fr auto;gap:.75rem}
.cla-scan-form input{min-height:52px;border:1px solid var(--cla-border);border-radius:12px;padding:0 1rem;font:inherit}
.cla-scan-form button{min-height:52px;padding:0 1.25rem;border:0;border-radius:12px;background:var(--cla-accent);color:#fff;font-weight:700;cursor:not-allowed}
.cla-scan-note{color:var(--cla-muted);font-size:.92rem;margin-top:.8rem}
@media(max-width:680px){.cla-scan-form{grid-template-columns:1fr}}
CSS
cat > "$CHILD/theme.json" <<'JSON'
{
  "$schema":"https://schemas.wp.org/trunk/theme.json",
  "version":3,
  "settings":{"appearanceTools":true,"layout":{"contentSize":"760px","wideSize":"1180px"}}
}
JSON
cat > "$CHILD/templates/front-page.html" <<'HTML'
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)"><!-- wp:post-content {"layout":{"type":"constrained"}} /--></main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
HTML
cat > "$CHILD/templates/page.html" <<'HTML'
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group"><!-- wp:post-content {"layout":{"type":"constrained"}} /--></main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
HTML

cat > "$WP_PATH/wp-content/mu-plugins/conversion-leak-audit-baseline.php" <<'PHP'
<?php
/** Plugin Name: Conversion Leak Audit G1 Baseline */
if (!defined('ABSPATH')) { exit; }
function cla_scan_placeholder_shortcode(): string {
    return '<div class="cla-scan-shell" data-cla-g1-placeholder="true">'
        . '<strong>Free store scan</strong>'
        . '<form class="cla-scan-form" onsubmit="return false" aria-label="Store URL scan placeholder">'
        . '<label class="screen-reader-text" for="cla-store-url">Store URL</label>'
        . '<input id="cla-store-url" type="url" placeholder="https://yourstore.com" disabled aria-disabled="true">'
        . '<button type="button" disabled aria-disabled="true">Scan my store</button>'
        . '</form><p class="cla-scan-note">G1 placeholder only. Scanner connection is intentionally disabled.</p></div>';
}
add_shortcode('cla_scan_placeholder', 'cla_scan_placeholder_shortcode');
add_action('wp_enqueue_scripts', function (): void {
    wp_enqueue_style('cla-baseline-style', get_stylesheet_directory_uri() . '/style.css', [], '0.1.0');
});
PHP

cat > "$TMP/home.html" <<'HTML'
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Your store may not need more traffic. It may need fewer leaks.</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Enter your store URL. We inspect publicly observable friction, trust, transaction, and technical signals, then show the three findings worth checking first.</p><!-- /wp:paragraph -->
<!-- wp:shortcode -->[cla_scan_placeholder]<!-- /wp:shortcode -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Evidence before advice</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>We separate what the site clearly shows from what still needs analytics or an experiment. A public scan can surface observable risks; it cannot prove why your customers did not buy.</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What the free scan gives you</h2><!-- /wp:heading -->
<!-- wp:list --><ul><li>Top 3 observable findings</li><li>Page and evidence location</li><li>Why the issue may create uncertainty or friction</li><li>A safe next action</li></ul><!-- /wp:list -->
<!-- wp:paragraph --><p><strong>Claim boundary:</strong> We do not claim a public URL scan can identify your full revenue root cause or guarantee a conversion lift.</p><!-- /wp:paragraph -->
</div><!-- /wp:group -->
HTML

cat > "$TMP/how.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">How it works</h1><!-- /wp:heading -->
<!-- wp:list {"ordered":true} --><ol><li>Enter a public store URL.</li><li>We inspect bounded public evidence.</li><li>Rules distinguish facts, risks, missing context, and experiments.</li><li>You receive a prioritized repair queue.</li></ol><!-- /wp:list -->
<!-- wp:paragraph --><p>Public scanning does not claim to prove the root cause of weak sales. Private funnel data and experiments are separate evidence levels.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/demo.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Demo report</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>A sample report shows page location, observable fact, evidence confidence, why it may matter, and the next safe action.</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Example finding</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Shipping information is difficult to discover before checkout.</strong> This is an observable transparency risk, not a claim that shipping caused lost orders.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/pricing.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Pricing</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Free preview: the most important observable issues.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Full repair queue: pricing is still under validation. No production payment is enabled in this baseline.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/faq.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">FAQ</h1><!-- /wp:heading -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Does this tell me exactly why people are not buying?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>No. Public scanning finds observable facts and research-supported risks. Store analytics and experiments are needed for stronger causal conclusions.</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Will the scanner log in or place an order?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>No. V0 is bounded to public, non-destructive inspection.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/blog.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Insights</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Evidence-based notes on ecommerce decision friction, trust, checkout, merchandising, and measurement.</p><!-- /wp:paragraph -->
HTML

upsert_page() {
  local title="$1" slug="$2" file="$3" id
  id=$($WP post list --post_type=page --name="$slug" --field=ID --format=ids | awk '{print $1}')
  if [ -n "${id:-}" ]; then
    $WP post update "$id" --post_status=publish --post_title="$title" --post_content="$(cat "$file")" >/dev/null
    echo "$id"
  else
    $WP post create --post_type=page --post_status=publish --post_title="$title" --post_name="$slug" --post_content="$(cat "$file")" --porcelain
  fi
}

HOME_ID=$(upsert_page "Conversion Leak Audit" "home" "$TMP/home.html")
HOW_ID=$(upsert_page "How it works" "how-it-works" "$TMP/how.html")
DEMO_ID=$(upsert_page "Demo" "demo" "$TMP/demo.html")
PRICING_ID=$(upsert_page "Pricing" "pricing" "$TMP/pricing.html")
FAQ_ID=$(upsert_page "FAQ" "faq" "$TMP/faq.html")
BLOG_ID=$(upsert_page "Blog" "blog" "$TMP/blog.html")

# Remove core starter noise so Page List navigation stays project-only.
SAMPLE_ID=$($WP post list --post_type=page --name=sample-page --field=ID --format=ids | awk '{print $1}')
[ -z "${SAMPLE_ID:-}" ] || $WP post delete "$SAMPLE_ID" --force >/dev/null
HELLO_ID=$($WP post list --post_type=post --name=hello-world --field=ID --format=ids | awk '{print $1}')
[ -z "${HELLO_ID:-}" ] || $WP post delete "$HELLO_ID" --force >/dev/null

$WP theme activate conversion-leak-audit-child >/dev/null
$WP option update show_on_front page >/dev/null
$WP option update page_on_front "$HOME_ID" >/dev/null
$WP option update page_for_posts 0 >/dev/null
$WP option update blogname "Conversion Leak Audit" >/dev/null
$WP option update blogdescription "Evidence before more traffic." >/dev/null
$WP option update permalink_structure '' >/dev/null

cat > "$RESULT_DIR/page-ids.env" <<EOF
HOME_ID=$HOME_ID
HOW_ID=$HOW_ID
DEMO_ID=$DEMO_ID
PRICING_ID=$PRICING_ID
FAQ_ID=$FAQ_ID
BLOG_ID=$BLOG_ID
EOF
